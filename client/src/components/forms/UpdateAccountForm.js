import { useState } from 'react'
import Label from 'components/partials/Label';
import InputField from 'components/partials/InputField';

const UpdateAccountForm = ({ loading, user, notification, onDeleteAccount, onUpdateProfile }) => {
    const [displayName, setDisplayName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');


    const onDelete = e => {
        e.preventDefault();

        window.confirm('Are you sure you wish to delete account?')
            && onDeleteAccount();
    }


    const onSubmit = e => {
        e.preventDefault();

        onUpdateProfile({ displayName, email, password, confirm });
    }

    return (
        <form onSubmit={onSubmit} className="w-full lg:w-2/6 flex flex-col md:mr-auto">
            <h2 className="text-gray-900 text-2xl font-medium mb-5">Update account</h2>
            <div className="mb-4">
                <Label htmlFor="full-name" text="Full Name" required={true} />
                <InputField type="text" id="full-name" value={displayName} isRequired={true} handleChange={setDisplayName} />
            </div>
            <div className="mb-4">
                <Label htmlFor="email" text="Email" required={true} />
                <InputField type="email" id="email" value={email} isRequired={true} handleChange={setEmail} />
            </div>
            <div className="mb-4">
                <Label htmlFor="password" text="Password" required={true} />
                <InputField type="password" id="password" value={password} isRequired={false} handleChange={setPassword} autoComplete="new-password" />
            </div>
            <div className="mb-6">
                <Label htmlFor="confirm" text="Confirm password" required={true} />
                <InputField type="password" id="confirm" value={confirm} isRequired={false} handleChange={setConfirm} autoComplete="new-password" />
            </div>
            <div className="flex">
                <button type="submit" disabled={loading} className="inline-block btn">Update account</button>
                <button disabled={loading} onClick={onDelete} className="inline-block ml-2 btn btn-outline">Delete account</button>
            </div>
            {notification && <p className="text-sm mt-4">{notification}</p>}
        </form>
    )
}

export default UpdateAccountForm;
