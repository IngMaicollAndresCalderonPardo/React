import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
    constructor(props) {
        super(props);
        // state
        this.state = {
            age: 29,
        };
    }
    
    render() {
        return (
            <div>
                <h1>¡Hi World I'm a Component! {this.props.name}</h1>
                <h2>Tu edad es:  {this.state.age}</h2>
                {/* // Button to update the state and call birthday */}
                 <div>
                    <button onClick={this.birthday}>
                    Cumpleaños
                    </button> 
                </div>
            </div>
        );
    }

    birthday = () => {
        // Update the state, prevstate is used to get the current state
        // and then increment the age by 1
        this.setState((prevState) => ({
            age: prevState.age + 1,
        }));
    }
}


Greeting.propTypes = {
    name: PropTypes.string.isRequired,
};


export default Greeting;
