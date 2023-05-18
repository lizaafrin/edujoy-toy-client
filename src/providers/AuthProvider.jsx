import React from 'react';
import { createContext } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    return (
        <div>
            <AuthContext.Provider value={AuthContext}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;