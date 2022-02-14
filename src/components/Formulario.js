import React, { useState } from "react";

const Formulario = () => {
  // Estados
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [ide, setIde] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, apellido, lenguaje, ide].includes("") || !terminos) {
      alert("Debes llenar todos los campos");
      return;
    }

    const nuevoUsuario = {
      nombre,
      apellido,
      lenguaje,
      ide,
      terminos,
    };

    console.log(nuevoUsuario);

    setNombre("");
    setApellido("");
    setLenguaje("");
    setIde("");
    setTerminos(false)
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
            placeholder="Escribe tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido: </label>
          <input
            id="Apellido"
            type="text"
            placeholder="Escribe tu apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div>
          <p htmlFor="">Selecciona tu lenguaje preferido</p>
          <label htmlFor="html">Html</label>
          <input
            id="html"
            type="radio"
            value={"html"}
            onChange={(e) => setLenguaje(e.target.value)}
            checked={lenguaje === "html"}
          />
          <label htmlFor="css">Css</label>
          <input
            id="css"
            type="radio"
            value={"css"}
            onChange={(e) => setLenguaje(e.target.value)}
            checked={lenguaje === "css"}
          />
          <label htmlFor="javascript">JavaScript</label>
          <input
            id="javascript"
            type="radio"
            value={"javascript"}
            onChange={(e) => setLenguaje(e.target.value)}
            checked={lenguaje === "javascript"}
          />
          <label htmlFor="python">Python</label>
          <input
            id="python"
            type="radio"
            value={"python"}
            onChange={(e) => setLenguaje(e.target.value)}
            checked={lenguaje === "python"}
          />
        </div>
        <br />
        <div>
          <label htmlFor="ide">Selecciona tu Ide favorito</label>
          <select
            name="ide"
            id="ide"
            value={ide}
            onChange={(e) => setIde(e.target.value)}
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
            name=""
            id="terminos"
            value={terminos}
            onChange={(e) => setTerminos(e.target.checked)}
            checked={terminos}
          />
        </div>
        <br />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
