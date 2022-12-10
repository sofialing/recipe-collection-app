import image from 'assets/images/login-hero.jpg';
import Form from 'components/forms/CreateAccountForm';
import { useAuth } from 'contexts/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
    const navigate = useNavigate();
    const { createAccount } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onCreateAccount = async (credentials) => {
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
    };

    return (
        <section className="container mx-auto flex grow flex-col-reverse items-center px-5 py-16 md:py-24 lg:flex-row">
            <Form onCreateAccount={onCreateAccount} loading={loading} error={error} />
            <div className="mb-12 lg:mb-0 lg:w-1/2">
                <img
                    className="w-full object-cover"
                    width="640"
                    height="427"
                    alt="hero"
                    src={image}
                />
            </div>
        </section>
    );
}

export default CreateAccount;
