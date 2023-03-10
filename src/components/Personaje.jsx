import React from "react";
import "../css/Personaje.css";

function Personaje(props) {
  return (
    <div className="contenedor-personaje">
      <img className="imagen-personaje"
        src={require(`../images/${props.imagen}.png`)}
        alt="Fotografía" />
      <div className="contenedor-texto-personaje">
        <p className="nombre-personaje"><b>{props.nombre}</b></p>
        <p className="cargo-personaje"><b>{props.cargo}</b> de la <b>{props.aldea}</b></p>
        <p className="biografia-personaje">"{props.biografia}"</p>
      </div>
    </div>
  );
}

export default Personaje;