import { combineReducers } from "@reduxjs/toolkit";
import counter from './counter';
import user from './user'
export const AllReducers = combineReducers({
    counter,
    user
})