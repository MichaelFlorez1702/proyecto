// Ejercicio 4
// Función para ordenar un array de productos por precio (ascendente o descendente)
function ordenarProductosPorPrecio(productos, orden) {
    const compararPorPrecio = (a, b) => {
      if (a.precio < b.precio) {
        return orden === "ascendente" ? -1 : 1;
      } else if (a.precio > b.precio) {
        return orden === "ascendente" ? 1 : -1;
      } else {
        return 0;
      }
    };
  
    return productos.sort(compararPorPrecio);
  }
  
  // Ejemplo de uso
  const productos = [
    { nombre: "Luxury Gems Necklase",  precio: 168.76 },
    { nombre: "Reflections Necklace",  precio: 620.73 },
    { nombre: "Timeless Halo Earrings",  precio: 620.73 },
    { nombre: "Exquisite Earrings",  precio: 327.71 },
  ];
  
  console.log("Productos ordenados ascendentemente por precio:");
  console.log(ordenarProductosPorPrecio(productos, "ascendente"));
  
  console.log("\nProductos ordenados descendentemente por precio:");
  console.log(ordenarProductosPorPrecio(productos, "descendente"));