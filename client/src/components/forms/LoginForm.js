import InputField from 'components/partials/InputField';
import Label from 'components/partials/Label';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const LoginForm = ({ onLogin, loading, error }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        onLogin(email, password);
    }

    return (
        <form onSubmit={onSubmit} className="w-full lg:w-2/6 flex flex-col md:mr-auto">
            <h2 className="text-gray-900 text-2xl font-medium mb-5">Log in to your account</h2>
            <div className="mb-4">
                <Label htmlFor="email" text="Email" />
                <InputField type="email" id="email" value={email} handleChange={setEmail} isRequired={true} />
            </div>
            <div className="mb-6">
                <Label htmlFor="password" text="Password" />
                <InputField type="password" id="password" value={password} handleChange={setPassword} isRequired={true} />
            </div>
            <div>
                <button type="submit" disabled={loading} className="btn inline-block">Log in</button>
            </div>
            <p className="text-sm tracking-wide mt-5">New to Recipebox? <Link className="hover:underline" to="/create-account">Sign up</Link>.</p>
            {error && <p className="text-xs text-red-500 mt-3">{error}</p>}
        </form>
    )
}

export default LoginForm;
