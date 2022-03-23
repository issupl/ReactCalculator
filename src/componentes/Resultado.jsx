import React,{useEffect, useState} from "react";

function Resultado(props){
const [salida,setSalida] = useState(0);
    let dato = props.datosOperando;
    let oper1 = parseInt(dato.primerOper,10);
    let oper2 = parseInt(dato.segundoOper,10);
    let op;
    

    useEffect(()=>{
        
        switch(props.operaciones){
    
            case "*" :
             op= oper1 * oper2;
             
            setSalida(op);
            break;
            case "+" : 
            op = oper1 + oper2;
            console.log("op:",op)
            setSalida(op);
             break;
            case "-" : 
            op = oper1 - oper2;
            
            setSalida(op); break;
            case "/" : 
            op= oper1 / oper2;
            
            setSalida(op);
             break;
            default:  setSalida("");break;
        }
    },[props.operaciones])

    return(<div>{salida}</div>)
}

export default Resultado;