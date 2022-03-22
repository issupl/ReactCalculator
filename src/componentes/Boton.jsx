import React from "react";

function Boton(props){

  

    let salida = props.lasOperaciones.map((item, index)=>{
        return (<button key={index} onClick={()=>{props.setOper(item)}}>{item}</button>)
    })

    return(<>{salida}</>);

}

export default Boton;