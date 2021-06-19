import { createStore } from "redux";
import { producttReducer } from './reducres';

export const myStore = createStore<any, any, any, any>(producttReducer);