import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
const rootReducers = combineReducers({
  auth: authReducer,
});

export default rootReducers;
