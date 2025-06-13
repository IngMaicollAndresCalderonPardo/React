/**
 * Ejemplo de uso del metodo
 * componentWillUnmount en componente clase y el hook para componente funcional
 * (cuando el componente se va a desmontar o desaparecer del DOM)
 */

import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {

    componentWillUnmount() {
        console.log('WILLUNMOUNT: Comportamiento antes de que el componente se desmonte o desaparezca del DOM');
        // Clean up any subscriptions or timers here
    }

    render() {
        return (
            <div>
                <h1>Componente de ciclo de vida WillUnMount</h1>
                <p>Este componente se desmontará cuando se elimine de la interfaz de usuario.</p>
            </div>
        );
    }
}


export default function WillUnMountHook() {
   
    useEffect(() => {
        return () => {
            console.log('WILLUNMOUNT: Comportamiento antes de que el componente se desmonte o desaparezca del DOM');
            // Clean up any subscriptions or timers here
        };
    }, []);
  
    return (
    <div>
        <h1>Componente de ciclo de vida WillUnMount con Hook</h1>
        <p>Este componente se desmontará cuando se elimine de la interfaz de usuario.</p>
    </div>
  )
}
