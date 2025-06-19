import { configureStore, Tuple } from "@reduxjs/toolkit";
import { AllReducers } from "./slices";
import logger from 'redux-logger'
export const makeStore = () => {
    console.log('🛠️ Store initialized');
    return configureStore({
        reducer: AllReducers,
        middleware: (dm) => dm().concat(logger),
        devTools: true
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']