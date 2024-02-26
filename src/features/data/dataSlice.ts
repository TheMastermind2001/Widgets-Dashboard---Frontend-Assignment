import { createSlice } from "@reduxjs/toolkit";

export const dataSlice=createSlice({
    name:'data',
    initialState:{
        dashboardData:null,
    },
    reducers:{
        setData:(state,action)=>{
            state.dashboardData=action.payload;
        }
    }
})

export const {setData}=dataSlice.actions;
export default dataSlice.reducer;