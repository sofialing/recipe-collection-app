import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = props => {
    const { user, loading } = useAuth();
    if (loading) return '';
    return user ? <Route {...props} /> : <Navigate to='/' />;
}

export default ProtectedRoute;
