import { listaTareas } from "/resources/js/app.js"

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    listaTareas("tarea", "agregar-tarea", "mostrarTareas", "mostrarTareasTerminadas")
})