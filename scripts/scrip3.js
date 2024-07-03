//Fila 1

const producto1_line1 = {
    id: 1,
    nombre:"Luxury Gems Necklace",
    codigo: "A1",
    precio: 168.76,
    tipoDeAccesorio:"collar",
    imagen: "/images/imagenes-listing-jhon/loxury.jpg",
    descripcion:`Este collar es una joya elegante y sofisticada. Con un diamante cuadrado central de oro blanco.`,
    stock: 60
};

const producto2_line1 = {
    id: 2,
    nombre:"Aurora Ring",
    codigo: "A2",
    precio: 125.28,
    tipoDeAccesorio:"collar",
    imagen: "/images/imagenes-listing-jhon/aurora.jpg",
    descripcion: `Presentamos un elegante anillo de oro con incrustaciones de diamantes.`,
    stock: 52 
};

const producto3_line1 = {
    id: 3,
    nombre: "Reflections Necklace",
    codigo: "A3",
    precio: 620.73,
    tipoDeAccesorio: "collar",
    imagen: "/images/imagenes-listing-jhon/reflections.jpg",
    descripcion: `Este collar elegante y sofisticado fabricado en oro con una cubierta roja y negra`,
    stock: 25
};

const producto4_line1 = {
    id: 4,
    nombre: "Dreamy Infinity Ring",
    codigo: "A4",
    precio: 327.71,
    tipoDeAccesorio: "anillo",
    imagen: "/images/imagenes-listing-jhon/dreamy.jpg",
    descripcion: `Este anillo de compromiso tiene un cuarzo rosa rodeado de diamantes, fabricado en oro rosa y blanco.`,
    stock: 52
};

// Fila 2

const producto1_line2 = {
    id: 5,
    nombre: "Opulent Jewels Ring",
    codigo: "A5",
    precio: 168.76,
    tipoDeAccesorio: "anillo",
    imagen: "/images/imagenes-listing-jhon/opulent.jpg",
    descripcion: `Este anillo de oro y plata tiene un diseño elegante y sofisticado.`,
    stock: 87
};

const producto2_line2 = {
    id: 6,
    nombre: "Serene Solitaire Earrings",
    codigo: "A6",
    precio: 125.28,
    tipoDeAccesorio: "aretes",
    imagen: "/images/imagenes-listing-jhon/serene.jpg",
    descripcion: `Estos hermosos aretes en oro, con zafiros en forma de corazón. `,
    stock: 13
};

const producto3_line2 = {
    id: 7,
    nombre: "Timeless Halo Earrings",
    codigo: "A7",
    precio: 620.73,
    tipoDeAccesorio: "aretes",
    imagen: "/images/imagenes-listing-jhon/timeles.jpg",
    descripcion: `Estos pendientes de diamantes en oro blanco para cualquier ocasión.`,
    stock: 87
};

const producto4_line2 = {
    id: 8,
    nombre: "Exquisite Earrings",
    codigo: "A8",
    precio: 327.71,
    tipoDeAccesorio: "aretes",
    imagen: "/images/imagenes-listing-jhon/exquisite.jpg",
    descripcion: `Estos elegantes y hermosos aretes en forma de lágrima verdes y dorados.`,
    stock: 30
};

//Anillo Grande

const producto_grand = {
    id: 9,
    nombre: "Timeless Elegance Ring",
    codigo: "A9",
    precio: 168.76,
    tipoDeAccesorio: "anillo",
    imagen: "/images/imagenes-listing-jhon/timeles elegance.jpg",
    descripcion: `Estos hermosos anillos de compromiso están fabricados con zafiros azules y diamantes.`,
    stock: 5
}

//Fila 3

const producto1_line3 = {
    id: 10,
    nombre: "Luxury Charms Ring",
    codigo: "A10",
    precio: 620.73,
    tipoDeAccesorio: "anillo",
    imagen: "/images/imagenes-listing-jhon/laxury charms.jpg",
    descripcion: `Este anillo con una piedra naranja de citrino y fabricado con oro.`,
    stock: 7 
}

const producto2_line3 = {
    id: 11,
    nombre: "Blissful Bloom Ring",
    codigo: "A11",
    precio: 620.73,
    tipoDeAccesorio: "anillo",
    imagen: "/images/imagenes-listing-jhon/blissful.jpg",
    descripcion: `Este hermoso anillo de oro en forma de hojas.`,
    stock: 21
}

//Fila 4

const producto1_line4 = {
    id: 12,
    nombre: "Sparkling Ring",
    codigo: "A12",
    precio: 620.73,
    tipoDeAccesorio: "anillo",
    imagen: "/images/imagenes-listing-jhon/sparkling ring.jpg",
    descripcion: `Este anillo de diamantes con un diamante central.` ,
    stock: 79
}

const producto2_line4 = {
    id: 13,
    nombre: "Glimmering Ring",
    codigo: "A13",
    precio: 620.73,
    tipoDeAccesorio: "anillo",
    imagen: "/images/imagenes-listing-jhon/glimmering.jpg",
    descripcion: `Este anillo de diamantes en oro rosa de 14 quilates.`,
    stock: 52 
}

const products = [

    producto1_line1,
    producto2_line1,
    producto3_line1,
    producto4_line1,
    producto1_line2,
    producto2_line2,
    producto3_line2,
    producto4_line2,
    producto_grand,
    producto1_line3,
    producto2_line3,
    producto1_line4,
    producto2_line4
];
//Ejercicio 2
// Función para filtrar productos por tipo
function filtrarProductosPorTipo(productos, tipoProducto) {
    const productosFiltrados = productos.filter(producto => producto.tipo === tipoProducto);
    return productosFiltrados;
  }
  
  // Lista de productos
  const productos = [
    { nombre: "Luxury Gems Necklase", tipo: "collar", precio: 168.76 },
    { nombre: "Reflections Necklace", tipo: "collar", precio: 620.73 },
    { nombre: "Timeless Halo Earrings", tipo: "aretes", precio: 620.73 },
    { nombre: "Exquisite Earrings", tipo: "aretes", precio: 327.71 },
    
  ];
  
  // Filtrar productos por tipo de accesorio
  const accesoriosFiltrados = filtrarProductosPorTipo(productos, "Accesorio");
  
  // Mostrar resultado en la consola del navegador
  console.log("Accesorios disponibles:");
  console.table(accesoriosFiltrados); 
  

  //Ejercicio 3
    function buscarProductosPorNombre(productos, terminoBusqueda) {
        // Convertimos el término de búsqueda a minúsculas para hacer la búsqueda case-insensitive
        const termino = terminoBusqueda.toLowerCase();
        
        
        return productos.filter(producto => 
            producto.nombre.toLowerCase().includes(termino)
        );
    }

    // Ejemplo de uso:
    const resultadoBusqueda = buscarProductosPorNombre(products, "ring");
    console.log(resultadoBusqueda);

    // diferentes términos de búsqueda
    console.log("Búsqueda de 'Ring':");
    console.log(buscarProductosPorNombre(products, "Ring"));

    console.log("\nBúsqueda de 'Necklace':");
    console.log(buscarProductosPorNombre(products, "Necklace"));

    console.log("\nBúsqueda de 'Earrings':");
    console.log(buscarProductosPorNombre(products, "Earrings"));

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
  const producto = [
    { nombre: "Luxury Gems Necklase",  precio: 168.76 },
    { nombre: "Reflections Necklace",  precio: 620.73 },
    { nombre: "Timeless Halo Earrings",  precio: 620.73 },
    { nombre: "Exquisite Earrings",  precio: 327.71 },
  ];
  
  console.log("Productos ordenados ascendentemente por precio:");
  console.log(ordenarProductosPorPrecio(productos, "ascendente"));
  
  console.log("\nProductos ordenados descendentemente por precio:");
  console.log(ordenarProductosPorPrecio(productos, "descendente"));