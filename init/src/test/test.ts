export type SuperPrint = {
  (arr: number[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((e) => console.log(e));
};

export type Last = {
  (arr: []): any;
};

export type Prepent = {
  (arr: [], item: any): [];
};
