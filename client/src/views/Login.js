import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';
import image from 'assets/images/login-hero.jpg';
import Form from 'components/forms/LoginForm';

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
        <section className="container mx-auto flex-grow flex flex-col-reverse lg:flex-row items-center px-5 py-16 md:py-24">
            <Form onLogin={onLogin} loading={loading} error={error} />
            <div className="mb-12 lg:mb-0 lg:w-1/2">
                <img className="object-cover object-center" alt="hero" src={image} />
            </div>
        </section>
    )
}

export default Login;
