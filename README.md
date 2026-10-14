# Gestor de Tareas Académicas — SENATI

Aplicación web colaborativa para registrar, consultar, completar y eliminar tareas académicas.

## Funcionalidades
- Registrar tareas con título y responsable.
- Consultar el listado y el resumen de tareas pendientes y completadas.
- Marcar tareas como completadas o pendientes y eliminarlas.
- Conservar las tareas en el navegador mediante `localStorage`.
- Diseño adaptable a computadoras y celulares; controles accesibles.

## Ejecutar
Abre `index.html` en el navegador o utiliza **Live Server** en Visual Studio Code. No requiere instalación ni servidor.

## Archivos y trabajo colaborativo
- `js/app.js`: registro y almacenamiento (integrante 1).
- `js/listado.js`: listado de tareas (integrante 2).
- `js/estado.js`: completar y eliminar (integrante 3).
- `css/styles.css`: diseño adaptable (integrante 4).
- `index.html`: integración de módulos.

## Pruebas manuales
1. Abrir la página: debe aparecer el mensaje de lista vacía.
2. Registrar una tarea válida: debe mostrarse en el listado.
3. Intentar enviar campos vacíos: el navegador debe impedirlo.
4. Completar una tarea y devolverla a pendiente.
5. Recargar la página: las tareas deben conservarse.
6. Eliminar una tarea y comprobar el contador.
7. Revisar el diseño en pantalla de celular.

**Nota:** Las tareas se guardan solo en el navegador/dispositivo actual. No hay cuentas, sincronización ni base de datos remota.

Proyecto colaborativo — Seminario Complementario II, SENATI.
