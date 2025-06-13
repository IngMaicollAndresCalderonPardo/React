/**
 * 
 */

import React,{useEffect} from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('Componente creado');

        const interval = setInterval(() => {
            document.title = `Tiempo: ${new Date().toLocaleTimeString()}`;
            console.log('Actualizacion del componente cada segundo');
        }, 1000);

        return () => {
            console.log('Componente va a desaparecer del DOM');
            document.title = 'Tiempo detenido';
            clearInterval(interval);
        };
    }, []);
    

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
