import {configureStore} from '@reduxjs/toolkit';
import  optionsReducer from '../features/options/optionsSlice';
import  dataReducer from '../features/data/dataSlice';
import  backgroundReducer from '../features/background/backgroundSlice';
import finaloptionsReducer from '../features/finaloptions/finaloptionsSlice';
export const store=configureStore({
    reducer:{
        click: optionsReducer,
        setFinal: finaloptionsReducer,
        setData: dataReducer,
        setBackground: backgroundReducer
    },
})
