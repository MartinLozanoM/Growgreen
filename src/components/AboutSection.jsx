import Image from "react-bootstrap/Image";
import Team from "../assets/image/Team.jpg";
import { ObjetivesSection } from "./ObjetivesSection";
import { IndustriesSection } from "./IndustriesSection";

export const AboutSection = () => {
  return (
    <div
      className="section-size container-fluid all-section"
      id="aboutus-section"
    >
      <div className="row about-container">
        <div className="col-lg-6">
          <Image src={Team} fluid rounded alt="Team image" />
        </div>
        <div className="p-2 aboutus-text col-lg-6 d-flex flex-column justify-content-center align-item-center text-center">
          <h2 className="mt-3">Sobre Nosotros</h2>
          <p className="text-dark">
            El Proyecto ideado por el Lic. Gerardo R. Blanche, Punto Colombres
            HUB Tucuman, se encuentra ubicado en José Colombres 372 de San
            Miguel de Tucumán, emplazado cerca del centro de la ciudad,
            comprometiéndose a la arquitectura. Es por ello que Arqui3 SRL pensó
            en trabajar el espacio físico para valorizar la propuesta
            arquitectónica sin dañar espacios y estructuras, con el
            conservacionismo de eficiencia en aspectos de triple Impacto del
            Estudio.
          </p>
        </div>
      </div>
      <ObjetivesSection />
      <IndustriesSection />
    </div>
  );
};
