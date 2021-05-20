import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase'
const AuthContext = createContext();

const useAuth = () => {
    return useContext(AuthContext);
}

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        })
        return unsubscribe;
    }, [])

    const createAccount = ({ name, email, password }) => {
        return auth.createUserWithEmailAndPassword(email, password).then(({ user }) => user.updateProfile({ displayName: name }))
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logout = () => {
        return auth.signOut();
    }

    const contextValues = {
        user,
        createAccount,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )
}

export { useAuth, AuthContext, AuthContextProvider as default };