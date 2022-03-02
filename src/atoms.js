import { atom } from "recoil";

export const Data = atom({
  key: "Data",
  default: [],
});
export const SearchName = atom({
  key: "name",
  default: "",
});
export const Comments = atom({
  key: "comments",
  default: "",
});
