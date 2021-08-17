import React, { useEffect, useState } from 'react'


const Productos = () => {

    const [catalogo, setCatalogo] = useState([])

    useEffect( ()=> {
        console.log('UseEffect');
        obtenerDatos();
    }, [])  

    const obtenerDatos = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const productos = await data.json();
        console.log(productos);
        setCatalogo(productos);
    }

    
    
    return (
        <div>
          <h1>Productos</h1>
          <ul>
              {
                catalogo.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))
              }
          </ul>
        </div>
      );
}

export default Productos;


 