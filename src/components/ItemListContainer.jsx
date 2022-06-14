import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";

const itemList = [
  {
    id: "a1",
    title: "Producto 1",
    description:
      "Reloj Festina F16169/2 hombre Elegante reloj masculino de la colección Festina Sport Chronograph Análogo con movimiento de cuarzo Caja redonda de acero inoxidable de 40 mm de diámetro con fondo blanco e índices en tono azul Posee fecha y cronógrafo de gran precisión (en esferas internas color azul) Corona con protección anti-golpe Malla de acero gamuzado en 22 mm Cierre desplegable con apertura de seguridad mediante pulsadores y traba de seguridad Resistente al agua 100 mts. 1 año de garantía",
    price: 20000,
    pictureUrl:
      "https://www.joyeriadiamond.com/image/cache/catalog/Productos/Relojes/Festina/F16169.2/3042199_1-250x250.jpg",
  },
  {
    id: "a2",
    title: "Producto 2",
    description:
      "Reloj Festina F16169/2 hombre Elegante reloj masculino de la colección Festina Sport Chronograph Análogo con movimiento de cuarzo Caja redonda de acero inoxidable de 40 mm de diámetro con fondo blanco e índices en tono azul Posee fecha y cronógrafo de gran precisión (en esferas internas color azul) Corona con protección anti-golpe Malla de acero gamuzado en 22 mm Cierre desplegable con apertura de seguridad mediante pulsadores y traba de seguridad Resistente al agua 100 mts. 1 año de garantía",
    price: 20000,
    pictureUrl:
      "https://www.joyeriadiamond.com/image/cache/catalog/Productos/Relojes/Festina/F16169.2/3042199_1-250x250.jpg",
  },
  {
    id: "a3",
    title: "Producto 3",
    description:
      "Reloj Festina F16169/2 hombre Elegante reloj masculino de la colección Festina Sport Chronograph Análogo con movimiento de cuarzo Caja redonda de acero inoxidable de 40 mm de diámetro con fondo blanco e índices en tono azul Posee fecha y cronógrafo de gran precisión (en esferas internas color azul) Corona con protección anti-golpe Malla de acero gamuzado en 22 mm Cierre desplegable con apertura de seguridad mediante pulsadores y traba de seguridad Resistente al agua 100 mts. 1 año de garantía",
    price: 20000,
    pictureUrl:
      "https://www.joyeriadiamond.com/image/cache/catalog/Productos/Relojes/Festina/F16169.2/3042199_1-250x250.jpg",
  },
];


function ItemListContainer({ greeting }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();
  const data = new Promise((res, rej) => {

    setTimeout(() => {
      res(itemList);
      // rej('mallll');
    }, 2000);
  });

  useEffect(() => {

    data
      .then((res) => {
        setResult(res);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return (
    <>
      <h1 className="display-3 fw-bold text-shadow">{greeting}</h1>
      <div>{error && "Problema!!"}</div>
      <div>{loading && "Cargando........"}</div>
      <div>
        {result && (
          <>
            <div>
              <ItemList items={result} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ItemListContainer;
