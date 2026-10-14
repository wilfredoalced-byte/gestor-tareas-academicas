
// Proyecto: Gestor de Tareas Académicas
// SENATI - Seminario Complementario II

// Almacenamiento temporal de las tareas
const tareas = [];

// Integrante 1: Registro de tareas
// Aquí se implementará el formulario.

const formulario = document.getElementById("formulario-tarea");
const tituloInput = document.getElementById("titulo");
const responsableInput = document.getElementById("responsable");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const titulo = tituloInput.value.trim();
    const responsable = responsableInput.value.trim();

    if (titulo === "" || responsable === "") {
        alert("Completa todos los campos.");
        return;
    }

    const nuevaTarea = {
        id: Date.now(),
        titulo: titulo,
        responsable: responsable,
        completada: false
    };

    tareas.push(nuevaTarea);

    console.log("Tarea registrada:", nuevaTarea);
    alert("Tarea registrada correctamente");

    formulario.reset();
});


// Integrante 2: Listado de tareas
// Aquí se implementará la visualización.

// Integrante 3: Estado y eliminación
// Aquí se implementarán completar y eliminar.

// Integrante 4: Diseño y pruebas
// Aquí se realizarán mejoras visuales y validaciones.
