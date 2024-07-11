//--------- Funciones -----------

import { obtenerCategorias, obtenerProductos } from "../modules/services.js";

const pintarCategorias = (listaCategorias, contenedor) => {
  contenedor.innerHTML = ""; //Esta línea no debería ser implementada si en el HTML está contenido otro botón (por ejem. El botón que quita el filtrado)
  listaCategorias.forEach((categoria) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");

    img.setAttribute("src", `../assets/${categoria.imagen}`);
    img.setAttribute("alt", categoria.nombre);

    figcaption.textContent = categoria.nombre;
    img.style.backgroundColor = categoria.color;

    button.addEventListener("click", async () => {
      const productosFiltrados = await filtrarProductosPorCategoria(
        categoria.nombre
      );
      pintarProductos(productosFiltrados);
    });

    figure.appendChild(img);
    figure.appendChild(figcaption);

    button.appendChild(figure);
    li.appendChild(button);
    contenedor.appendChild(li);
  });
};

const pintarProductos = (listaProductos, contenedor = "") => {
    const contenedorProductos = contenedor
      ? contenedor
      : document.getElementById("contenedorProductos");
    contenedorProductos.innerHTML = "";
    listaProductos.forEach((producto) => {
      const card = document.createElement("article");
      const figure = document.createElement("figure");
      const imagen = document.createElement("img");
      const h3 = document.createElement("h3");
      const div = document.createElement("div");
      const acciones = document.createElement("div");
      const editar = document.createElement("button");
      const eliminar = document.createElement("button");
  
      editar.textContent = "Editar";
      eliminar.textContent = "Eliminar";
  
      eliminar.addEventListener("click", async () => {
        const confirmacion = confirm(
          "Esta acción es irreversible ¿Está seguro que desea eliminar el producto?"
        );
        if (confirmacion) {
          await eliminarProducto(producto.id);
          const productos = await obtenerProductos();
          pintarProductos(productos);
        }
      });
  
      editar.addEventListener("click", () => {
        console.log(`Quiero editar este producto: ${producto.id}`);
      });
  
      imagen.setAttribute("src", producto.imagen[0]);
      imagen.setAttribute("alt", producto.nombre);
      h3.textContent = producto.nombre;
  
      div.innerHTML = `
          <figure>
              <img src="../assets/star.svg" alt="estrella">
              <figcaption>${producto.puntuacion}</figcaption>
          </figure>
          <span>$ ${producto.precioUnitario}</span>
        `;
      figure.appendChild(imagen);
      acciones.appendChild(editar);
      acciones.appendChild(eliminar);
      card.classList.add("card");
      card.appendChild(figure);
      card.appendChild(h3);
      card.appendChild(div);
      card.appendChild(acciones);
      contenedorProductos.appendChild(card);
    });
  };
  
//-------- Variables/Constantes -----------
const contenedorFiltros = document.getElementById("filtros");
const contenedorProductos = document.getElementById("contenedorProductos");
const botonAgregarProducto = document.getElementById("agregarProducto");

//-------- Ejecucion ----------
document.addEventListener("DOMContentLoaded", async () => {
  const categorias = await obtenerCategorias();
  const productos = await obtenerProductos();
  pintarCategorias(categorias, contenedorFiltros);
  pintarProductos(productos,contenedorProductos);
});
