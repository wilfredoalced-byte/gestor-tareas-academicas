// Integrante 2: visualización de tareas.
function renderTareas() {
  const lista = document.getElementById("lista-tareas");
  const resumen = document.getElementById("resumen");
  lista.replaceChildren();
  const completadas = tareas.filter(t => t.completada).length;
  resumen.textContent = tareas.length + " tarea(s) · " + completadas + " completada(s) · " + (tareas.length - completadas) + " pendiente(s)";
  if (tareas.length === 0) {
    const vacio = document.createElement("li");
    vacio.className = "estado-vacio";
    vacio.textContent = "Todavía no hay tareas. Registra la primera con el formulario.";
    lista.appendChild(vacio);
    return;
  }
  tareas.forEach(tarea => {
    const li = document.createElement("li");
    li.className = "tarea" + (tarea.completada ? " completada" : "");
    const info = document.createElement("div");
    info.className = "tarea-info";
    const titulo = document.createElement("strong");
    titulo.textContent = tarea.titulo;
    const responsable = document.createElement("span");
    responsable.textContent = "Responsable: " + tarea.responsable;
    const estado = document.createElement("span");
    estado.className = "estado";
    estado.textContent = tarea.completada ? "Completada" : "Pendiente";
    info.append(titulo, responsable, estado);
    const acciones = document.createElement("div");
    acciones.className = "acciones";
    const completar = document.createElement("button");
    completar.type = "button";
    completar.className = "boton-estado";
    completar.textContent = tarea.completada ? "Marcar pendiente" : "Completar";
    completar.setAttribute("aria-label", completar.textContent + ": " + tarea.titulo);
    completar.addEventListener("click", () => cambiarEstado(tarea.id));
    const eliminar = document.createElement("button");
    eliminar.type = "button";
    eliminar.className = "boton-eliminar";
    eliminar.textContent = "Eliminar";
    eliminar.setAttribute("aria-label", "Eliminar tarea: " + tarea.titulo);
    eliminar.addEventListener("click", () => eliminarTarea(tarea.id));
    acciones.append(completar, eliminar);
    li.append(info, acciones);
    lista.appendChild(li);
  });
}
