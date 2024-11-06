const baseUrl = process.env.API_URL;
const token = process.env.TOKEN;

interface Document {
  name: string;
  path: string;
}
interface Documents {
  items: Document[];
}

interface Category {
  _embedded: Documents;
}

interface Link {
  href: string;
}

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
        cache: "no-store",
      }
    );
    const data: Link = await response.json();
    return data;
  },

  async getAllDocuments(): Promise<Documents> {
    const response: Response = await fetch(
      `${baseUrl}/files?fields=items.name%2Citems.path`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `OAuth ${token}`,
        },
        cache: "no-store",
      }
    );
    const data: Documents = await response.json();
    return data;
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
        cache: "no-store",
      }
    );
    const data: Category = await response.json();
    return data;
  },

  async moveFile(pathFrom: string, pathTo: string): Promise<void> {
    const res = await fetch(
      `${baseUrl}/move?from=CaseLabDocuments/${pathFrom}&path=CaseLabDocuments/${pathTo}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `OAuth ${token}`,
        },
        cache: "no-store",
      }
    );
    const data = await res.json();
    console.log(data);
  },

  async deleteFile(path: string): Promise<void> {
    const res = await fetch(`${baseUrl}/delete?path=CaseLabDocuments/${path}`, {
      method: "DELETE",
      headers: {
        Authorization: `OAuth ${token}`,
      },
      cache: "no-store",
    });
    const data = await res.json();
    console.log(data);
  },
};
