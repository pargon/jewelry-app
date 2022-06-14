import React from "react";

const vocals = "aeiou";

function Stackbliz() {
  const controlVoc = (e) => {
    const str = e.key.toLowerCase();
    if(vocals.includes(str)){
      e.preventDefault(e);
      alert('No puede ingresar vocales');
    }
  };

  return (
    <>
      <div>
        <h1>Hola</h1>
        <input onKeyDown={controlVoc} />
      </div>
    </>
  );
}

export default Stackbliz;