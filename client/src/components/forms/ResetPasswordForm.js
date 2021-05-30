import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Label from 'components/partials/Label';
import InputField from 'components/partials/InputField';

const ResetPassword = ({ onResetPassword, loading, notification, setNotification }) => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();


    const onSubmit = e => {
        e.preventDefault();

        if (!email.length) {
            return;
        }

        onResetPassword(email);
    }

    return (
        <form onSubmit={onSubmit} className="w-full lg:w-2/6 flex flex-col md:mr-auto">
            <h2 className="text-gray-900 text-2xl font-medium mb-1">Reset Password</h2>
            <p className="mb-5">Enter your email address below and we'll send you a link to reset your password.</p>
            <div className="mb-6">
                <Label htmlFor="email" text="Email" />
                <InputField type="email" id="email" value={email} handleChange={setEmail} isRequired={true} />
            </div>
            <div>
                <button type="submit" disabled={loading} className="btn inline-block">Reset</button>
                <button type="button" disabled={loading} className="btn ml-4 btn-outline inline-block" onClick={() => navigate(-1)}>Cancel</button>
            </div>
            {notification && (
                <div className="bg-gray-100 border mt-6 border-gray-400 text-gray-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block text-sm">{notification}</span>
                </div>
            )}
        </form>
    )
}

export default ResetPassword;
