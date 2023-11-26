import { create } from "./models/todo.model.js";
import { showCompletadas } from "./funciones.js";
document.addEventListener("DOMContentLoaded", iniciar);

async function iniciar() {
  let completados = document.querySelector("#completados");

  let botonFormularioHome = document.querySelector("#boton-formulario-home");
  await showCompletadas(completados);

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
