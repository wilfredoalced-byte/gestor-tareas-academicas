// Integrante 3: cambio de estado y eliminación.
function cambiarEstado(id) {
  const tarea = tareas.find(item => item.id === id);
  if (!tarea) return;
  tarea.completada = !tarea.completada;
  guardarTareas();
  renderTareas();
  mostrarMensaje("Estado de la tarea actualizado.");
}
function eliminarTarea(id) {
  const indice = tareas.findIndex(item => item.id === id);
  if (indice === -1) return;
  tareas.splice(indice, 1);
  guardarTareas();
  renderTareas();
  mostrarMensaje("Tarea eliminada.");
}
