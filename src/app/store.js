import {configureStore} from '@reduxjs/toolkit';
import  optionsReducer from '../features/options/optionsSlice';
import  dataReducer from '../features/data/dataSlice';
import  backgroundReducer from '../features/background/backgroundSlice';

export const store=configureStore({
    reducer:{
        click: optionsReducer,
        setData: dataReducer,
        setBackground: backgroundReducer
    },
})
