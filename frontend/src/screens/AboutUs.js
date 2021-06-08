import React from "react";

export default function FAQScreen(props) {
  return (
    <div className="about-container">
      <div className="about-title">
        <h1>SOBRE NOSOTROS</h1>
      </div>
      <div className="about-details">
        <h2>¿Quiénes somos?</h2>
        <p>Típicos el Pulgarcito nace como un negocio dedicado a la comercialización de platillos y bebidas típicas propias de la cultura y las tradiciones salvadoreñas, ofertando una gran variedad de plastos gastronómicos con sabores propios del país, así mimos proporcionamos una excelente calidad en nuestros productos preparados con los ingredientes más frescos del mercado. De igual manera cumplimos con estrictos lineamientos sanitarios para ofrecer a nuestros clientes lo mejor y nuestra modalidad es por venta en línea contando con un servicio es totalmente a domicilio.</p>
      </div>
      <div className="about-ubication">
        <img src="/images/ubicados.png" alt="ubicados?"></img>
        <div className="about-details-ubicados">
          <h2>¿Dónde estamos ubicados?</h2>
          <p>Somos un negocio dedicado a la venta de productos en línea, por lo que actualmente no poseemos tienda en físico.</p>
        </div>
      </div>
      <div className="about-coverage">
        <img src="/images/covertura.png" alt="ubicados?"></img>
        <div className="about-details-coverage">
          <h2>¿Zonas de cobertura?</h2>
          <p> Santa Tecla </p>
        </div>
      </div>
    </div>
  );
}
