import React from "react";
import { Link } from "react-router-dom";

export default function FAQScreen(props) {
  return (
    <div className="about-container">
      <div className="about-banner">
        <h1>SOBRE NOSOTROS</h1>
        <Link to="/">Comprar en linea</Link>
      </div>
      <div className="who-we-are">
        <div className="text-container">
          <h2>¿Quiénes somos?</h2>
          <p className="normal-text">
            Típicos el Pulgarcito nace como un negocio dedicado a la
            comercialización de platillos y bebidas típicas propias de la
            cultura y las tradiciones salvadoreñas, ofertando una gran variedad
            de plastos gastronómicos con sabores propios del país, así mimos
            proporcionamos una excelente calidad en nuestros productos
            preparados con los ingredientes más frescos del mercado. De igual
            manera cumplimos con estrictos lineamientos sanitarios para ofrecer
            a nuestros clientes lo mejor y nuestra modalidad es por venta en
            línea contando con un servicio es totalmente a domicilio.
          </p>
        </div>
        <div className="benefits">
          <div className="item">
            <img
              src="/images/easy-to-shop-icon.png"
              alt="Icono que representa la facilidad de comprar con nosotros"
              className="icon-img"
            />
            <p className="normal-text">
              Nuestro sitio web esta creado para que cualquier persona con
              facilidad pueda realizar el pedido que queira
            </p>
          </div>
          <div className="item">
            <img
              src="/images/best-products-icon.png"
              alt="Icono que representa los mejores productos que poseemos"
              className="icon-img"
            />
            <p className="normal-text">
              Tenemos comida típica rica que te encantará.
            </p>
          </div>
          <div className="item">
            <img
              src="/images/amiability-icon.png"
              alt="Icono que representa la amabilidad que tenemos"
              className="icon-img"
            />
            <p className="normal-text">
              Nos destascamos en la amabilidad que tenemos hacia nuestros
              clients.
            </p>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <h3 className="contact-title">Ubicación</h3>
          <p className="contact-text">
            Somos un negocio 100% en linea con cobertura en Santa Tecla
          </p>
        </div>
        <div className="contact-item">
          <h3 className="contact-title">Teléfono</h3>
          <p className="contact-text">+503 76892525</p>
        </div>
        <div className="contact-item">
          <h3 className="contact-title">Email</h3>
          <p className="contact-text">mail@domain.com</p>
        </div>
        <div className="contact-item">
          <h3 className="contact-title">Horario de atención</h3>
          <p className="contact-text">Lunes a sábado: 8am a 5pm</p>
        </div>
      </div>
    </div>
  );
}
