import { createSlice } from "@reduxjs/toolkit";

type User = {
  id: string;
  name: string;
};

type usersState = User[];

const initialState: usersState = [
  {
    id: "0",
    name: "Dude Lebowski",
  },
  {
    id: "1",
    name: "Neil Young",
  },
  {
    id: "2",
    name: "Dave Gray",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
