import React, { useEffect, useState } from "react";

function TestPromise() {
  const [ok, setOk] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = new Promise((res, rej) => {
      setTimeout(() => {
        res([{"id": "100", "monto": "102121,3"}, {"id": "200", "monto": "44343,3"}]);
      }, 1000);
    });

    data
      .then((result) => {
        setOk(result);
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
      <div>{error && "Problema!!"}</div>
      <div>{loading && "Cargando........"}</div>
      <div>{ok && JSON.stringify(ok)}</div>

      {/* // ok.map((e) => {
        // <p>e.id</p>
        // <p>e.monto</p>})      } */}

    </>
  );
}

export default TestPromise;
