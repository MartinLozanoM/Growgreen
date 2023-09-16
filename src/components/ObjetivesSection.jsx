import Mission from "../assets/image/target.png";
import Vision from "../assets/image/vision.png";
import Values from "../assets/image/value.png";

export const ObjetivesSection = () => {
  return (
    <div className="container-fluid mt-lg-5" id="objetives-section">
      <div className="text-center row objetives-container d-lg-flex justify-content-lg-around">
        <div className="col-lg-3 p-3 border border-dark objetives">
          <img src={Mission} alt="Mision" width="100" height="100" />
          <h3 className="mt-3 mb-2">Mision</h3>
          <p>
            Proporciona un espacio de colaborativo y expansivo de apoyo a
            personas, empresas, emprendedores, pymes, profesionales y
            empresarios dedicados a proyectos tecnológicos y de triple Impacto,
            con el propósito de impactar positivamente en el modelo Grow Green
            Global de nuestro HUB
          </p>
        </div>
        <div className="col-lg-3 p-3 border border-dark objetives">
          <img src={Vision} alt="Vision" width="100" height="100" />
          <h3 className="mt-3 mb-2">Vision</h3>
          <p>
            Convertimos en un referente territorial en el Noroeste de Argentina
            con una mirada Global para proyectos tecnológicos, Sustentables y
            Sostenibles. Ser reconocidos como agente de innovación.
          </p>
        </div>
        <div className="col-lg-3 p-3  border border-dark objetives">
          <img src={Values} alt="Valores" width="100" height="100" />
          <h3 className="mt-3 mb-2">Valores</h3>
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
