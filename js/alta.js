import { create } from "./models/todo.model.js";
import { showPrioridad } from "./funciones.js";
document.addEventListener("DOMContentLoaded", iniciar);

async function iniciar() {
  let prioridadAlta = document.querySelector("#prioridad-alta");

  let botonFormularioHome = document.querySelector("#boton-formulario-home");

  await showPrioridad(prioridadAlta);

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
