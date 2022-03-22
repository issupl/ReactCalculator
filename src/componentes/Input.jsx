import React, {useState} from "react";

function Input(entradas){
    
 const valoresNombreInput = ["primerOper", "segundoOper"];

 let salida = valoresNombreInput.map((item,index)=>{
     return <input type="text" name={item} key={index} onChange={(event)=>{entradas.unaFuncion(event)}}/>
 })
    return(<>Los input:   {salida}</>);

}

export default Input;