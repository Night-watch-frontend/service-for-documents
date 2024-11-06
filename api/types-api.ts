export type DataDocument = {
  name: string;
  path: string;
};
export type DataDocuments = {
  items: DataDocument[];
};

export type Category = {
  _embedded: DataDocuments;
};

export type Link = {
  href: string;
};
