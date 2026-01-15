import { configureStore } from "@reduxjs/toolkit";
import AboutSlice  from "./AboutSlice.js";
import UserSlice  from "./UserSlice.js";

export const store = configureStore({
    reducer:{
        AboutSlice: AboutSlice,
        UserSlice 
    }
})