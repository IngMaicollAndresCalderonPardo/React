/** 
 * Ejemplo HOOKS:
 * - useState()
 * - useContext()
 */

import React,{useState,useContext} from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

// Inicializamos un estado vacio que va a rellenarse con los
// datos del contexto del padre
const miContexto = React.createContext(null);


const Componente1 = () => {
    const state = React.useContext(miContexto);
    return (
        <div>
            <h1>El token es: {state.token} </h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>  
    );
}


const Componente2 = () => {
    
    const state = React.useContext(miContexto);

    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto() {

    const estadoInicial = {
        token:'1234567',
        sesion: 1
    }

    // creamas el estado de este componente 
    const [sessionData,setSessionData] = useState(estadoInicial)

    function actualizarSesion(){
        setSessionData(
            {
                token:'JWT123456789',
                sesion: sessionData.sesion +1
            }
        )
    }

    return (
        <div>
        <miContexto.Provider value={sessionData}> 
        {/* Todo lo que esta aqui esta adentro puede leer los datos de sessionData */}
        {/* Ademas,si se actualiza,los componentes de aqui, tambien lo actualizan */}
        <h1>******Ejemplo de useState() y useContext()*******</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar Sesión</button>
        </miContexto.Provider>
        </div> 
    );
}         
