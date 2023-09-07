import Team from "../assets/image/Team.jpg";
import Mission from "../assets/image/target.png";
import Vision from "../assets/image/vision.png";
import Values from "../assets/image/value.png";
import Image from "react-bootstrap/Image";

export const ObjetivesSection = () => {
  return (
    <div className="" id="objetives-section">
      <div className="aboutus-container">
        <div>
          <Image src={Team} fluid />
        </div>
        <div className="text-center aboutus-text">
          <h2 className="mt-3">Sobre Nosotros</h2>
          <p>
            El Proyecto ideado por el Lic. Gerardo R. Blanche, Grow Green Punto
            Colombres, se encuentra ubicado en José Colombres 338 de San Miguel
            de Tucumán, emplazado cerca del centro de la ciudad,
            comprometiéndose a la arquitectura. Es por ello que Arqui3 SRL pensó
            en trabajar el espacio físico para valorizar la propuesta
            arquitectónica sin dañar espacios y estructuras, con el
            conservacionismo de eficiencia en aspectos de triple Impacto del
            Estudio.
          </p>
        </div>
      </div>
      <div className="container text-center">
        <div className="p-4 mb-3">
          <img src={Mission} alt="Mision" width="100" height="100" />
          <h3>Mision</h3>
          <p>
            Proporciona un espacio de colaborativo y expansivo de apoyo a
            personas, empresas, emprendedores, pymes, profesionales y
            empresarios dedicados a proyectos tecnológicos y de triple Impacto,
            con el propósito de impactar positivamente en el modelo Grow Green
            Global de nuestro HUB
          </p>
        </div>
        <div className="p-4 mb-3">
          <img src={Vision} alt="Mision" width="100" height="100" />
          <h3>Vision</h3>
          <p>
            Convertimos en un referente territorial en el Noroeste de Argentina
            con una mirada Global para proyectos tecnológicos, Sustentables y
            Sostenibles. Ser reconocidos como agente de innovación.
          </p>
        </div>
        <div className="p-4 mb-3">
          <img src={Values} alt="Mision" width="100" height="100" />
          <h3>Valores</h3>
          <p>
            Comprometidos con promover prácticas innovadoras, de impacto
            positivo y buenas prácticas en todos nuestros procesos y
            operaciones, apoyar proyectos que inspiren, motiven y comprometan el
            futuro de la Tecnología y Triple Impacto.
          </p>
        </div>
      </div>
    </div>
  );
};
