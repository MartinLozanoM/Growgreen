import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { Image } from "react-bootstrap";
import Logo from "../assets/image/LogoTransparente.png";

const FormSection = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      message: "",
    },
  });

  const [formMessage, setFormMessage] = useState("");
  const [formError, setFormError] = useState("");

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/api/contact", data);
      setFormError("");
      setFormMessage("Datos enviados");
      reset();

      setTimeout(() => {
        setFormMessage("");
      }, 2000);
    } catch (error) {
      setFormError("Ha ocurrido un error al enviar los datos.");
      setFormMessage("");
    }
  };

  return (
    <div className="section-size container-fluid" id="contact-section">
      <div className="row FormContainer p-5 section-size">
        <div className=" inputContainer bg-white  col-md-8 col-sm-12  p-4">
          <div className="container p-4">
            <h2 className=" fw-bolder-4 text-dark pb-2 text-start">
              ¿Queres saber mas?
            </h2>

            <form className=" row my-4" onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: "El nombre es requerido",
                  minLength: {
                    value: 4,
                    message: "El nombre debe tener entre 4 y 20 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "El apellido no puede tener más de 20 caracteres",
                  },
                }}
                render={({ field }) => (
                  <div className="col-md-6 pb-3">
                    <input
                      {...field}
                      minLength="4"
                      maxLength="20"
                      placeholder="Nombre"
                      autoComplete="off"
                      type="text"
                      className="input-bottom-border required"
                      style={{ paddingBottom: "35px", color: "black" }}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="lastname"
                control={control}
                rules={{
                  required: "El apellido es requerido",
                  minLength: {
                    value: 4,
                    message: "El apellido debe tener entre 4 y 20 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "El apellido no puede tener más de 20 caracteres",
                  },
                }}
                render={({ field }) => (
                  <div className="col-md-6 pb-3">
                    <input
                      {...field}
                      minLength="4"
                      maxLength="20"
                      placeholder="Apellido"
                      autoComplete="off"
                      type="text"
                      className=" input-bottom-border required"
                      style={{ paddingBottom: "35px", color: "black" }}
                    />
                    {errors.lastname && <p>{errors.lastname.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "El email es requerido",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i,
                    message: "Dirección de correo inválida",
                  },
                }}
                render={({ field }) => (
                  <div className="pb-3">
                    <input
                      {...field}
                      placeholder="Email corporativo/trabajo"
                      autoComplete="off"
                      type="email"
                      className="input-bottom-border required"
                      style={{ paddingBottom: "35px" }}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: "El numero de telefono es requerido",
                  minLength: {
                    value: 8,
                    message: "El apellido debe tener entre 8 y 15 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "El telefono no puede tener más de 15 caracteres",
                  },
                }}
                render={({ field }) => (
                  <div className="col-md-6 pb-3">
                    <input
                      {...field}
                      minLength="4"
                      maxLength="15"
                      placeholder="Telefono"
                      autoComplete="off"
                      type="number"
                      className=" input-bottom-border required"
                      style={{ paddingBottom: "35px", color: "black" }}
                    />
                    {errors.lastname && <p>{errors.lastname.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="studies"
                control={control}
                rules={{
                  required: "El Estudio es requerido",
                  minLength: {
                    value: 4,
                    message:
                      "El nombre de Estudio debe tener entre 4 y 20 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "El Estudio no puede tener más de 20 caracteres",
                  },
                }}
                render={({ field }) => (
                  <div className="col-md-6 pb-3">
                    <input
                      {...field}
                      minLength="4"
                      maxLength="20"
                      placeholder="Estudios"
                      autoComplete="off"
                      type="text"
                      className=" input-bottom-border required"
                      style={{ paddingBottom: "35px", color: "black" }}
                    />
                    {errors.lastname && <p>{errors.lastname.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="message"
                control={control}
                rules={{
                  required: "El mensaje es requerido",
                  maxLength: {
                    value: 250,
                    message: "El mensaje no puede tener más de 250 caracteres",
                  },
                }}
                render={({ field }) => (
                  <div>
                    <textarea
                      {...field}
                      maxLength="250"
                      placeholder="Deja tu mensaje"
                      autoComplete="off"
                      className="input-bottom-border required"
                      style={{ paddingBottom: "35px" }}
                    />
                    {errors.message && <p>{errors.message.message}</p>}
                  </div>
                )}
              />
              {formMessage && (
                <p className="p-2 rounded bg-success text-white">
                  {formMessage}
                </p>
              )}
              {formError && (
                <p className="p-2 rounded bg-danger text-white">{formError}</p>
              )}

              <div className="col-12 pb-3">
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
            Slogan de Grow Green
          </h2>
          <p className="text-center pb-0 mb-0 ">"PENSAMOS EN UN LEGADO"</p>
          <Image src={Logo} className="pt-0 mt-0 pb-3" fluid></Image>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
