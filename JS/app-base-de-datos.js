console.log("connected");
//CREACIÓN DE LAS CLASES DE CADA PRODUCTO:

//VELAS:
class velas {
  constructor(literal) {
    this.id = literal.id;
    this.img = literal.img;
    this.nombre = literal.nombre;
    this.descripcion = literal.descripcion;
    this.precio = literal.precio;
  }
}
const vela1 = new velas({
  id: 1,
  nombre: "Vela soja con aroma citrico",
  descripcion: " Vela de soja con alto punto de fusion y aroma citríco.",
  precio: 6000,
});

const vela2 = new velas({
  id: 2,
  nombre: "Vela soja con aroma vainilla",
  descripcion: "Vela de soja con alto punto de fusión y aroma a vainilla.",
  precio: 11000,
});

const vela3 = new velas({
  id: 3,
  nombre: "Vela soja con aroma lavanda",
  descripcion: "Vela de soja con punto de fusión medio y aroma a lavanda.",
  precio: 7000,
});

const vela4 = new velas({
  id: 4,
  nombre: "Vela soja con aroma rosas",
  descripcion:
    "Vela de soja con punto de fusión alto y aroma a rosas y jazmín.",
  precio: 6500,
});

//ACEITES ESENCIALES/AROMATICOS:

class aceitesAromaticos {
  constructor(literal) {
    this.id = literal.id;
    this.nombre = literal.nombre;
    this.descripcion = literal.descripcion;
    this.precio = literal.precio;
  }
}

const aceite1 = new aceitesAromaticos({
  id: 5,
  nombre: "Aceite floral primavera",
  descripcion: "Aceite aromatico con olor primaveral, con efecto refrescante.",
  precio: 7000,
});

const aceite2 = new aceitesAromaticos({
  id: 6,
  nombre: "Aceite fruta tropical",
  descripcion:
    "Aceite aromatico, con olor kiwi, especial para después de la ducha.",
  precio: 6500,
});

const aceite3 = new aceitesAromaticos({
  id: 7,
  nombre: "Aceite con efecto calor",
  descripcion:
    "Aceite aromatico, con olor vainilla y efecto calor, especial para masajes.",
  precio: 7500,
});

const aceite4 = new aceitesAromaticos({
  id: 8,
  nombre: "Aceite floral refrescante ",
  descripcion:
    "Aceite aromatico con olor a rosas, para masaje en cuero cabelludo.",
  precio: 7000,
});

//FRAGANCIAS:

class fragancias {
  constructor(literal) {
    this.id = literal.id;
    this.nombre = literal.nombre;
    this.descripcion = literal.descripcion;
    this.precio = literal.precio;
  }
}

const fragancia1 = new fragancias({
  id: 9,
  nombre: "Frangancia olor naranja",
  descripcion:
    " Aromatiza tu hogar con con esta delicada fragancia de olor a naranjas frescas.",
  precio: 6500,
});

const fragancia2 = new fragancias({
  id: 10,
  nombre: "Frangancia olor a menta",
  descripcion:
    "Aromatiza tu hogar con con esta delicada fragancia de olor a menta y limón.",
  precio: 7000,
});

const fragancia3 = new fragancias({
  id: 11,
  nombre: "Frangancia olor lavanda",
  descripcion:
    "Aromatiza tu hogar con con esta delicada fragancia de olor a lavanda.",
  precio: 7500,
});

const fragancia4 = new fragancias({
  id: 12,
  nombre: "Frangancia olor a Coco",
  descripcion:
    "Aromatiza tu hogar con con esta delicada fragancia de olor a coco.",
  precio: 8000,
});

//EQUIPOS PARA MASAJES:

class equipos {
  constructor(literal) {
    this.id = literal.id;
    this.nombre = literal.nombre;
    this.descripcion = literal.descripcion;
    this.precio = literal.precio;
  }
}

const equipo1 = new equipos({
  id: 13,
  nombre: "Masajeador electrico",
  descripcion:
    "Masajeador electrico para el cuerpo. Duración de bateria 72 horas.",
  precio: 35000,
});

const equipo2 = new equipos({
  id: 14,
  nombre: "Masajeador manual",
  descripcion: "Masajeador manual de madera para: espalda, piernas y brazos.",
  precio: 12000,
});

const equipo3 = new equipos({
  id: 15,
  nombre: "Masajeador para cabeza",
  descripcion: "Masajeador manual de aluminio para nervios craneales.",
  precio: 10000,
});

const equipo4 = new equipos({
  id: 16,
  nombre: "Masajeador para pies",
  descripcion:
    "Masajeador rotativo manual de madera (puntas con relieve) para pies.",
  precio: 14000,
});

// PROMOCIONES/COMBOS DE RELAJACION:

class promociones {
  constructor(literal) {
    this.id = literal.id;
    this.nombre = literal.nombre;
    this.descripcion = literal.descripcion;
    this.precio = literal.precio;
  }
}

const promo1 = new promociones({
  id: 17,
  nombre: "Combos para rostro",
  descripcion:
    "Vela de soja con olor a coco, Dos jabones de avena y paño para el cuidado del rostro.",
  precio: 15000,
});

const promo2 = new promociones({
  id: 18,
  nombre: "Piedras para masaje",
  descripcion:
    "Piedras elaboradas con acero esmaltado y con acero recubierto de polvo y basalto.",
  precio: 18000,
});

console.log(vela1);
console.log(vela2);
console.log(vela3);
console.log(vela4);
console.log(aceite1);
console.log(aceite2);
console.log(aceite3);
console.log(aceite4);
console.log(fragancia1);
console.log(fragancia2);
console.log(fragancia3);
console.log(fragancia4);
console.log(equipo1);
console.log(equipo2);
console.log(equipo3);
console.log(equipo4);
console.log(promo1);
console.log(promo2);

//ARRAYS DE CADA PRODUCTO:
console.log("conectado");
const velas = [
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
];

const aceites = [
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
];

const fragancias = [
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
];

const equipos = [
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
];

const promociones = [
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

//ARRAY QUE INCLUYE TODOS LOS PRODUCTOS:
const productos = [velas, aceites, fragancias, equipos, promociones];

//ARRAY CARRITO DE COMPRAS:
const carrito = [];
