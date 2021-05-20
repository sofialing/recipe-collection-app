import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import image from '../assets/images/login-hero.jpg';
import Form from '../components/LoginForm';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { login } = useAuth();
    const navigate = useNavigate();

    const onLogin = async (email, password) => {
        if (!email.length || !password.length) {
            return setError('Make sure you have entered both a valid email and a password.');
        }

        setError(null);
        setLoading(true);

        try {
            await login(email, password);
            navigate('/recipes');
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }

    }

    return (
        <section className="container px-5 py-24 mx-auto flex flex-grow flex-wrap items-center">
            <Form onLogin={onLogin} loading={loading} error={error} />
            <div className="md:w-1/2 w-5/6">
                <img className="object-cover object-center" alt="hero" src={image} />
            </div>
        </section>
    )
}

export default Login;
