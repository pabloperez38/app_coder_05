import { combineReducers, createStore } from "redux";
import { reductorCategoria, reductorProductos } from "./reductores/index";

const rootReductores = combineReducers({
  categoria: reductorCategoria,
  productos: reductorProductos,
});

export default createStore(rootReductores);
