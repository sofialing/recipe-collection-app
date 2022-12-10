import { auth } from 'database';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

function AuthContextProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const createAccount = ({ name, email, password }) =>
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => user.updateProfile({ displayName: name }));

    const deleteAccount = () => user.delete();

    const login = (email, password) => auth.signInWithEmailAndPassword(email, password);

    const logout = () => auth.signOut();

    const resetPassword = (email) => auth.sendPasswordResetEmail(email);

    const updateEmail = (email) => user.updateEmail(email);

    const updateProfile = (displayName) => user.updateProfile({ displayName });

    const updatePhoto = (photoURL) => user.updateProfile({ photoURL });

    const updatePassword = (newPassword) => user.updatePassword(newPassword);

    const contextValues = {
        createAccount,
        deleteAccount,
        loading,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        updatePhoto,
        updateProfile,
        user,
    };

    return <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthContextProvider as default, useAuth };
