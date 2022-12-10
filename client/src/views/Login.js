import image from 'assets/images/login-hero.jpg';
import Form from 'components/forms/LoginForm';
import { useAuth } from 'contexts/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { login } = useAuth();
    const navigate = useNavigate();

    const onLogin = async (email, password) => {
        if (!email.length || !password.length) {
            return setError(
                'Make sure you have entered both a valid email and a password.',
            );
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
    };

    return (
        <section className="container mx-auto flex grow flex-col-reverse items-center px-5 py-16 md:py-24 lg:flex-row">
            <Form onLogin={onLogin} loading={loading} error={error} />
            <div className="mb-12 lg:mb-0 lg:w-1/2">
                <img
                    className="w-full object-cover"
                    width="640"
                    height="427"
                    alt=""
                    src={image}
                />
            </div>
        </section>
    );
}

export default Login;
