import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "../components/ItemList";
import ItemsDetail from "../repository/ItemsDetail";


function ItemListContainer({ greeting }) {
  const { id: categoryId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();

  useEffect(() => {
    let itemList = [];
    if (categoryId) {
      itemList = ItemsDetail.getByCategory(categoryId);
    } else {
      itemList = ItemsDetail.getItems();
    }

    const data = new Promise((res, rej) => {
      setTimeout(() => {
        res(itemList);
        // rej('mallll');
      }, 2000);
    });

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
  }, [categoryId]);

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
