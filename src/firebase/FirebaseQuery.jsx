import {
  doc,
  getDocs,
  getFirestore,
  query,
  collection,
  where,
} from "firebase/firestore";
import { useState, useEffect } from "react";

function FirebaseQuery() {
  const [prd, setPrd] = useState({});

  const db = getFirestore();
  const id = "SozOgd3YvOc0IVpYLUn9";
  const table = "items";
  // const whereAtt = "categoryId";
  // const whereValue = "acero";
  // const biciRef = query( collection(db, "items"), where("categoryId", "==", "acero"));

  // por id
  // const docV = doc(db, table, id);

  const colItems = collection(db, table);

  useEffect(() => {
    // getDoc(docV).then((res) => {
    //   if (res.exists()) {
    //   } else {
    //     console.log("no existe");
    //   }

    getDocs(colItems).then((res) => {
      console.log(res.docs.map((doc)=>({id:doc.id, ...doc.data()})));
    });
  }, [colItems]);

  // useEffect(() => {
  //   console.log(biciRef);

  //   getDoc(biciRef).then((res) => {
  //     // const list = res.docs;

  //     // list.map((doc) => ({ id: doc.id, ...doc.data() }));
  //     // setPrd(list);
  //   });
  // }, [biciRef]);

  // return (
  //   <>
  //     <p>Lista</p>

  //     <div>{JSON.stringify(prd)}</div>
  //   </>
  // );

  return (
    <>
      <p>dentro</p>
      <div>{JSON.stringify(prd)}</div>
    </>
  );
}

export default FirebaseQuery;
