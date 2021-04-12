const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let contadortareas = 0;
let contadorTareasListas = 0;
let arregloTareas = [];

function addTodo() {
  let nombreTarea = prompt('Por favor ingrese una tarea: ')

  if (nombreTarea.length > 5) {
    contadortareas++;
    contadorTareasListas++;
    arregloTareas.push({'name' : nombreTarea, 'checkeado' : false});
    console.log(arregloTareas);
    mostrarTareas();
  } else {
    alert('Tarea Invalida, debe contener mas de 5 caracteres!!!')
  }
}

function mostrarTareas(){
  let html = '';
  itemCountSpan.innerHTML = contadortareas;
  uncheckedCountSpan.innerHTML = contadorTareasListas;
    for (let i = 0; i < arregloTareas.length; i++) {

      if(arregloTareas[i].checkeado){
        html += 
        `
          <li class="todo-container" name="${arregloTareas[i].name}">
            <input type="checkbox" class="todo-checkbox" id="${arregloTareas[i].name}" onClick = "tareaCompletada(${i})" checked>
            <span class="todo-text">${arregloTareas[i].name}</span>
            <button class="todo-delete" onClick="eliminarTarea(${i})">Delete</button>
          </li>
        `
      }else{
        html += 
        `
          <li class="todo-container" name="${arregloTareas[i].name}">
            <input type="checkbox" class="todo-checkbox" id="${arregloTareas[i].name}" onClick = "tareaCompletada(${i})">
            <span class="todo-text">${arregloTareas[i].name}</span>
            <button class="todo-delete" onClick="eliminarTarea(${i})">Delete</button>
          </li>
        `
      }
      
    }
    document.getElementById('todo-list').innerHTML = html;
}

function eliminarTarea(idTarea){
  arregloTareas.splice(idTarea,1);
  contadortareas--;
  contadorTareasListas--;
  mostrarTareas();
}

function tareaCompletada(idtarea){
  let checkbox = document.getElementById(arregloTareas[idtarea].name);
  
    if(checkbox.checked){
      contadorTareasListas--;
        on(idtarea);
    }else{
      contadorTareasListas++;
       off(idtarea);
    }
  
}
function on(idtarea){
  arregloTareas[idtarea].checkeado = true;
  uncheckedCountSpan.innerHTML = contadorTareasListas;
  //console.log('arreglo true: ',arregloTareas)
}

function off(idtarea){
  arregloTareas[idtarea].checkeado = false;
  uncheckedCountSpan.innerHTML = contadorTareasListas;
  //console.log('arreglo false: ',arregloTareas)
}