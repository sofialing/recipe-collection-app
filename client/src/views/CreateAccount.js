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
        <section className="container px-5 py-24 mx-auto flex flex-grow flex-wrap items-center">
            <Form onCreateAccount={onCreateAccount} loading={loading} error={error} />
            <div className="md:w-1/2 w-5/6">
                <img className="object-cover object-center" alt="hero" src={image} />
            </div>
        </section>
    )
}

export default CreateAccount;