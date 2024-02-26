import { createSlice } from "@reduxjs/toolkit";

export const backgroundSlice=createSlice({
    name:'background',
    initialState:{
        background:"white",
    },
    reducers:{
        setBackground:(state,action)=>{
            state.background=action.payload;
        }
    }
})

export const {setBackground}=backgroundSlice.actions;
export default backgroundSlice.reducer;