import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';
import Form from 'components/forms/CreateAccountForm';
import image from 'assets/images/login-hero.jpg';

const CreateAccount = () => {
    const navigate = useNavigate();
    const { createAccount } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onCreateAccount = async credentials => {
        if (credentials.password !== credentials.confirm) {
            return setError('Passwords do not match, please try again.');
        }

        setError(null);

        try {
            setLoading(true);
            await createAccount(credentials);
            navigate('/recipes');
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }

    return (
        <section className="container mx-auto flex-grow flex flex-col-reverse lg:flex-row items-center px-5 py-16 md:py-24">
            <Form onCreateAccount={onCreateAccount} loading={loading} error={error} />
            <div className="mb-12 lg:mb-0 lg:w-1/2">
                <img className="object-cover object-center" alt="hero" src={image} />
            </div>
        </section>
    )
}

export default CreateAccount;