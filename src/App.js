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
  const [paraElC,setParaElC] = useState(0);

  function changeFirstNumberHandler (event,paraElC) {
    console.log('En changeFirstNumberHandler paraElC:',paraElC)
    if(paraElC === "1" || paraElC === 1){
      console.log('paraElC ..1:',paraElC)
      event.target.name === "primerOper" ? setDatos({...datos,segundoOper:event.target.value}) : setDatos({...datos,primerOper:event.target.value});  
    }else{
      event.target.value = 0;  
      setParaElC(1);
      console.log('paraElC ..0: ',paraElC)
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
     
      <Input unaFuncion={changeFirstNumberHandler} lasOperacion={operacion} paraElC={paraElC} setParaElC={setParaElC}/>
      <Boton lasOperaciones={datos.operacionEscogida} setOper={setOperacion}/>
      <Resultado datosOperando = {datos} operaciones={operacion} paraElC={paraElC} setDatos={setDatos} setParaElC={setParaElC} setOperacion={setOperacion}/>
      <div>Salida de la función: {salidFun}</div>
    </div>
  );
}

export default App;
