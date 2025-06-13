/**
 * Life Cycle Example Component
 * This component demonstrates the use of lifecycle methods in a React class component.
 */
import React, { Component } from 'react'

class lifeCycleExample extends Component {

    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: Cuando se instancia el componente');
    }

    componentWillMount() {
            console.log('WILLMOUNT: Antes de que el componente se monte');
    }   

    componentDidMount() {
        console.log('DIDMOUNT: justo después de que el componente se haya montado,antes de que se renderice');
        // You can perform side effects here, such as fetching data or setting up subscriptions
    }

    componentWillReceiveProps(nextProps) {
        console.log('WILLRECEIVEPROPS: Cuando el componente recibe nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('SHOULDCOMPONENTUPDATE: Determina si el componente debe actualizarse');
        // Return true to allow the update, false to prevent it
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WILLUPDATE: Antes de que el componente se actualice');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DIDUPDATE: Después de que el componente se haya actualizado');
    }

    componentWillUnmount() {
        console.log('WILLUNMOUNT: Antes de que el componente se desmonte');
        // Clean up any subscriptions or timers here
    }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

