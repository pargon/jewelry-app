import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../components/ItemDetail";
import ItemsDetail from "../repository/ItemsDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [result, setResult] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItem = new Promise((res, rej) => {
      setTimeout(() => {
        res(id);
      }, 2000);
    });

    getItem
      .then((res) => {
        const item = ItemsDetail.getById(res);
        setResult(item);        
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <div>{error && "Problema!!"}</div>
      <div>{loading && "Cargando........"}</div>
      <div>
        {result && (
          <>
            <div>
              <ItemDetail item={result}></ItemDetail>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ItemDetailContainer;
