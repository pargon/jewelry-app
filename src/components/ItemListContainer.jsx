import { useState, useEffect } from "react";
import { Container, CardGroup } from "react-bootstrap";
import { useParams } from "react-router";
import ItemList from "../components/ItemList";
import {
  where,
  query,
  getFirestore,
  getDocs,
  collection,
} from "firebase/firestore";

function ItemListContainer({ greeting }) {
  const { id: categoryId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();

  useEffect(() => {
    const db = getFirestore();
    const table = "items";
    let colItems;
    if (categoryId) {
      colItems = query(
        collection(db, table),
        where("categoryId", "==", categoryId)
      );
    } else {
      colItems = collection(db, table);
    }
    // todo
    const data = getDocs(colItems);

    data
      .then((res) => {
        setResult(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
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
      <Container fluid>
        <h1 className="p-3 text-center">{greeting}</h1>
        <div>{error && "Problem!!"}</div>
        <div>{loading && "Loading........"}</div>
        <div>
          {result && (
            <>
              <CardGroup className="text-center">
                <ItemList items={result} category={categoryId} />
              </CardGroup>
            </>
          )}
        </div>
      </Container>
    </>
  );
}

export default ItemListContainer;
