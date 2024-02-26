import { createSlice } from "@reduxjs/toolkit";

export const optionsSlice=createSlice({
    name:'option',
    initialState:{
        option:null,
    },
    reducers:{
        click:(state,action)=>{
            state.option=action.payload;
        }
        // logout: (state)=>{
            // state.user=null;
        // }
    }
})

export const {click}=optionsSlice.actions;
export default optionsSlice.reducer;