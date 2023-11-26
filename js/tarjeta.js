import {eliminar,modificar,completado as comp} from './models/todo.model.js';
export function tarjeta(id, titulo, descripcion, creado, completado, prioridad) {
    const task = document.createElement('article');
    task.classList.add('tarjeta');
    if(completado=='1'){
        prioridad='';
    }
    task.innerHTML = `
    
        <div class="encabezado-task">
            <h5> ${titulo} </h5>
            <div id="completar${id}">
            ${completado==1?'<i class="fa-solid fa-check">':'<i class="fa-solid fa-xmark"></i>'}</i>
            </div>
        </div>
    
    
        <div class="cuerpo-task ${prioridad}">
    
            <!-- <p> ${completado} </p> -->
            <p> ${descripcion} </p>
            <div class="footer-card">
             
                <div class="edit"  id="edit${id}" >
                    <i class=" fa-solid fa-pencil"></i>
    </div>
             
               
                    <div class="delete" id="delete${id}">
                        <i class=" fa-solid fa-trash-can"></i>
                    </div>
               
               
            </div>
        </div>
    
    `;
     const botonEliminar = task.querySelector(`#delete${id}`);
        botonEliminar.addEventListener("click", async (e) => {
       
            const respuesta = await eliminar(id);
            if (!respuesta) {
                task.remove();
            }
      
        });
    const completar = task.querySelector(`#completar${id}`);
    completar.addEventListener("click", async (e) => {
        
        const respuesta = await comp(id);
        location.reload();
    });


    const botonEditar = task.querySelector(`#edit${id}`);
    botonEditar.addEventListener("click", async (e) => {
        const title = document.querySelector("#title");
        const description = document.querySelector("#description");
        const prioridadform = document.querySelector("#prioridad");
        const botonFormulario = document.querySelector("#boton-formulario-home");
        const botonFormularioEditar = document.querySelector("#boton-formulario-edit");

        title.value = titulo;
        description.value = descripcion;
        prioridadform.value = prioridad;
        botonFormulario.style.display = "none";
        botonFormularioEditar.style.display = 'block';
        botonFormularioEditar.addEventListener("click", async (e) => {
            e.preventDefault();
            const titulo = document.querySelector("#title").value;
            const descripcion = document.querySelector("#description").value;
            const prioridad = document.querySelector("#prioridad").value;
            const tarea = {
                title: titulo,
                description: descripcion,
                prioridad: prioridad,
            };
            const respuesta = await modificar(id, tarea);
            if (!respuesta) {
                location.reload();
            }
        });

    });
        return task;
    }