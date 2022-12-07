export const formatoFecha = (time) => {
  const fecha = new Date(time);
  return fecha.toLocaleDateString("es-ES");
};
