
function renderTareas() {
    const lista = document.getElementById('lista-tareas');

    lista.replaceChildren();

    if (tareas.length === 0) {
        const vacio = document.createElement('li');

        vacio.textContent = 'No hay tareas registradas.';

        lista.appendChild(vacio);

        return;
    }

    tareas.forEach(tarea => {
        const li = document.createElement('li');

        const texto = document.createElement('span');

        texto.textContent = `${tarea.titulo} — ${tarea.responsable} (${tarea.completada ? 'Completada' : 'Pendiente'}) `;

        const completar = document.createElement('button');

        completar.textContent = tarea.completada ? 'Pendiente' : 'Completar';

        completar.onclick = () => cambiarEstado(tarea.id);

        const eliminar = document.createElement('button');

        eliminar.textContent = 'Eliminar';

        eliminar.onclick = () => eliminarTarea(tarea.id);

        li.append(texto, completar, eliminar);

        lista.appendChild(li);
    });


}
