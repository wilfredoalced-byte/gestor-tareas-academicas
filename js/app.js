// Integrante 1: registro y almacenamiento local de tareas.
const CLAVE_TAREAS = "senati-gestor-tareas-v1";
let tareas = [];
try {
  const guardadas = JSON.parse(localStorage.getItem(CLAVE_TAREAS) || "[]");
  if (Array.isArray(guardadas)) {
    tareas = guardadas.filter(t => t && typeof t.id === "string" && typeof t.titulo === "string" && typeof t.responsable === "string" && typeof t.completada === "boolean");
  }
} catch (error) {
  console.warn("No se pudieron recuperar las tareas guardadas.", error);
}
function guardarTareas() {
  try { localStorage.setItem(CLAVE_TAREAS, JSON.stringify(tareas)); }
  catch (error) { console.warn("No se pudieron guardar las tareas.", error); }
}
function mostrarMensaje(texto) {
  document.getElementById("mensaje").textContent = texto;
}
const formulario = document.getElementById("formulario-tarea");
const tituloInput = document.getElementById("titulo");
const responsableInput = document.getElementById("responsable");
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const titulo = tituloInput.value.trim();
  const responsable = responsableInput.value.trim();
  if (!titulo || !responsable) {
    mostrarMensaje("Completa ambos campos para registrar una tarea.");
    return;
  }
  tareas.push({
    id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + "-" + Math.random().toString(36).slice(2),
    titulo, responsable, completada: false
  });
  guardarTareas();
  renderTareas();
  formulario.reset();
  tituloInput.focus();
  mostrarMensaje("Tarea registrada correctamente.");
});
