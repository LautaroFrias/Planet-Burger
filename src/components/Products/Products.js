const products = [
  {
    id: 1,
    nombre: "Venus",
    precio: 600,
    desc: "carne 170gr, mayonesa PB, rúcula, cebolla con aceto de frutos rojos, mollejas, cheddar",
    tamaño: "simple",
    img: "/imagenes/menu/1.png",
  },
  {
    id: 2,
    nombre: "Marte",
    precio: 750,
    desc: "doble carne, doble cheddar, bbq con miel, cebolla crispy, bondiola de cerdo desmechada",
    tamaño: "doble",
    img: "/imagenes/menu/2.png",
  },
  {
    id: 3,
    nombre: "Saturno",
    precio: 700,
    desc: "pan tostado al revés con manteca, doble carne, triple cheddar, panceta sweet, cebolla morada, salsa PB",
    tamaño: "doble",
    img: "/imagenes/menu/3.png",
  },
  {
    id: 4,
    nombre: "Neptuno",
    precio: 600,
    desc: "hamburguesa de chorizo, mayonesa de chimichurri ahumada, rúcula, queso lincoln, doble panceta",
    tamaño: "simple",
    img: "/imagenes/menu/4.png",
  },
  {
    id: 5,
    nombre: "La Tierra",
    precio: 550,
    desc: "pan negro, salmon burguer 170gr, salsa PB, ananá grillada, palta + tomate + cilantro, cebolla morada, brotes frescos",
    tamaño: "simple",
    img: "/imagenes/menu/5.png",
  },
  {
    id: 6,
    nombre: "Urano",
    precio: 650,
    desc: "200gr de carne, langostinos, togarashi, queso filadelfia, shitakes salsa, teriyaki, palta, cebolla de verdeo",
    tamaño: "simple",
    img: "/imagenes/menu/6.png",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getItem = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products[1]);
    }, 2500);
  });
};
