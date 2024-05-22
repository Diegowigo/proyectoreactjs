import React from "react";

import "./ItemListContainerComponent.css"

const ItemListContainerComponent = (props) => {

    return <div className="itemListContainer">{props.greeting}</div>;

};

export default ItemListContainerComponent;
