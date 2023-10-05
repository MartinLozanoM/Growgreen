import { useForm, Controller } from "react-hook-form";
import { Image } from "react-bootstrap";
import Logo from "../assets/image/Logo.png";
import { useClients } from "../context/ClientProvider.jsx";

const FormSection = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm({
  //   defaultValues: {
  //     name: "",
  //     lastname: "",
  //     email: "",
  //     message: "",
  //   },
  // });
  // const { createClient } = useClients();

  // const onSubmit = handleSubmit(async (values) => {
  //   createClient(values);
  //   reset();
  // });

  return (
    <div className="section-size container-fluid" id="contact-section">
      <div className="row FormContainer p-5 section-size">
        <div className=" inputContainer bg-white  col-md-8 col-sm-12  p-4">
          <div className="container p-4">
            <h2 className=" fw-bolder-4 text-dark pb-2 text-start">
              ¿Queres saber mas?
            </h2>

            <form className="row my-4" name="contact" method="POST">
              <input type="hidden" name="form-name" value="contact" />
              <input
                type="text"
                // {...register("name", { required: true })}
                className="input-bottom-border required"
                name="name"
                placeholder="Nombre"
                style={{ paddingBottom: "35px", color: "black" }}
              />
              {/* {errors.name && (
                <p className="form-error">El nombre es requerido</p>
              )} */}
              <input
                type="text"
                // {...register("lastname", { required: true })}
                className="input-bottom-border required"
                name="lastname"
                placeholder="Apellido"
                style={{ paddingBottom: "35px", color: "black" }}
              />
              {/* {errors.lastname && (
                <p className="form-error">El apellido es requerido</p>
              )} */}
              <input
                type="email"
                // {...register("email", { required: true })}
                className="input-bottom-border required"
                name="email"
                placeholder="Email"
                style={{ paddingBottom: "35px", color: "black" }}
              />
              {/* {errors.email && (
                <p className="form-error ">El email es requerido</p>
              )} */}
              <input
                type="text"
                // {...register("telephone", { required: true })}
                className="input-bottom-border required"
                name="telephone"
                placeholder="Telefono"
                style={{ paddingBottom: "35px", color: "black" }}
              />
              {/* {errors.telephone && (
                <p className="form-error">El telefono es requerido</p>
              )} */}
              <input
                type="text"
                // {...register("studies", { required: true })}
                className="input-bottom-border required"
                name="studies"
                placeholder="Estudios"
                style={{ paddingBottom: "35px", color: "black" }}
              />
              {/* {errors.studies && (
                <p className="form-error">Los estudios son requeridos</p>
              )} */}
              <textarea
                type="text"
                // {...register("comments", { required: true })}
                className="input-bottom-border required"
                name="comments"
                placeholder="Comentarios"
                style={{ paddingBottom: "35px", color: "black" }}
              />
              {/* {errors.comments && (
                <p className="form-error">Los comentarios son requeridos</p>
              )} */}
              <div className="form-button-container col-12 pb-3">
                <button className="button-form" type="submit">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 d-flex flex-column justify-content-center align-item-center  LogoForm  ">
          <h2
            className="text-center "
            style={{ marginTop: "10px", paddingTop: "10px" }}
          >
            Slogan de Punto Colombres
          </h2>
          <p className="text-center pb-0 mb-0 ">"PENSAMOS EN UN LEGADO"</p>
          <Image
            src={Logo}
            className="pt-0 mt-0 pb-3"
            fluid
            alt="Logo Image Form Section"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
