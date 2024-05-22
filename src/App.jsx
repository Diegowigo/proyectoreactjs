import React from 'react';

import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainerComponent from './components/ItemListContainerComponent/ItemListContainerComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
       <NavBarComponent/>
       <ItemListContainerComponent greeting="¡Hola, Bienvenido(a) a mi página!"/>
    </>
  )
}

export default App
