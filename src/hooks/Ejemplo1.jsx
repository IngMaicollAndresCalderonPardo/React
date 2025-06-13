// Ejemplo de uso del hook useState
// Crear un componente de tipo funcion y acceder a su estado
// privado a travez del un hooky y ademas, porder modifiarlo


import React,{useState} from 'react';

const Ejemplo1 = () => {

    // valor inicial para un contador
    const valorInicial = 0;
    // valor inicial para una persona
    const personaInicial = {
        nombre: 'Martin',
        email: 'martin@gmail.com'
    }

    // Queremos que el VALORINICIAL y PERSONAINICIAL sean 
    // parte del estado del componente para asi poder gestionar su cambio 
    // y este se vea reflejado en la interfaz del..Ejemplo1
    // const [nomVariable, funcionParaCambiar] = useState(valorInicial);

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial); 

    // Funcion para actualizar el estado privado que contiene el contador
    function incrementarContador() {
        // ? funcionParaCambiar(nuevoValor);
        setContador(contador + 1);
    }
    
    // Funcion para actualizar el estado persona en el componente
    function actualizarPersona() {
        setPersona({
            nombre: 'Maicoll',
            email: 'Maicoll@gmail.com'
        }); 
    }

    return (
        <div>
            <h1>Ejemplo de uso del Hook useState</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la persona:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            {/* Boton para incrementar el contador */}
            <button onClick={incrementarContador}>
                Incrementar contador
            </button>
            {/* Boton para actualizar la persona */}
            <button onClick={actualizarPersona}>
                Actualizar persona
            </button>
            {/* Boton para resetear el contador y la persona */}            
            <button onClick={() => {
                setContador(valorInicial);
                setPersona(personaInicial);
            }}>
                Resetear Contador y Persona 
            </button>
        </div>
    );
}

export default Ejemplo1;


