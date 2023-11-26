import { create } from "./models/todo.model.js";
import { showPrioridad, showCompletadas } from "./funciones.js";
document.addEventListener("DOMContentLoaded", iniciar);

async function iniciar() {
let prioridadAlta = document.querySelector("#prioridad-alta");
let prioridadMedia = document.querySelector("#prioridad-media");
let prioridadBaja = document.querySelector("#prioridad-baja");
let completadas = document.querySelector("#completadas");
let botonFormularioHome = document.querySelector("#boton-formulario-home");


  await showPrioridad(prioridadAlta);
  await showPrioridad(prioridadMedia, "media");
  await showPrioridad(prioridadBaja, "baja");
  await showCompletadas(completadas, "1");

botonFormularioHome.addEventListener("click", async (e) => {
  e.preventDefault();

  const titulo = document.querySelector("#title").value;
  const descripcion = document.querySelector("#description").value;
  const prioridad = document.querySelector("#prioridad").value;

  const tarea = {
    title: titulo,
    description: descripcion,
    prioridad: prioridad,
  };

  await create(tarea);

  location.reload();

});
}