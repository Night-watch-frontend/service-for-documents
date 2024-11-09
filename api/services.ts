import {
  Link,
  DataDocuments,
  Category,
  CategoryItem,
  DataDocument,
} from "./types-api";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const token = process.env.NEXT_PUBLIC_TOKEN;

export const services = {
  async getDocument(path: string): Promise<Link> {
    const response: Response = await fetch(
      `${baseUrl}/download?path=CaseLabDocuments/${path}&fields=href`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `OAuth ${token}`,
        },
      }
    );
    const data: Link = await response.json();
    return data;
  },

  async getAllDocuments(): Promise<DataDocument[]> {
    const response: Response = await fetch(
      `${baseUrl}/files?fields=items.name%2Citems.path`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `OAuth ${token}`,
        },
      }
    );
    const data: DataDocuments = await response.json();
    return data.items;
  },

  async getCategory(category: string): Promise<Category> {
    const response: Response = await fetch(
      `${baseUrl}?path=CaseLabDocuments/${category}&fields=_embedded.items.name`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `OAuth ${token}`,
        },
      }
    );
    const data: Category = await response.json();
    return data;
  },

  async getListCategories(): Promise<{ name: string }[]> {
    const response = await fetch(
      `${baseUrl}?path=CaseLabDocuments&fields=_embedded.items.name`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `OAuth ${token}`,
        },
      }
    );
    const data: CategoryItem = await response.json();
    return data._embedded.items;
  },

  async moveFile(pathFrom: string, pathTo: string): Promise<void> {
    const res = await fetch(
      `${baseUrl}/move?from=CaseLabDocuments/${pathFrom}&path=CaseLabDocuments/${pathTo}`,
      {
        method: "POST",
        headers: {
          Authorization: `OAuth ${token}`,
        },
      }
    );
    const data: void = await res.json();
    console.log(data);
  },

  async deleteFile(path: string): Promise<number> {
    const res = await fetch(`${baseUrl}?path=CaseLabDocuments/${path}`, {
      method: "DELETE",
      headers: {
        Authorization: `OAuth ${token}`,
      },
    });
    const data: Response = await res;
    console.log(data.status);
    return data.status;
  },
};
