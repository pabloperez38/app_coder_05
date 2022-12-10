import { tiposProductos } from "../tipos";

const { PRODUCTOS_FILTRADOS, SELECCIONAR_PRODUCTO } = tiposProductos;

export const seleccionarProducto = (id) => ({
  type: SELECCIONAR_PRODUCTO,
  productoId: id,
});

export const productosFiltrados = (id) => ({
  type: PRODUCTOS_FILTRADOS,
  categoriaId: id,
});
