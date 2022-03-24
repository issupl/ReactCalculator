import React, {useState,useEffect} from "react";

function Input(entradas){
    const [elC,setElC] = useState(0);
    const valoresNombreInput = ["primerOper", "segundoOper"];
 useEffect(()=>{
     setElC(entradas.paraElC) ;
   
     console.log('entradas en Input: ', entradas)
     console.log(`el elC ${elC}`);
     for(let elemento of document.querySelectorAll('input')){
         elemento.value = 0;
     }
     
 },[entradas.paraElC])
 let salida = valoresNombreInput.map((item,index)=>{
     return <input type="text" name={item} key={index} onChange={(event)=>{entradas.unaFuncion(event,elC)}}/>
 })
    return(<>Los input:   {salida}</>);

}

export default Input;