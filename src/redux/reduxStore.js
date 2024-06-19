import {configureStore} from '@reduxjs/toolkit';
import loginReducer from '../slices/loginSlice';

export const store = configureStore({
    reducer: {
        // Define a top-level state field named `counter`, handled by `counterReducer`
        login: loginReducer,
    },
    });

