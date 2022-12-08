import { PRODUCTOS } from "../../constantes/datos";
import { tipoProductos } from "../tipos";

const { PRODUCTOS_FILTRADOS, SELECCIONAR_PRODUCTO } = tipoProductos;
const initialState = {
  productos: PRODUCTOS,
  productosFiltrados: [],
  selected: null,
};

const reductorProductos = (state = initialState, action) => {
  switch (action.type) {
    case SELECCIONAR_PRODUCTO:
      return {
        ...state,
        selected: state.productos.find(
          (producto) => producto.id === action.productoId
        ),
      };
    case PRODUCTOS_FILTRADOS:
      return {
        ...state,
        productosFiltrados: state.productos.filter(
          (producto) => producto.categoryId === action.categoriaId
        ),
      };
    default:
      return state;
  }
};

export default reductorProductos;
