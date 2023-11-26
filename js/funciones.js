
import { findPrioridad, findCompletada } from "./models/todo.model.js";
  import { tarjeta } from "./tarjeta.js";
export async function showPrioridad(nodo, prioridad = "alta") {
    const tarjetasAltas = await findPrioridad(prioridad);
  
    tarjetasAltas.forEach((element) => {
      const task = tarjeta(
        element.id,
        element.title,
        element.description,
        element.created_at,
        element.completed,
        element.prioridad
      );
      nodo.appendChild(task);
    });
  }

  export async function showCompletadas(nodo, completada = "1") {
    const tarjetasAltas = await findCompletada(completada);
  
    tarjetasAltas.forEach((element) => {
      const task = tarjeta(
        element.id,
        element.title,
        element.description,
        element.created_at,
        element.completed,
        element.prioridad
      );
      nodo.appendChild(task);
    });
  }