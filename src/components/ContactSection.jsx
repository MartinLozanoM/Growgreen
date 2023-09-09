import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Logo from "../assets/image/LogoTransparente.png";
import { Image } from "react-bootstrap";

export const ContactSection = () => {
  return (
    <div className="col-md-4 col-sm-12 d-flex flex-column justify-content-center align-item-center LogoForm shadow-lg text-center">
      <Image src={Logo} className="pt-0 mt-0 pb-3" fluid></Image>
      <div>
        <h2>¡Trabajemos juntos!</h2>
        <p>
          Si deseas consultar mayor información sobre nuestros servicios o
          tienes alguna duda al respecto, no dudes en contactarnos por nuestras
          vias de comunicacion y te responderemos a la brevedad.
        </p>
      </div>
      <div className="text-center">
        <h4>Nuestras vias de comunicacion:</h4>
        <p>
          <BsFillTelephoneFill /> +54 381-xxxx-xxx
        </p>
        <p>
          <MdEmail />
          puntocolombres@growgreen.com
        </p>
      </div>
      <h4>Siguenos:</h4>
      <div className="d-flex justify-content-center align-item-center p-2 icons-container">
        <a href="https://www.instagram.com/">
          <AiFillInstagram />
        </a>
        <a href="https://www.linkedin.com/">
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};
