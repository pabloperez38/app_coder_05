import { combineReducers, createStore } from "redux";
import { reductorCategoria, reductorProductos } from "./reductores";

const rootReductores = combineReducers({
  categoria: reductorCategoria,
  productos: reductorProductos,
});

export default createStore(rootReductores);
