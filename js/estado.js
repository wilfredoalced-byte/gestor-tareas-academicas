function cambiarEstado(id) {
    const tarea = tareas.find(item => item.id === id);

    tarea.completada = !tarea.completada;
}