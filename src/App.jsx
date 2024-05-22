import React from 'react';

import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListConteinerComponent from './components/ItemListConteinerComponent/ItemListConteinerComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
       <NavBarComponent/>
       <ItemListConteinerComponent greeting="¡Hola, Bienvenido(a) a mi página!"/>
    </>
  )
}

export default App
