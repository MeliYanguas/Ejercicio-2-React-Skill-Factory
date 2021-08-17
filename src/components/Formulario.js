import React, { useState } from 'react';
import './Formulario.css';

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
    <div className="form-component">
      <h1>Formulario</h1>
      <form onSubmit={enviarDatos} className="form">
        <div>
          <input
            type="text"
            placeholder="Nombre del producto"
            name="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Precio"
            name="price"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Descripción"
            name="description"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Categoría"
            name="category"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="file"
            name="image"
            onChange={handleInputChange}
            className="btn-img"
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
