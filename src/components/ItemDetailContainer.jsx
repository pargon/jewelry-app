import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
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
      <Container fluid>
        <h1 className="p-5 text-center">Detalle</h1>
        <div>{error && "Problem!!"}</div>
        <div>{loading && "Loading........"}</div>
        <div>
          {result && (
            <>
              <ItemDetail item={result}></ItemDetail>
            </>
          )}
        </div>
      </Container>
    </>
  );
}

export default ItemDetailContainer;
