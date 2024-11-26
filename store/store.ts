import { services } from "@/api/services";
import { DataDocument } from "@/api/types-api";
import { makeAutoObservable, runInAction } from "mobx";

export const storeDocuments = makeAutoObservable({
  state: {
    title: "",
    path: "",
    documents: [] as DataDocument[],
    listCategories: [] as { name: string }[],
  },

  async fetchDocuments(slug: string) {
    try {
      const res = await services.getCategory(slug);
      runInAction(() => {
        if (res._embedded.items.length === 0) {
          this.state.title = slug;
          this.state.documents = [];
          return;
        }
        this.state.documents = res._embedded.items;
        this.state.title = slug;
      });
    } catch (error) {
      console.log(error);
    }
  },

  async fetchAllDocuments() {
    const res = await services.getAllDocuments();
    runInAction(() => {
      if (res.length === 0) return;
      this.state.documents = res;
      this.state.title = "Все документы";
    });
    return res;
  },

  async fetchCategories() {
    const res = await services.getListCategories();
    runInAction(() => {
      if (res.length === 0) return;
      this.state.listCategories = res;
    });
    return res;
  },

  async fetchDocument(path: string) {
    this.state.path = "";
    const res = await services.getDocument(path);
    runInAction(() => {
      if (res) this.state.path = res.href;
    });
    return res;
  },

  async delete(path: string) {
    const res = await services.deleteFile(path);
    runInAction(() => {
      if (res === 202 || res === 204) {
        this.state.documents = this.state.documents.filter(
          (item) => item.name !== path.split("/").pop()
        );
        this.state.path = "";
      }
    });
    return res;
  },

  async move(from: string, to: string) {
    const res = await services.moveFile(from, to);
    runInAction(() => {
      if (res === 201) {
        this.state.documents = this.state.documents.filter(
          (item) => item.name !== from.split("/").pop()
        );
        this.state.path = "";
      }
    });
  },
});
