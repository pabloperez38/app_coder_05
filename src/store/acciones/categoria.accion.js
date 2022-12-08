import { tipoCategoria } from "../tipos";

const { SELECCIONAR_CATEGORIA } = tipoCategoria;
export const seleccionarCategoria = (id) => ({
  type: SELECCIONAR_CATEGORIA,
  categoriaId: id,
});
