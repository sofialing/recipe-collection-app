import { useState } from 'react'
import { Link } from 'react-router-dom';
import InputField from 'components/partials/InputField';
import Label from 'components/partials/Label';

const CreateAccountForm = ({ onCreateAccount, loading, error }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        onCreateAccount({ name, email, password, confirm });
    }

    return (
        <form onSubmit={onSubmit} className="w-full lg:w-2/6 flex flex-col md:mr-auto">
            <h2 className="text-gray-900 text-2xl font-medium mb-5">Sign up for free</h2>
            <div className="mb-4">
                <Label htmlFor="full-name" text="Full Name" required={true} />
                <InputField type="text" id="full-name" value={name} isRequired={true} handleChange={setName} />
            </div>
            <div className="mb-4">
                <Label htmlFor="email" text="Email" required={true} />
                <InputField type="email" id="email" value={email} isRequired={true} handleChange={setEmail} />
            </div>
            <div className="mb-4">
                <Label htmlFor="password" text="Password" required={true} />
                <InputField type="password" id="password" value={password} isRequired={true} handleChange={setPassword} autoComplete="new-password" />
            </div>
            <div className="mb-6">
                <Label htmlFor="confirm" text="Confirm password" required={true} />
                <InputField type="password" id="confirm" value={confirm} isRequired={true} handleChange={setConfirm} autoComplete="new-password" />
            </div>
            <div>
                <button type="submit" disabled={loading} className="btn inline-block">Create free account</button>
            </div>
            <p className="text-base md:text-sm tracking-wide mt-6">Already have an account? <Link className="hover:underline text-green-500" to="/login">Log in</Link>.</p>
            {error && <p className="text-sm text-red-500 mt-3">{error}</p>}
        </form>
    )
}

export default CreateAccountForm;
