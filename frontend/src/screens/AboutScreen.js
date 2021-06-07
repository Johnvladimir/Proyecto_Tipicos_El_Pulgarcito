import React from "react";

export default function AboutScreen(props) {
  return (
    <div className="about-container">
      <div className="about-title">
        <h1>Preguntas frecuentes</h1>
      </div>
      <div className="about-details">
        <h2>1. Cobertura / compras en línea </h2>
        <p>
          Nuestra zona de cobertura abarca exclusivamente el municipio de Santa
          Tecla
        </p>

        <h2>2. Pedido mínimo </h2>
        <p>El monto mínimo de compra es de $6.00</p>

        <h2>3. Costo del servicio a domicilio </h2>
        <p>El costo de nuestro servicio a domicilio es de $2.50</p>

        <h2>4. Horarios de atención </h2>
        <p>Por la mañana de 7: 000 am – 10:00 am por la tarde de 3:00pm- 8:00pm</p>

        <h2>5. Formas de pago </h2>
        <p>Aceptamos pago en efectivo y tarjeta de crédito o debito</p>

        <h2>6. ¿Es necesario que posea una cuenta para realizar mi compra? </h2>
        <p>
          No, no se necesita poseer una cuenta para adquirir nuestros productos
          en línea
        </p>
      </div>
    </div>
  );
}
