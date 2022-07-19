import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import ItemDetail from "../components/ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
  const { id } = useParams();
  const [result, setResult] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const table = "items";
    const colItems = doc(db, table, id);

    const data = getDoc(colItems);

    data
      .then((doc) => {
        setResult({ id: doc.id, ...doc.data() });
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
        <h1 className="p-3 text-center">Item Detail</h1>
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
