import { useState,useEffect } from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Input from './componentes/Input';
import Resultado from './componentes/Resultado';
import elDato,{selecOperacion} from './helpers/misFunciones.js';
function App() {
  
  const [datos,setDatos] = useState(elDato);
  const [operacion,setOperacion] = useState("");
  const [salidFun,setSalidaFun] = useState(0);
  const [paraElC,setParaElC] = useState(1);

  function changeFirstNumberHandler (event,paraElC) {
    console.log('En changeFirstNumberHandler paraElC:',paraElC,datos.primerOper,datos.segundoOper)
    if(paraElC === 1){
      
      event.target.name === "primerOper" ? setDatos({...datos,segundoOper:event.target.value}) : setDatos({...datos,primerOper:event.target.value});  
    }
  }
  

  useEffect(()=>{
    const laFuncion = ()=>{     
      setSalidaFun(selecOperacion(operacion,datos));
    }
    laFuncion();
  },[operacion])
  

  return (
    <div>
      <h1>Calculadora</h1>
     
      <Input unaFuncion={changeFirstNumberHandler}  paraElC={paraElC} setParaElC={setParaElC}/>
      <Boton lasOperaciones={datos.operacionEscogida} setOper={setOperacion}/>
      <Resultado datosOperando = {datos} operaciones={operacion} paraElC={paraElC} setDatos={setDatos} setParaElC={setParaElC}/>
      <div>Salida de la función: {salidFun}</div>
    </div>
  );
}

export default App;
