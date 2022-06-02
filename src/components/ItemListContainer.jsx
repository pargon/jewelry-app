import React from "react";

function ItemListContainer({ greeting }) {
  return (
    <>
      <h1 className="display-3 fw-bold text-shadow">{greeting}</h1>
    </>
  );
}

export default ItemListContainer;
