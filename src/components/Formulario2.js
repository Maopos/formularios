import React, { useState } from "react";

const Formulario2 = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    lenguaje: "",
    ide: "",
    terminos: false,
  });

  const handleUsuario = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(usuario).length < 1 || !usuario.terminos) {
      alert("error");
      return;
    }

    const nuevoUsuario = usuario;

    console.log(nuevoUsuario);

    setUsuario({
      nombre: "",
      apellido: "",
      lenguaje: "",
      ide: "",
      terminos: false,
    });
  };

  return (
    <div>
      <h2>Registrate</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Escribe tu nombre"
            value={usuario.nombre}
            onChange={handleUsuario}
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido: </label>
          <input
            id="apellido"
            name="apellido"
            type="text"
            placeholder="Escribe tu apellido"
            value={usuario.apellido}
            onChange={handleUsuario}
          />
        </div>
        <div>
          <p htmlFor="">Selecciona tu lenguaje preferido</p>
          <label htmlFor="html">Html</label>
          <input
            id="html"
            type="radio"
            name="lenguaje"
            value={"html"}
            onChange={handleUsuario}
            checked={usuario.lenguaje === "html"}
          />
          <label htmlFor="css">Css</label>
          <input
            id="css"
            type="radio"
            name="lenguaje"
            value={"css"}
            onChange={handleUsuario}
            checked={usuario.lenguaje === "css"}
          />
          <label htmlFor="javascript">JavaScript</label>
          <input
            id="javascript"
            type="radio"
            name="lenguaje"
            value={"javascript"}
            onChange={handleUsuario}
            checked={usuario.lenguaje === "javascript"}
          />
          <label htmlFor="python">Python</label>
          <input
            id="python"
            type="radio"
            name="lenguaje"
            value={"python"}
            onChange={handleUsuario}
            checked={usuario.lenguaje === "python"}
          />
        </div>
        <br />
        <div>
          <label htmlFor="ide">Selecciona tu Ide favorito</label>
          <select
            name="ide"
            id="ide"
            value={usuario.ide}
            onChange={handleUsuario}
          >
            <option value="">Selecciona</option>
            <option value="vsc">Visual Studio Code</option>
            <option value="atm">Atom</option>
            <option value="sbt">Sublime Text</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="terminos">Acepto términos y condiciones </label>
          <input
            type="checkbox"
            name="terminos"
            id="terminos"
            value={usuario.terminos}
            onChange={handleChecked}
            checked={usuario.terminos}
          />
        </div>
        <br />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Formulario2;
