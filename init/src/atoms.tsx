import { atom, selector } from "recoil";

export interface IToDo {
  id: number;
  text: string;
  desc: "TODO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const list = [
      toDos.filter((e) => e.desc === "TODO"),
      toDos.filter((e) => e.desc === "DOING"),
      toDos.filter((e) => e.desc === "DONE"),
    ];
    return list;
    //여기서 return하는 값이 state가 된다.
  },
});
