import React from "react";

const ItemListConteinerComponent = (props) => {
  const custonStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "2rem",
    margin: "auto",
    textAlign: "center",
    width: "100vw",
    height: "80vh",
  };

  return <div style={custonStyles}>{props.greeting}</div>;
};

export default ItemListConteinerComponent;
