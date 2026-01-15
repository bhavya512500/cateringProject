import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
  try {
    const res =await axios.get(
      "https://690065aaff8d792314b99ef0.mockapi.io/users/users"
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    userList: [],
    user: {
      name: "",
      email: "",
      age: "",
      address: "",
      contact: "",
      image: "",
    },
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state, actions) => {
      state.isLoading = true;
    }).addCase(getAllUsers.fulfilled,(state,action)=>{
        state.isLoading = false;
        console.log(action.payload)
        state.userList = action.payload
    });

  },
});

export const {} = UserSlice.actions;
export default UserSlice.reducer;
