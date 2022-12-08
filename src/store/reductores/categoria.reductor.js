import { CATEGORIAS } from "../../constantes/datos";
import { tipoCategoria } from "../tipos";

const { SELECCIONAR_CATEGORIA } = tipoCategoria;
const initialState = { categorias: CATEGORIAS, selected: null };

const reductorCategoria = (state = initialState, action) => {
  switch (action.type) {
    case SELECCIONAR_CATEGORIA:
      const indexCategoria = state.categorias.findIndex(
        (categoria) => categoria.id === action.categoriaId
      );
      if (indexCategoria === -1) return state;
      return { ...state, selected: state.categorias[indexCategoria] };
    default:
      return state;
  }
};

export default reductorCategoria;
