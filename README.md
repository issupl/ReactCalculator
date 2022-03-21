# ReactCalculator

1. Clona el proyecto en tu ordenador, instala las dependencias y arráncalo.
```bash
git clone https://github.com/Diseno-de-Aplicaciones-Web/ReactCalculator.git
cd ReactCalculator
npm install
npm start
```
2. Empieza a trabajar:
   - [ ] Abre la consola en el navegador y prueba a modificar el contenido del formulario en la app.
   - [ ] Estudia el contenido de `src/App.js` y entiende cómo está funcionando comparándolo con lo que puedes observar en el navegador.
   - [ ] Añade una nuevo input asociado a un nuevo state `secondNumber`. Añade el `console.log` correspondiente en el `useEffect` existente para poder ver cómo funciona.
   - [ ] Añade un `p` al final del documento asociado a un nuevo state `result`.
        ```html
        <p>{result}</p>
        ```
    - [ ] Añade un botón "sumar" que ejecute un handler `addHandler` en el evento `onClick`. `addHandler` ha de sumar los valores de `firstNumber` y `secondNumber` y poner el resultado en `result`. Comprueba que el resultado se muestra en la página.
    - [ ] Añade nuevos botones con sus correspondientes handlers para las operaciones "restar", "multiplicar" y "dividir".
    - [ ] Añade un nuevo botón "C" con su handler que borre los contenidos del párrafo y los dos input.
    - [ ] Añade un botón "M+" que almacene el valor de `result` en un "ref" de react. Llama `memory` al ref.
    - [ ] Añade un botón "MR" que copie el valor de `memory` en `firstNumber`.