import React from 'react';
import ReactDOM from 'react-dom';

import Rotas from './routes';

import { AuthProvider } from './services/context'

ReactDOM.render(
  <AuthProvider>
    <React.StrictMode>
      <Rotas />
    </React.StrictMode>
  </AuthProvider>,
    document.getElementById('root')
);

