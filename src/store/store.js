import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import cakeReducer from './cakeSlice';

export const store = configureStore({
    reducer:{
        counter : counterReducer,
        cake: cakeReducer
    }
})