import { useEffect, useState } from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Input from './componentes/Input';
import Resultado from './componentes/Resultado';
import elDato from './helpers/misFunciones.js';
function App() {
  const [ firstNumber, setFirstNumber ] = useState("");
  const [datos,setDatos] = useState(elDato);
  const [operacion,setOperacion] = useState("");
  function changeFirstNumberHandler (event) {
    console.log('el evento: ',event.target.value,event.target.name)
    if(event.target.name === "primerOper"){
      setDatos({...datos,segundoOper:event.target.value})
    }else{

      setDatos({...datos,primerOper:event.target.value})
    }

    /*setFirstNumber(event.target.value);*/
  }

  useEffect(()=>{

    const primer=()=>{
      
      /*setDatos({...datos,primerOper:44})*/
      console.log('operacion: ',operacion)
      console.log('primerOper: ',datos.primerOper);
      console.log('segundoOper: ',datos.segundoOper);
    }
    primer();
  }
  ,[operacion]);

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
