const products = [
  {
    id: 1,
    nombre: "Venus",
    precio: 600,
    desc: "carne 170gr, mayonesa PB, rúcula, cebolla con aceto de frutos rojos, mollejas, cheddar",
    tamaño: "simple",
    img: "/imagenes/menu/1.png",
    categoria: "hamburguesas",
    stock: 10,
  },
  {
    id: 2,
    nombre: "Marte",
    precio: 750,
    desc: "doble carne, doble cheddar, bbq con miel, cebolla crispy, bondiola de cerdo desmechada",
    tamaño: "doble",
    img: "/imagenes/menu/2.png",
    categoria: "hamburguesas",
    stock: 10,
  },
  {
    id: 3,
    nombre: "Saturno",
    precio: 700,
    desc: "pan tostado al revés con manteca, doble carne, triple cheddar, panceta sweet, cebolla morada, salsa PB",
    tamaño: "doble",
    img: "/imagenes/menu/3.png",
    categoria: "hamburguesas",
    stock: 10,
  },
  {
    id: 4,
    nombre: "Neptuno",
    precio: 600,
    desc: "hamburguesa de chorizo, mayonesa de chimichurri ahumada, rúcula, queso lincoln, doble panceta",
    tamaño: "simple",
    img: "/imagenes/menu/4.png",
    categoria: "hamburguesas",
    stock: 10,
  },
  {
    id: 5,
    nombre: "La Tierra",
    precio: 550,
    desc: "pan negro, salmon burguer 170gr, salsa PB, ananá grillada, palta + tomate + cilantro, cebolla morada, brotes frescos",
    tamaño: "simple",
    img: "/imagenes/menu/5.png",
    categoria: "hamburguesas",
    stock: 10,
  },
  {
    id: 6,
    nombre: "Urano",
    precio: 650,
    desc: "200gr de carne, langostinos, togarashi, queso filadelfia, shitakes salsa, teriyaki, palta, cebolla de verdeo",
    tamaño: "simple",
    img: "/imagenes/menu/6.png",
    categoria: "hamburguesas",
    stock: 10,
  },
  {
    id: 7,
    nombre: "Papas Simples",
    precio: 400,
    desc: "Porción de papas medianas, con aderezo a elección y sal",
    tamaño: "individual",
    img: "/imagenes/menu/7.png",
    categoria: "papas",
    stock: 10,
  },
  {
    id: 8,
    nombre: "Papas Planet",
    precio: 500,
    desc: "Porción de papas grande, acompañadas de queso cheddar fundido, bacon y verdeo",
    tamaño: "para compartir",
    img: "/imagenes/menu/8.png",
    categoria: "papas",
    stock: 10,
  },
  {
    id: 9,
    nombre: "Papas Neil",
    precio: 550,
    desc: "Porción de papas grande, acompañadas con salsa de queso parmesano , barbacoa y tomillo fresco",
    tamaño: "para compartir",
    img: "/imagenes/menu/9.png",
    categoria: "papas",
    stock: 10,
  },
];

export const getCategory = (category = "") => {
  if (category !== "") {
    return new Promise((resolve, reject) => {
      const product = products.filter(
        (prod) => parseInt(prod.categoria) === parseInt(category)
      );
      setTimeout(() => {
        resolve(product);
        reject("No se pueden cargar los productos");
      }, 500);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
        reject("No se pueden cargar los productos");
      }, 1000);
    });
  }
};

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    const product = products.find((product) => parseInt(product.id) === parseInt(id));
    setTimeout(() => resolve(product), 1000);
  });
};

export const getItem = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
};
