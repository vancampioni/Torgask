import React, { createContext, useState } from 'react';
import api from '../services/api'

import routes from '../routes';

const Context = createContext();

function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);

    async function handleLogin() {
        const { data: { token } } = await api.post('/authenticate');

        localStorage.setItem('token', JSON.stringify(token));
        api.defaults.headers.authorization = `x-access-token ${token}`;
        routes.push('/home')
        setAuthenticated(true);
    }

    return (
        <Context.Provider value={{ authenticated, handleLogin }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider }