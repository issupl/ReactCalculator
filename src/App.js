import { useState } from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Input from './componentes/Input';
import Resultado from './componentes/Resultado';
import elDato from './helpers/misFunciones.js';
function App() {
  
  const [datos,setDatos] = useState(elDato);
  const [operacion,setOperacion] = useState("");

  function changeFirstNumberHandler (event) {
    event.target.name === "primerOper" ? setDatos({...datos,segundoOper:event.target.value}) : setDatos({...datos,primerOper:event.target.value});  
  }

  

  return (
    <div>
      <h1>Calculadora</h1>
     
      <Input unaFuncion={changeFirstNumberHandler} />
      <Boton lasOperaciones={datos.operacionEscogida} setOper={setOperacion}/>
      <Resultado datosOperando = {datos} operaciones={operacion}/>
    </div>
  );
}

export default App;
