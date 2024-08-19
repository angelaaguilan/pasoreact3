// components/Tareas.jsx

const Tareas = () => {
    const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

    const listaNxN = listaNumeros.map(tarea => tarea * tarea);
    console.log("Num por Num: " + listaNxN);

    const listaCuadrado = listaNumeros.map((tareaC) => Math.pow(tareaC, 2));
    console.log("Num Cuadrado: " + listaCuadrado);

    const listaPares = listaNumeros.map((tarea => {
        if (tarea % 2 == 0) {
            return tarea;
        }
    }
    ));
    console.log("Num Pares: " + listaPares);

    const listaImpares = listaNumeros.map((tarea) => {
          if (tarea % 2 != 0) {
            return tarea;
          }
        });
    console.log("Num Impares: " + listaImpares);

        const tareas = ['Tarea 1', 'Tarea 2', 'Tarea 3']
      tareas.map(tarea => console.log(tarea))
  
    return (
      <>
        <ul>
          <li>{tareas[0]}</li>
          <li>{tareas[1]}</li>
          <li>{tareas[2]}</li>
        </ul>

        <ul>
          {tareas.map(tarea => <li>{tarea}</li>)}
        </ul>

        <ul>
          Lista número X número
          {listaNxN.map((tarea) => (
            <li key={tarea}> {tarea} </li>
          ))}
        </ul>

        <ul>
          Lista número al cuadrado
          {listaCuadrado.map((tareaC) => (
            <li key={tareaC}> {tareaC} </li>
          ))}
        </ul>
        <ul>
          Lista Pares
          {listaPares.map((tarea) => (
            <li key={tarea}> {tarea} </li>
          ))}
        </ul>

        <ul>
          Lista impares
          {listaImpares.map((tarea) => (
            <li key={tarea}> {tarea} </li>
          ))}
        </ul>
      </>
    );
};

export default Tareas;
