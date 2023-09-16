import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="footer container-fluid p-4">
        <div className="about-divisor container-fluid rounded mt-4 container"></div>
        <div className="row text-white p-5 pb-4 ">
          <div className="col-md-3 col-sm-12">
            <h2 className="fw-bold fs-1">GROWGREEN</h2>
            <p className="fw-light text-start">
              Con esta marca con forma abierta intentamos transmitir un mensaje
              de transversalidad y oportunidad; y hacemos uso de tonos verdes
              para reforzar los valores de triple impacto, naturaleza y
              tecnológicos del HUB.
            </p>
          </div>
          <div className="col-md-3 col-sm-12">
            <h2 className="text-start">Política</h2>
            <ul className="text-start ps-0">
              <li>
                <a className="text-secondary" href="/politica/privacidad">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a className="text-secondary" href="/terminos/uso">
                  Términos de Uso
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12">
            <h2 className="text-start">Ayuda</h2>
            <ul className="text-start ps-0">
              <li>
                <a className="text-secondary" href="/preguntas/frecuentes">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a className="text-secondary" href="/contacto">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12 ">
            <h2 className="text-start">Contacta</h2>
            <ul className="text-start ps-0">
              <li className="text-secondary">123 456 789</li>
              <li className="text-secondary">
                Calle cualquiera, 123. Tucumán.
              </li>
              <li className="text-secondary">growgreen@mail.com</li>
            </ul>
            <div className=" mt-5 d-flex align-items-end">
              <a href="#" className="icon-link">
                <FaTwitter size={36} />
              </a>
              <a href="#" className="icon-link">
                <FaFacebook size={36} />
              </a>
              <a href="#" className="icon-link">
                <FaInstagram size={36} />
              </a>
              <a href="#" className="icon-link">
                <FaLinkedin size={36} />
              </a>
            </div>
          </div>
        </div>
        <div>
          <hr />
          <p className="text-center text-secondary">
            Todos los derechos reservados &copy; 2023
          </p>
        </div>
      </div>
    </>
  );
};
