import { createStore } from "redux";
import RootReducers from "./Components/Reducer/Index";

export const DataStore = createStore(RootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());