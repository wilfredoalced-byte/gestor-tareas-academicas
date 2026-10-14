
function renderTareas() {
    const lista = document.getElementById('lista-tareas');

    lista.replaceChildren();

    if (tareas.length === 0) {
        const vacio = document.createElement('li');

        vacio.textContent = 'No hay tareas registradas.';

        lista.appendChild(vacio);

        return;
    }
}
