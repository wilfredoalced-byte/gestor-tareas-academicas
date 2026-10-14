function cambiarEstado(id) {
    const tarea = tareas.find(item => item.id === id);

    if (!tarea) return;

    tarea.completada = !tarea.completada;
    renderTareas();
}

function eliminarTarea(id) {
    const indice = tareas.findIndex(item => item.id === id);

    if (indice === -1) return;

    tareas.splice(indice, 1);
    renderTareas();
}