import InputField from 'components/partials/InputField';
import Label from 'components/partials/Label';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm({ onLogin, loading, error }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        onLogin(email, password);
    };

    return (
        <form onSubmit={onSubmit} className="flex w-full flex-col md:mr-auto lg:w-2/6">
            <h2 className="mb-5 text-2xl font-medium text-gray-900">
                Log in to your account
            </h2>
            <div className="mb-4">
                <Label htmlFor="email" text="Email" />
                <InputField
                    type="email"
                    id="email"
                    value={email}
                    handleChange={setEmail}
                    isRequired
                />
            </div>
            <div className="mb-6">
                <Label htmlFor="password" text="Password" />
                <InputField
                    type="password"
                    id="password"
                    value={password}
                    handleChange={setPassword}
                    isRequired
                />
            </div>
            <div className="flex items-center">
                <button type="submit" disabled={loading} className="btn inline-block">
                    Log in
                </button>
                <Link
                    to="/reset-password"
                    className="ml-auto text-base tracking-wide hover:underline md:text-sm"
                >
                    Forgot your password?
                </Link>
            </div>
            <p className="mt-6 text-base tracking-wide md:text-sm">
                New to Recipebox?{' '}
                <Link className="hover:underline" to="/create-account">
                    Sign up
                </Link>
            </p>
            {error && <p className="mt-3 text-xs text-red-500">{error}</p>}
        </form>
    );
}

export default LoginForm;
