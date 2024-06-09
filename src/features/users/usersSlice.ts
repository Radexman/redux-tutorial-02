import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { User } from "../../types/user.types";
import axios from "axios";

const USERS_URL = "http://jsonplaceholder.typicode.com/users";

type usersState = User[];

const initialState: usersState = [];

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USERS_URL);

  console.log(response.data);

  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchUsers.fulfilled,
      (_, action: PayloadAction<User[]>) => {
        return action.payload;
      },
    );
  },
});

export default usersSlice.reducer;
