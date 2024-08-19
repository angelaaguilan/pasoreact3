// components/Tareas.jsx
import { useState } from "react";
import { tareasIniciales } from "../TareasIniciales.js";


const Tareas = () => {
  const [nombreTarea, setNombreTarea] = useState("");
  //const listaTareas = ["Tarea 1", "Tarea 2", "Tarea 3"]; // asignación inicial, antes de agregar el input y button
  //const [listaTareas, setListaTareas] = useState(["Tarea 1", "Tarea 2", "Tarea 3"]);
  const [listaTareas, setListaTareas] = useState(tareasIniciales);


  // Función al enviar el formulario
  const enviarFormulario = (e) => {
    e.preventDefault();
1    //setListaTareas([...listaTareas, nombreTarea]); // Agregamos la tarea;
    //setNombreTarea(""); // Vaciamos el formulario
    setListaTareas([...listaTareas, { nombre: nombreTarea, completada: false },]);
    console.log("Enviando formulario");
  };
  
  //Función al escribir sobre el input del formulario
  const capturaInput = (e) => {
    console.log(e.target.value);
    setNombreTarea(e.target.value);
  };

  const completarTarea = (tarea) => {
    // copiar las tareas anteriores
    const nuevasTareas = [...listaTareas]
    const index = nuevasTareas.findIndex(el => el.nombre === tarea.nombre)
    // Busca la tarea a completar en la lista
    nuevasTareas[index].completada = true
    setListaTareas(nuevasTareas);
  }

// eliminar el registro de una tarea
  const eliminarTarea = (tarea) => {
    const listaFiltrada = listaTareas.filter(el => el.nombre != tarea.nombre)
    setListaTareas(listaFiltrada)
  }

  return (
    <>
      <div>
        
        <form onSubmit={enviarFormulario}>
          {/* campo input donde se ingresa el nombre de la nueva tarea */}
          <input name="nombreTarea" onChange={capturaInput}
            // value={nombreTarea}
          />
          <button>Agregar Tarea</button>
        </form>

        <ul>
          
          {listaTareas.map(tarea =>
            <li
              key={tarea.nombre}
              style={tarea.completada === true
                  ? { textDecoration: "line-through" }
                  : {}}>
             
              {tarea.nombre}
              {tarea.completada === false ? <button onClick={() =>
              completarTarea(tarea)}>Completar</button> : ''}
              <button onClick={() => eliminarTarea(tarea)}>Borrar</button>
            </li>
          )}



        </ul>
      </div>
    </>
  );
};

export default Tareas;
