import React, { useState } from "react";
import ItemDetail from "../components/ItemDetail";

const item = {
  id: "a3",
  title: "Producto 3",
  description:
    "Reloj Festina F16169/2 hombre Elegante reloj masculino de la colección Festina Sport Chronograph Análogo con movimiento de cuarzo Caja redonda de acero inoxidable de 40 mm de diámetro con fondo blanco e índices en tono azul Posee fecha y cronógrafo de gran precisión (en esferas internas color azul) Corona con protección anti-golpe Malla de acero gamuzado en 22 mm Cierre desplegable con apertura de seguridad mediante pulsadores y traba de seguridad Resistente al agua 100 mts. 1 año de garantía",
  price: 20000,
  pictureUrl:
    "https://www.joyeriadiamond.com/image/cache/catalog/Productos/Relojes/Festina/F16169.2/3042199_1-250x250.jpg",
};

const getItem = new Promise((res, rej) => {
  setTimeout(() => {
    res(item);
  }, 2000);
});

function ItemDetailContainer({ greeting }) {
  const [result, setResult] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  getItem
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

  return (
    <>
      <h1 className="display-3 fw-bold text-shadow">{greeting}</h1>
      <div>{error && "Problema!!"}</div>
      <div>{loading && "Cargando........"}</div>
      <div>
        {result && (
          <>
            <div>
              <ItemDetail item={item}></ItemDetail>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ItemDetailContainer;
