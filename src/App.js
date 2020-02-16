import React , { useState, useEffect, Fragment } from 'react';
import Frase from './components/Frase';
import styled from '@emotion/styled';

/**
 * Para utilizar el emotion styled hay que instalar la libreria
 * en la terminal con el comando npm i @emotion/core @emotion/styled
 */

const Contenedor = styled.div`
display: flex;
align-items: center;
padding-top: 5rem;
flex-direction: column;
` ;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  /**
   * State de frases
   */

  const [frase, guardarFrase] = useState({});


  /**
   * ======================================================
   * Funcionamiento del onClick
   * ====================================================== 
   * 
   * En el ejemplo del onClick de la label boton, tenemos la
   * llamada a la función onsultarAPI. Para que la función 
   * entre en funcionamiento al hacer onClick la sintaxis debe
   * ser {consultarAPI} o { () => consultarAPI() }. 
   * Si ponemos { consultarAPI() } la función se ejecutará sin
   * esperar a hacer onClikc
   */



  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);
  }

/**
 * Cargamos una frase con useEffect
 */

 useEffect(() => {
  consultarAPI();
 }, [])

  return (
    <Fragment>
      <Frase 
        frase={frase}
      />
      <Contenedor>
      <Boton
        onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
    </Fragment>
    
   
  );
}

export default App;
