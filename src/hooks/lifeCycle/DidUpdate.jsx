/**
 * Ejemplo de uso de metodo componentDidUpdate en componente clase 
 * y el uso de hook en componente funcional
 */
import React, { Component, useEffect } from 'react';
export class DidUpdate extends Component {

    componentDidUpdate(prevProps, prevState) {
        console.log('DIDUPDATE: Comportamiento cuando el componente recibe nuevas props o cambia su estado');
    }

    render() {
        return (
            <div>
                <h1>Componente de ciclo de vida DidUpdate</h1>
            </div>
        );
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('DIDUPDATE: Comportamiento cuando el componente recibe nuevas props o cambia su estado');
        // You can perform side effects here, such as fetching data or updating the DOM
    });

    return (
        <div>
            <h1>Componente de ciclo de vida DidUpdate con Hook</h1>
        </div>
    );
}