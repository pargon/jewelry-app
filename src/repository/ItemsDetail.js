class ItemsDetail {
  static itemList = [{
      id: "a1",
      title: "Producto 1",
      description: "Reloj Festina F16169/2 hombre Elegante reloj masculino de la colección Festina Sport Chronograph Análogo con movimiento de cuarzo Caja redonda de acero inoxidable de 40 mm de diámetro con fondo blanco e índices en tono azul Posee fecha y cronógrafo de gran precisión (en esferas internas color azul) Corona con protección anti-golpe Malla de acero gamuzado en 22 mm Cierre desplegable con apertura de seguridad mediante pulsadores y traba de seguridad Resistente al agua 100 mts. 1 año de garantía",
      price: 20000,
      categoryId: 'acero',
      categoryDesc: 'Acero',
      pictureUrl: "https://www.joyeriadiamond.com/image/cache/catalog/Productos/Relojes/Festina/F16169.2/3042199_1-250x250.jpg",
    },
    {
      id: "a2",
      title: "Producto 2",
      description: "Reloj Festina F16169/2 hombre Elegante reloj masculino de la colección Festina Sport Chronograph Análogo con movimiento de cuarzo Caja redonda de acero inoxidable de 40 mm de diámetro con fondo blanco e índices en tono azul Posee fecha y cronógrafo de gran precisión (en esferas internas color azul) Corona con protección anti-golpe Malla de acero gamuzado en 22 mm Cierre desplegable con apertura de seguridad mediante pulsadores y traba de seguridad Resistente al agua 100 mts. 1 año de garantía",
      price: 20000,
      categoryId: 'acero',
      categoryDesc: 'Acero',
      pictureUrl: "https://www.joyeriadiamond.com/image/cache/catalog/Productos/Relojes/Festina/F16169.2/3042199_1-250x250.jpg",
    },
    {
      id: "a3",
      title: "Producto 3",
      description: "Reloj Festina F16169/2 hombre Elegante reloj masculino de la colección Festina Sport Chronograph Análogo con movimiento de cuarzo Caja redonda de acero inoxidable de 40 mm de diámetro con fondo blanco e índices en tono azul Posee fecha y cronógrafo de gran precisión (en esferas internas color azul) Corona con protección anti-golpe Malla de acero gamuzado en 22 mm Cierre desplegable con apertura de seguridad mediante pulsadores y traba de seguridad Resistente al agua 100 mts. 1 año de garantía",
      price: 20000,
      categoryId: 'aluminio',
      categoryDesc: 'Aluminio',
      pictureUrl: "https://www.joyeriadiamond.com/image/cache/catalog/Productos/Relojes/Festina/F16169.2/3042199_1-250x250.jpg",
    },
  ];

  static getItems() {
    return this.itemList;
  }

  static getById(id) {
    const val =  this.itemList.find((word) =>{return word.id === id});
    console.log(val);
    return val
  }

  static getByCategory(id) {
    return this.itemList.filter(word => word.categoryId === id);
  }
}
module.exports = ItemsDetail;