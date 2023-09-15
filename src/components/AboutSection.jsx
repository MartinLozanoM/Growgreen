import Image from "react-bootstrap/Image";
import Team from "../assets/image/Team.jpg";


export const AboutSection = () => {

    return(
        <div className="container-fluid p-5 row">
        <div className="col-md-6">
          <Image src={Team} fluid rounded />
        </div>
        <div className="p-5 text-center aboutus-text col-md-6 d-flex flex-column justify-content-center align-item-center">
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
        <div className="about-divisor rounded mt-4"></div>
      </div>
    )
}