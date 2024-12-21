import React, { createContext } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const info= {
        theme: "dark"
    }
    return (
        <div>
           <AuthContext.Provider value={info}>
            {children}
            </AuthContext.Provider>  
        </div>
    );
};

export default AuthProvider;