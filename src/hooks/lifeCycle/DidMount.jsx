/**
 * Ejemplo de uso del metodo
 * de ciclo de vida componentDidMount en componente clase y el hook de ciclo de vida 
 * en componente funcional
 */

import React, { Component, useEffect} from 'react'

export default class DidMount extends Component {
  
    componentDidMount() {
        console.log('DIDMOUNT: Comportamiento antes de que el componente sea añadido al DOM (renderice)');
        // You can perform side effects here    , such as fetching data or setting up subscriptions
    }

    render() {
    return (
      <div>
        <h1>Componente de ciclo de vida DidMount</h1>
      </div>
    )}
}


export const DidMountHook = () => {

    useEffect(() => {
        console.log('DIDMOUNT: Comportamiento antes de que el componente sea añadido al DOM (renderice)');
        // You can perform side effects here, such as fetching data or setting up subscriptions
    }, []); //Solo se ejecuta una vez al montar el componente , sino agregamos el array vacio se ejecuta cada vez que se renderiza el componente


    return (
        <div>
            <h1>Componente de ciclo de vida DidMount con Hook</h1>            
        </div>
    );
}

