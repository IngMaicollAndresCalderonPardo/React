/**
 * Componenente que va tener un formulario para autenticar usuarios
 * @returns Formulario de login
 */

import React,{useState} from 'react';

const LoginForm = () => {
    
    const initialCredentials = {
        user: '',
        password: ''
    };

    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>
            <h1>Login Form</h1>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
