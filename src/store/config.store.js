import { combineReducers, createStore } from "redux";

import bills from "./reducers/bill.reducer";

export const store = createStore(combineReducers({bills}))