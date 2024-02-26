import { createSlice } from "@reduxjs/toolkit";

export const finaloptionsSlice=createSlice({
    name:'finaloption',
    initialState:{
        finaloption:null,
    },
    reducers:{
        setFinal:(state,action)=>{
            state.finaloption=action.payload;
        }
        // logout: (state)=>{
            // state.user=null;
        // }
    }
})

export const {setFinal}=finaloptionsSlice.actions;
export default finaloptionsSlice.reducer;