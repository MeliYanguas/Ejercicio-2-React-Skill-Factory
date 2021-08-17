import React, { useState } from 'react';

const Formulario = () => {
  const [datos, setDatos] = useState({
    title: ' ',
    price: null,
    description: ' ',
    category: ' ',
    image: undefined,
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(`
        ${datos.title}
        ${datos.price}
        ${datos.description}
        ${datos.category}
        ${datos.image}`);
  };

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={enviarDatos}>
        <div>
          <input
            type="text"
            placeholder="nombre del producto"
            name="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="precio"
            name="price"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="descripcion"
            name="description"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="categoria"
            name="category"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="file"
            name="image"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>

      {/* <h3>{datos.title}</h3> */}
    </div>
  );
};

export default Formulario;
