
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

        texto.textContent = `${tarea.titulo} — ${tarea.responsable} (${tarea.completada ? 'Completada' : 'Pendiente'})`;

        li.appendChild(texto);

        lista.appendChild(li);
    });

}
