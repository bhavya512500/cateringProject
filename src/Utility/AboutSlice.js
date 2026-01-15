import { createSlice } from "@reduxjs/toolkit";
export const AboutSlice = createSlice({
  name: "AboutSlice",
  initialState: {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    show: false,
    checkForm:"About"
  },
  reducers: {
    handleGetSUserObj: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      handleCheckForm("contact")
    },
    handleShow: (state, action) => {
      state.show = true;
      state.user = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      };
    },
    handleClose: (state, action) => {
      state.show = false;
    },
   handleCheckForm:(state,action)=>{
    // state.checkForm = action.payload
    console.log(state.checkForm)
   }
  },
});
export let { handleGetSUserObj, handleClose, handleShow,handleCheckForm } =
  AboutSlice.actions;
export default AboutSlice.reducer;
