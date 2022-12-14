import { combineReducers, createStore } from "redux";
import { reductorCategoria, reductorProductos } from "./reductores";

const rootReducer = combineReducers({
  categoria: reductorCategoria,
  productos: reductorProductos,
});

export default createStore(rootReducer);
