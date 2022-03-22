import React,{useEffect, useState} from "react";

function Resultado(props){
const [salida,setSalida] = useState(0);
    let dato = props.datosOperando;
    let oper1 = parseInt(dato.primerOper,10);
    let oper2 = parseInt(dato.segundoOper,10);
    let op;
    console.log('dato: ',oper1 ,oper2,oper1*oper2,props.operaciones)

    useEffect(()=>{
        
        switch(props.operaciones){
    
            case "*" :
             op= oper1 * oper2;
            setSalida(op);
            break;
            case "+" : 
            op = oper1 + oper2;
            setSalida(op);
             break;
            case "-" : 
            op = oper1 - oper2;
            setSalida(op); break;
            case "/" : 
            op= oper1 / oper2;
            setSalida(op);
             break;
            default: setSalida("");
        }
    },[salida])

    return(<div>{salida}</div>)
}

export default Resultado;