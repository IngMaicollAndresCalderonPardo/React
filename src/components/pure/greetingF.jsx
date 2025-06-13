import React,{useState} from 'react';
import PropTypes from 'prop-types';
// Functional component
// This component is a functional component that receives props and returns JSX
const GreetingF = (props) => {
    //Breve introduction to useState
    const [age, setAge] = useState(29);

    const birthday = () => {
        // Update the state, prevState is used to get the current state
        // and then increment the age by 1
        setAge(age + 1);
    }

    return (
        <div>
            <h1>¡Hi {props.name} desde componente funcional !</h1>
            <h2>Tu edad es: {age}</h2>
            {/* // Button to update the state and call birthday */}
                <div>
                <button onClick={birthday}>
                Cumpleaños
                </button> 
            </div>
        </div>
    );
};

GreetingF.propTypes = {
  name: PropTypes.string,
};


export default GreetingF;
