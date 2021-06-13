import React from "react";

export default function FAQScreen(props) {
  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="faq-title text-center pb-3">
              <h2>Preguntas Frecuentes</h2>
            </div>
            <div className="offset-md-3">
              <div className="faq" id="accordion">
                <div className="card">
                  <div className="card-header" id="faqHeading-1">
                    <div className="mb-0">
                      <h5 className="faq-title">
                        <span className="badge">1</span>¿Cuál es su zona de
                        cobertura?
                      </h5>
                    </div>
                  </div>
                  <div id="faqCollapse-1" className="collapse">
                    <div className="card-body">
                      <p>
                        Nuestra zona de cobertura abarca exclusivamente el
                        municipio de Santa Tecla
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-2">
                    <div className="mb-0">
                      <h5 className="faq-title">
                        <span className="badge">2</span> ¿De cuánto es el pedido
                        mínimo que debo realizar?
                      </h5>
                    </div>
                  </div>
                  <div id="faqCollapse-2" className="collapse">
                    <div className="card-body">
                      <p>El monto mínimo de compra es de $6.00</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-3">
                    <div className="mb-0">
                      <h5 className="faq-title">
                        <span className="badge">3</span>¿Cuánto cuesta el
                        servicio a domicilio?
                      </h5>
                    </div>
                  </div>
                  <div id="faqCollapse-3" className="collapse">
                    <div className="card-body">
                      <p>
                        El costo de nuestro servicio a domicilio es de $2.50
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-4">
                    <div className="mb-0">
                      <h5 className="faq-title">
                        <span className="badge">4</span>¿Cuáles son sus horarios
                        de atención?
                      </h5>
                    </div>
                  </div>
                  <div id="faqCollapse-4" className="collapse">
                    <div className="card-body">
                      <p>
                        Lunes a Domingo de 7:00am a 10:00am y de 3:00pm a 8:00pm
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-5">
                    <div className="mb-0">
                      <h5 className="faq-title">
                        <span className="badge">5</span> ¿Qué formas de pago
                        aceptan?
                      </h5>
                    </div>
                  </div>
                  <div id="faqCollapse-5" className="collapse">
                    <div className="card-body">
                      <p>
                        Aceptamos pago en efectivo y tarjeta de crédito o debito
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-6">
                    <div className="mb-0">
                      <h5 className="faq-title">
                        <span className="badge">6</span> ¿Es necesario que posea
                        una cuenta para realizar mi compra?
                      </h5>
                    </div>
                  </div>
                  <div id="faqCollapse-6" className="collapse">
                    <div className="card-body">
                      <p>
                        Si, es necesario que tengas una cuenta en Tipicos El
                        Pulgarcito
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
