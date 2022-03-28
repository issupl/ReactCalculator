import React,{useRef,useEffect} from "react";

function Input0(entrada){
    const laref = useRef("");

    useEffect(()=>{
        laref.current.value = 0;
    },[entrada.paraElC]);

useEffect(()=>{
if(entrada.elname === "segundoOper"){
    laref.current.value = entrada.elMr;
}
console.log('el Mr en Input0: ',)
},[entrada.elMr]);
    console.log('la referencia a la entrada en Input0',laref,entrada)
    return(<input ref={laref} name={entrada.elname} type="text" onChange={(event)=>{entrada.evento.unaFuncion(event,entrada.elC)}}/>)
}

export default Input0;