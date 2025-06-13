/**
 * Ejemplo de uso de:
 * * - useState
 * * - useRef
 * * - useEffect
 */

import React,{ useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {
    
    // Vamos a crear dos contadores diferentes
    // Cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    // Vamos a crear una referencia con useRef() para asociar una variable 
    // con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);
    }
    function incrementar2() {
        setContador2(contador2 + 1);
    }   

    //? CASO 1: Ejecutar SIEMPRE un snippet de codigo
    // Cada vez que haya un cambio en el estado del componente
    // Se ejecuta aquello que este dentro del useEffect()
    // useEffect(() => {
    //     console.log('Cambio en el estado del componente');
    //     console.log('Mostrando referencia a elemento del DOM: ', miRef);
    // });

    //? CASO 2: Ejecutar cuando cambie el contador1
    // Cada vez que haya un cambio en el contador1
    // Se ejecuta aquello que este dentro del useEffect()
    // En caso de que cambie el contador2,no habra ejecucion
    // useEffect(() => {
    //     console.log('Cambio en el contador 1');
    //     console.log('Mostrando referencia a elemento del DOM: ', miRef);
    // }, [contador1]); // Dependencia del contador1

       //? CASO 3: Ejecutar cuando cambie el contador1 o contador2
    // Cada vez que haya un cambio en el contador1 o contador2
    // Se ejecuta aquello que este dentro del useEffect()
    // En caso de que cambie el contador2,no habra ejecucion
    useEffect(() => {
        console.log('Cambio en el contador 1 o contador 2');
        console.log('Mostrando referencia a elemento del DOM: ', miRef);
    }, [contador1, contador2]); // Dependencias de contador1 y contador2


    return (
        <div>
            <h1>Ejemplo de uso del Hook useState,useRef y useEffect</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            {/* Referencia al input */}
            <h4 ref={miRef} >Ejemplo de referencia al elemento del DOM</h4>
            {/* Botones para incrementar los contadores */}
            <button onClick={incrementar1}>
                Incrementar contador 1
            </button>
            <button onClick={incrementar2}>
                Incrementar contador 2
            </button>
        </div>
    );
}

export default Ejemplo2;
