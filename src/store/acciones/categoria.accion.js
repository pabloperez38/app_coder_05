import { tiposCategoria } from "../tipos";

const { SELECCIONAR_CATEGORIA } = tiposCategoria;

export const seleccionarCategoria = (id) => ({
  type: SELECCIONAR_CATEGORIA,
  categoriaId: id,
});
