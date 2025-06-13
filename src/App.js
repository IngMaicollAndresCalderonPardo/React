import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo4 from './hooks/Ejemplo4';
// import Greetingstyled from './components/pure/greetingStyled';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Componente de ejemplo funcional de saludo */}
        {/* <Greeting name="Andres"></Greeting> */}
        {/* <GreetingF name="Maicoll"></GreetingF> */}
        
        {/* Componente de Listado de tareas */}
        <TaskListComponent></TaskListComponent>
        
        {/* Ejemplo de uso del HOOKS useState */}
        {/* <Ejemplo1></Ejemplo1> */}
        
        {/* Ejemplo de uso del HOOKS useState,useReef,useuseEffect */}
        {/* <Ejemplo2></Ejemplo2>} */}
        
        {/* Ejemplo de componente con contexto */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}

        {/* Todo lo que hay aqui, es tratatado como props.children */}
        {/* <Ejemplo4 nombre='Martin'>
        <h3>Contenido del props.children</h3>
        </Ejemplo4> */}

        {/* Componente de saludo estilizado */}  
        {/* <Greetingstyled name="Maicoll" ></Greetingstyled> */}
      </header>

    </div>
  );
}

export default App;
