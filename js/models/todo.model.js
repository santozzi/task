import {entrada, modificacion} from './connect.js';
const URL="http://localhost/restphp/api/v1/task.rest.php";

export async function findAll(){
    return await entrada(URL);
};

export async function findId(id){
    return await entrada(URL+"?id="+id);
}
export async function findPrioridad(prioridad){
    return await entrada(URL+"?prioridad="+prioridad);
}
//si completo es 1 trae las tareas completadas, si es 0 trae
//las incompletas
export async function findCompletada(completo){
    return await entrada(URL+"?completed="+completo);
}
export async function create(tarea){
    console.log("tarea comun",tarea);
    console.log("tarea json",JSON.stringify(tarea));

    return await modificacion(URL,JSON.stringify(tarea),"POST");
}
export async function eliminar(id){
    return await modificacion(URL+"?id="+id,"","DELETE");
}
export async function modificar(id,tarea){


    return await modificacion(URL+"?id="+id,JSON.stringify(tarea),"PUT");
}

export async function completado(id){
    const tarea=await findId(id);

    let editada = {
        "id": tarea.id,
        "title": tarea.title,
        "description": tarea.description,
        "created_at": tarea.created_at,
        "completed": tarea.completed==1?0:1,
        "prioridad": tarea.prioridad
    }
    
    return await modificar(id,editada);
}