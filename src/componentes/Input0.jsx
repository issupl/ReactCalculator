import React,{useRef,useEffect} from "react";

function Input0(entrada){
    const laref = useRef("");

    useEffect(()=>{
        entrada.setElC(entrada.paraElC)
        entrada.laprop(1);
        laref.current.value = 0;
    },[entrada.evento.paraElC]);

    useEffect(()=>{
    if(entrada.elname === "segundoOper"){
        laref.current.value = entrada.elMr;
    }
    console.log('el Mr en Input0: ',)
    },[entrada.elMr]);
    console.log('la entrada en Input0: ',entrada,entrada.evento.paraElC)
    return(<input ref={laref} name={entrada.elname} type="text" onChange={(event)=>{entrada.evento.unaFuncion(event,entrada.elC)}}/>)
}

export default Input0;