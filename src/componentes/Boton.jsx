import React from 'react';
import '../styles/Boton.css'

function Boton (props) {

  //Verificamos que el boton sea un operador, para agregar la clase
  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=')
  }

    return (
      <div 
        //Agregamos la clase con la funcion de arriba
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''} `.trimEnd()}
        onClick={() => props.manejarClic(props.children)}>
        {props.children}
      </div>
    );
}

export default Boton