import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

const Logout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return '';
}

export default Logout
