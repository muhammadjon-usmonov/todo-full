import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IListItem {
  title: string;
  color: string;
  font: string;
  id: string;
}

export interface CounterState {
  list: IListItem[];
}

const initialState: CounterState = {
  list: JSON.parse(localStorage.getItem("list") || "[]") || [],
};

export const main = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<Omit<IListItem, "id">>) => {
      state.list.push({
        ...payload,
        id: crypto.randomUUID(),
      });
      localStorage.setItem("list", JSON.stringify(state.list));
    },

    editItem: (state, { payload }: PayloadAction<IListItem>) => {
      state.list = state.list.map((item) => {
        return item.id === payload.id ? { ...item, ...payload } : item;
      });
      localStorage.setItem("list", JSON.stringify(state.list));
    },

    removeItem: (state, { payload }: PayloadAction<Pick<IListItem, "id">>) => {
      state.list = state.list.filter((item) => item?.id !== payload.id);
      localStorage.setItem("list", JSON.stringify(state.list));
    },
  },
});

export const { addItem, editItem, removeItem } = main.actions;
export default main.reducer;
