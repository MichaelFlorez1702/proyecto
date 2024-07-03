//Ejercicio 2
// Función para filtrar productos por tipo
function filtrarProductosPorTipo(productos, tipoProducto) {
    const productosFiltrados = productos.filter(producto => producto.tipo === tipoProducto);
    return productosFiltrados;
  }
  
  // Lista de productos
  const productos = [
    { nombre: "Luxury Gems Necklase", tipo: "Accesorio", precio: 168.76 },
    { nombre: "Reflections Necklace", tipo: "Accesorio", precio: 620.73 },
    { nombre: "Tablet", tipo: "Móvil", precio: 600000 },
    { nombre: "Timeless Halo Earrings", tipo: "Accesorio", precio: 620.73 },
    { nombre: "Exquisite Earrings", tipo: "Accesorio", precio: 327.71 },
    { nombre: "Laptop", tipo: "Computadora", precio: 2500000 },
   
  ];
  
  // Filtrar productos por tipo de accesorio
  const accesoriosFiltrados = filtrarProductosPorTipo(productos, "Accesorio");
  
  // Mostrar resultado en la consola del navegador
  console.log("Accesorios disponibles:");
  console.table(accesoriosFiltrados);
