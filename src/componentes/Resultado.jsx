import React,{useEffect, useState} from "react";

function Resultado(props){
const [salida,setSalida] = useState(0);
    let dato = props.datosOperando;
    let oper1 = parseInt(dato.primerOper,10);
    let oper2 = parseInt(dato.segundoOper,10);
    let op;
    
    console.log('Qué trae: ',  dato,props)

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
            default:
                props.setDatos({...dato,primerOper:0,segundoOper:0}); 
                props.setParaElC(0);
                props.setOperacion("+");
                setSalida("");
                console.log('Por default props.paraElC',props.paraElC)
           
            break;
        }
    },[props.operaciones,props.paraElC])

    return(<div>{salida}</div>)
}

export default Resultado;