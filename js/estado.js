function cambiarEstado(id) {
    const tarea = tareas.find(item => item.id === id);

    tarea.completada = !tarea.completada;
}

function eliminarTarea(id) {
    const indice = tareas.findIndex(item => item.id === id);

    tareas.splice(indice, 1);
}