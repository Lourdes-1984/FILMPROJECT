import React from "react";

const AppFooter = () => {
  return (
    <div className="container-footer">
      <p className="titulo-footer">
        Proyecto Final de Codo Codo por María L. Sosa 2023
      </p>
      <div className="enlaces-foter">
        <a href="">Preguntas frecuentes</a>
        <a href="">Preferencias de cookies</a>
        <a href="">Centro de ayuda</a>
        <a href="">Información corporativa</a>
        <a href="">Términos de uso</a>
        <a href="">Privacidad</a>
      </div>
      <select className="btn-footer">
        <option value="español">Español</option>
        <option value="ingles">English</option>
      </select>
    </div>
  );
};

export default AppFooter;
