class ItemsDetail {
  static itemList = [{
      id: "a1",
      title: "PU.241.34.111",
      description: "RELOJ CATERPILLAR, MOVIMIENTO CUARZO, CRISTAL MINERAL REFORZADO, SUMERGIBLE 100m, DIÁMETRO DE CAJA: 45mm, ESPESOR DE CAJA: 11mm, MALLA DE CUERO, CAJA ACERO INOXIDABLE",
      price: 30700,
      stock: 10,
      categoryId: 'acero',
      categoryDesc: 'Acero',
      pictureUrl: "https://www.joyeriadiamond.com/image/cache/catalog/cat%20negro%2011-550x550h.jpg",
    },
    {
      id: "a2",
      title: "SO27M105",
      description: "Modelo: SO27M105, Material de la caja: Plástico, Material de la correa: Silicona, Material del broche: Aluminio, Movimiento: Cuarzo, Tamaño del reloj: 47 cm, Grosor: 11,75 cm, Altura: 44,8 cm, Resistencia al agua: 3 ATM, Garantía: 2 años",
      price: 26495,
      stock: 10,
      categoryId: 'plastico',
      categoryDesc: 'Plastico',
      pictureUrl: "https://www.joyeriadiamond.com/image/cache/catalog/SO27M105%2011-550x550.png",
    },
    {
      id: "a3",
      title: "SB03M100",
      description: "Reloj Swatch Big Bold Bioceramic Silicona,  Modelo: Sb03m100,  Material de la caja: Bioceramic,  Material de la correa: Silicona,  Movimiento: Cuarzo,  Tamaño del reloj: 47 mm,  Grosor: 11,75 mm,  Altura: 44,80 mm,  Resistencia al agua: 3 ATM,  Garantía: 2 años",
      price: 29595,
      stock:10,
      categoryId: 'plastico',
      categoryDesc: 'Plastico',
      pictureUrl: "https://www.joyeriadiamond.com/image/cache/catalog/SB03M100%2011-550x550.jpg",
    },
    {
      id: "a4",
      title: "1782359",
      description: "Reloj Tommy Hilfiger de Acero Inoxidable Rose de Mujer, Modelo: 1782359, Material de la caja: Acero Inoxidable, Color de la caja: Rose, Cristal: Mineral, Diámetro de la caja: 32 mm, Movimiento: Cuarzo, Grosor de la caja: 8 mm, Material de la correa: Acero inoxidable, Resistencia al agua: 3 ATM, Garantía: 2 años",
      price: 41195,
      stock:10,
      categoryId: 'acero',
      categoryDesc: 'Acero',
      pictureUrl: "https://www.joyeriadiamond.com/image/cache/catalog/1782359%2011-550x550h.jpg",
    },
  ];

  static getItems() {
    return this.itemList;
  }

  static getById(id) {
    const val = this.itemList.find((word) => {
      return word.id === id
    });
    return val
  }

  static getByCategory(id) {
    return this.itemList.filter(word => word.categoryId === id);
  }
}
module.exports = ItemsDetail;