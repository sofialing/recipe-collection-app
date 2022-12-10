import { Navigate } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) return null;

    return user ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;
