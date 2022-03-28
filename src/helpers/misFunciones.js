const dato = {
    primerOper: 0,
    segundoOper: 0,
    result:0,
    operacionEscogida: ["+","-","/","*","C","M+","MR"]
}


export default function elDato(){
    return dato;
}

export function selecOperacion(operacion,dato){
    let op;
    let oper1 = parseInt(dato.primerOper,10);
    let oper2 = parseInt(dato.segundoOper,10);
    switch(operacion){
        case "*" :op= oper1 * oper2;break;
        case "+" :op = oper1 + oper2;break;
        case "-" :op = oper1 - oper2;break;
        case "/" :op= oper1 / oper2;break; 
        default:op="";
        
        break;
    }

    return op;
}