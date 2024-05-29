import React from 'react'
import { useRouteError } from 'react-router-dom'

const NoFound = () => {
    const error = useRouteError();
    console.error(error);
    return (
      <div id="error-page">
        <h1>Oops! error 404</h1>
        <p>Sorry, No se ha encontrado la pagina que se busca.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );  
}

export default NoFound
