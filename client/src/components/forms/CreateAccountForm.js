import InputField from 'components/partials/InputField';
import Label from 'components/partials/Label';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CreateAccountForm({ onCreateAccount, loading, error }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateAccount({
            name,
            email,
            password,
            confirm,
        });
    };

    return (
        <form onSubmit={onSubmit} className="flex w-full flex-col md:mr-auto lg:w-2/6">
            <h2 className="mb-5 text-2xl font-medium text-gray-900">Sign up for free</h2>
            <div className="mb-4">
                <Label htmlFor="full-name" text="Full Name" required />
                <InputField
                    type="text"
                    id="full-name"
                    value={name}
                    isRequired
                    handleChange={setName}
                />
            </div>
            <div className="mb-4">
                <Label htmlFor="email" text="Email" required />
                <InputField
                    type="email"
                    id="email"
                    value={email}
                    isRequired
                    handleChange={setEmail}
                />
            </div>
            <div className="mb-4">
                <Label htmlFor="password" text="Password" required />
                <InputField
                    type="password"
                    id="password"
                    value={password}
                    isRequired
                    handleChange={setPassword}
                    autoComplete="new-password"
                />
            </div>
            <div className="mb-6">
                <Label htmlFor="confirm" text="Confirm password" required />
                <InputField
                    type="password"
                    id="confirm"
                    value={confirm}
                    isRequired
                    handleChange={setConfirm}
                    autoComplete="new-password"
                />
            </div>
            <div>
                <button type="submit" disabled={loading} className="btn inline-block">
                    Create free account
                </button>
            </div>
            <p className="mt-6 text-base tracking-wide md:text-sm">
                Already have an account?{' '}
                <Link className="hover:underline " to="/login">
                    Log in
                </Link>
            </p>
            {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
        </form>
    );
}

export default CreateAccountForm;
