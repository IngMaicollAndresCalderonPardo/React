import React from 'react';
import ReactDOM from 'react-dom/client';

// Añadimos Bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// ¡Importante! Los estilos propios deben ir después del Bootstrap para que no los sobrescriba
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

// Crear el root con React 18/19
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Medición de rendimiento (opcional)
reportWebVitals();
