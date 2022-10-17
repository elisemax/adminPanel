import { combineReducers,  applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
const rootReducer = combineReducers({
    // Add reducers here
})
export const store = configureStore({
    reducer: rootReducer,
   //applyMiddleware: applyMiddleware(thunk)
});
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

