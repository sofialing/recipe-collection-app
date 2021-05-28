import { useState } from 'react'
import Label from 'components/partials/Label';
import InputField from 'components/partials/InputField';

const UpdateAccountForm = ({ loading, user, notification, onDeleteAccount, onUpdateProfile }) => {
    const [displayName, setDisplayName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [photo, setPhoto] = useState('');


    const onDelete = e => {
        e.preventDefault();

        window.confirm('Are you sure you wish to delete account?')
            && onDeleteAccount();
    }


    const onSubmit = e => {
        e.preventDefault();

        onUpdateProfile({ displayName, email, password, confirm, photo });
    }

    return (
        <form onSubmit={onSubmit} className="w-full lg:w-2/6 flex flex-col md:mr-auto">
            <h2 className="text-gray-900 text-2xl font-medium mb-5">Update profile</h2>
            <div className="mb-4 flex">
                <div className="w-1/2 mr-4">
                    <Label htmlFor="full-name" text="Full Name" required={true} />
                    <InputField type="text" id="full-name" value={displayName} isRequired={true} handleChange={setDisplayName} />
                </div>
                <div className="w-1/2">
                    <Label htmlFor="email" text="Email" required={true} />
                    <InputField type="email" id="email" value={email} isRequired={true} handleChange={setEmail} />
                </div>
            </div>
            <div className="mb-4 flex">
                <div className="w-1/2 mr-4">
                    <Label htmlFor="password" text="Password" required={false} />
                    <InputField type="password" id="password" value={password} isRequired={false} handleChange={setPassword} autoComplete="new-password" />
                </div>
                <div className="w-1/2">
                    <Label htmlFor="confirm" text="Confirm password" required={false} />
                    <InputField type="password" id="confirm" value={confirm} isRequired={false} handleChange={setConfirm} autoComplete="new-password" />
                </div>
            </div>
            <div className="mb-6">
                <span className="leading-7 inline-block tracking-widest text-xs font-medium uppercase text-green-500 mb-1">Profile photo</span>
                <div className="mt-1 flex items-center">
                    <span className="inline-block h-12 w-12 mr-4 rounded-full overflow-hidden bg-gray-100">
                        {user.photoURL ? (
                            <img src={user.photoURL} alt="" width="48" height="48" />
                        ) : (
                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        )}
                    </span>
                    <div className="flex flex-grow justify-center p-4 border border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <div className="flex text-sm">
                                <label htmlFor="image" className="relative cursor-pointer bg-white rounded-md font-medium text-green-500 hover:text-green-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-green-500">
                                    <span>Upload a photo</span>
                                    <input id="image" type="file" accept="image/png, image/jpeg" className="sr-only" onChange={(e) => setPhoto(e.target.files[0])} />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <button type="submit" disabled={loading} className="inline-block btn">Update account</button>
                <button disabled={loading} onClick={onDelete} className="inline-block ml-4 btn btn-outline">Delete account</button>
            </div>
            {notification && <p className="text-sm mt-4">{notification}</p>}
        </form>
    )
}

export default UpdateAccountForm;
