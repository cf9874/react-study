import { atom, selector } from "recoil";
import { DESC } from "./enum";

export interface IToDo {
  id: number;
  text: string;
  desc: DESC;
}

export const descState = atom<DESC>({
  key: "desc",
  default: DESC.TODO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const desc = get(descState);

    return toDos.filter((e) => e.desc === desc);
    //여기서 return하는 값이 state가 된다.
  },
});
