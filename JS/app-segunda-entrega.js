//ARRAYS DE TODOS LOS PRODUCTOS:
console.log("conectado");

const productos = [
  {
    id: 1,
    nombre: "Vela soja con aroma citrico",
    descripcion: " Vela de soja con alto punto de fusion y aroma citríco.",
    precio: 6000,
  },
  {
    id: 2,
    nombre: "Vela soja con aroma vainilla",
    descripcion: "Vela de soja con alto punto de fusión y aroma a vainilla.",
    precio: 11000,
  },
  {
    id: 3,
    nombre: "Vela soja con aroma lavanda",
    descripcion: "Vela de soja con punto de fusión medio y aroma a lavanda.",
    precio: 7000,
  },
  {
    id: 4,
    nombre: "Vela soja con aroma rosas",
    descripcion:
      "Vela de soja con punto de fusión alto y aroma a rosas y jazmín.",
    precio: 6500,
  },

  {
    id: 5,
    nombre: "Aceite floral primavera",
    descripcion:
      "Aceite aromatico con olor primaveral, con efecto refrescante.",
    precio: 7000,
  },
  {
    id: 6,
    nombre: "Aceite fruta tropical",
    descripcion:
      "Aceite aromatico, con olor kiwi, especial para después de la ducha.",
    precio: 6500,
  },
  {
    id: 7,
    nombre: "Aceite con efecto calor",
    descripcion:
      "Aceite aromatico, con olor vainilla y efecto calor, especial para masajes.",
    precio: 7500,
  },
  {
    id: 8,
    nombre: "Aceite floral refrescante ",
    descripcion:
      "Aceite aromatico con olor a rosas, para masaje en cuero cabelludo.",
    precio: 7000,
  },

  {
    id: 9,
    nombre: "Frangancia olor naranja",
    descripcion:
      " Aromatiza tu hogar con con esta delicada fragancia de olor a naranjas frescas.",
    precio: 6500,
  },
  {
    id: 10,
    nombre: "Frangancia olor a menta",
    descripcion:
      "Aromatiza tu hogar con con esta delicada fragancia de olor a menta y limón.",
    precio: 7000,
  },
  {
    id: 11,
    nombre: "Frangancia olor lavanda",
    descripcion:
      "Aromatiza tu hogar con con esta delicada fragancia de olor a lavanda.",
    precio: 7500,
  },
  {
    id: 12,
    nombre: "Frangancia olor a Coco",
    descripcion:
      "Aromatiza tu hogar con con esta delicada fragancia de olor a coco.",
    precio: 8000,
  },

  {
    id: 13,
    nombre: "Masajeador electrico",
    descripcion:
      "Masajeador electrico para el cuerpo. Duración de bateria 72 horas.",
    precio: 35000,
  },
  {
    id: 14,
    nombre: "Masajeador manual",
    descripcion: "Masajeador manual de madera para: espalda, piernas y brazos.",
    precio: 12000,
  },
  {
    id: 15,
    nombre: "Masajeador para cabeza",
    descripcion: "Masajeador manual de aluminio para nervios craneales.",
    precio: 10000,
  },
  {
    id: 16,
    nombre: "Masajeador para pies",
    descripcion:
      "Masajeador rotativo manual de madera (puntas con relieve) para pies.",
    precio: 14000,
  },

  {
    id: 17,
    nombre: "Combos para rostro",
    descripcion:
      "Vela de soja con olor a coco, Dos jabones de avena y paño para el cuidado del rostro.",
    precio: 15000,
  },
  {
    id: 18,
    nombre: "Piedras para masaje",
    descripcion:
      "Piedras elaboradas con acero esmaltado y con acero recubierto de polvo y basalto.",
    precio: 18000,
  },
];

/**ALGORITMO QUE BUSCA OBJETOS EN UN ARRAY DE PRODUCTOS, VALIDA SU EXISTENCIA Y
 * LUEGO SE AGREGA A UN ARRAY CARRITO. VALIDANDO QUE NO ESTÉ YA EN EL MISMO**/

//NOTA: USAR NOMBRE COMPLETO DEL PRODUCTO.
const carrito = [];
let busquedaTerminada;
let objeto;
let comprobacionArt;
function caracterValido(nombre) {
  return /^[A-Za-z\s]+$/.test(nombre);
}

do {
  objeto = prompt(
    " Escriba el nombre del articulo a buscar en el array productos"
  );

  if (!objeto) {
    alert("El campo no puede quedar vacío.");
  } else if (!caracterValido(objeto)) {
    alert(
      "Por favor, escriba el nombre del producto. Sin números ni caracteres especiales."
    );
  } else {
    comprobacionArt = productos.some((art) => art.nombre.includes(objeto));

    if (comprobacionArt) {
      alert("En horabuena, contamos con el producto");
      let resultado = productos.find((art) => art.nombre.includes(objeto));
      //AGREGAndo EL PRODUCTO AL ARRAY CARRITO:
      if (carrito.includes(resultado)) {
        alert("Ése articulo ya está en tu carrito");
      } else {
        carrito.push(resultado);
      }
    } else {
      alert("No contamos con éste producto en stock");
    }
    busquedaTerminada = prompt(
      "¿Desear buscar otro objeto al carrito? (si o no)"
    ).toLowerCase();
    if (!busquedaTerminada) {
      alert("Por favor, escriba si o no. No se admiten caracteres vacios");
    } else if (!caracterValido(busquedaTerminada)) {
      alert(
        "Por favor, escriba (si o no) sin números ni caracteres especiales."
      );
    }
  }
} while (
  !objeto ||
  !caracterValido(busquedaTerminada) ||
  busquedaTerminada !== "no"
);

console.log(carrito);
