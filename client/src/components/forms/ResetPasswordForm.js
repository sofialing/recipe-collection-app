import InputField from 'components/partials/InputField';
import Label from 'components/partials/Label';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword({ onResetPassword, loading, notification }) {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        if (!email.length) {
            return;
        }

        onResetPassword(email);
    };

    return (
        <form onSubmit={onSubmit} className="flex w-full flex-col md:mr-auto lg:w-2/6">
            <h2 className="mb-1 text-2xl font-medium text-gray-900">Reset Password</h2>
            <p className="mb-5">
                Enter your email address below and we&apos;ll send you a link to reset
                your password.
            </p>
            <div className="mb-6">
                <Label htmlFor="email" text="Email" />
                <InputField
                    type="email"
                    id="email"
                    value={email}
                    handleChange={setEmail}
                    isRequired
                />
            </div>
            <div>
                <button type="submit" disabled={loading} className="btn inline-block">
                    Reset
                </button>
                <button
                    type="button"
                    disabled={loading}
                    className="btn btn-outline ml-4 inline-block"
                    onClick={() => navigate(-1)}
                >
                    Cancel
                </button>
            </div>
            {notification && (
                <div
                    className="relative mt-6 rounded border border-gray-400 bg-gray-100 px-4 py-3 text-gray-700"
                    role="alert"
                >
                    <span className="block text-sm">{notification}</span>
                </div>
            )}
        </form>
    );
}

export default ResetPassword;
