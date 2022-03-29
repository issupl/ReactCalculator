import React, {useState,useEffect,useRef} from "react";
import Input0 from "./Input0";

function Input(entradas){
    const [elC,setElC] = useState(1);
   const [laref,setLaRef] =useState("");
   let referencia = useRef("");
    const valoresNombreInput = ["primerOper", "segundoOper"];

    console.log('En Input: ',entradas)

 useEffect(()=>{
     setElC(entradas.paraElC) ;
     entradas.setParaElC(1);
     /*for(let elemento of document.querySelectorAll('input')){
         elemento.value = 0;
     }*/
     
     setLaRef(referencia);
     console.log('esta es la laref',laref)
      
 },[entradas.paraElC]);

 let elotro = valoresNombreInput.map((item,index)=>{
     return <Input0 laprop={entradas.setParaElC} elMr={entradas.elMr} evento={entradas} setElC={setElC} elC={elC} elname={item}/>
 })
 let salida = valoresNombreInput.map((item,index)=>{
    
     return (
         <input ref={referencia} type="text" name={item} key={index} onChange={(event)=>{entradas.unaFuncion(event,elC)}}/>
         )
 })
    return(<>Los input:   {salida} y esto es el otro {elotro}</>);

}

export default Input;