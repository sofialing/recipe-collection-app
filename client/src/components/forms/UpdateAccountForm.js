import InputField from 'components/partials/InputField';
import Label from 'components/partials/Label';
import { useState } from 'react';

function UpdateAccountForm({
    loading,
    user,
    notification,
    onDeleteAccount,
    onUpdateProfile,
}) {
    const [displayName, setDisplayName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [photo, setPhoto] = useState('');

    const onDelete = (e) => {
        e.preventDefault();

        window.confirm('Are you sure you wish to delete account?') && onDeleteAccount();
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onUpdateProfile({
            displayName,
            email,
            password,
            confirm,
            photo,
        });
    };

    return (
        <form onSubmit={onSubmit} className="flex w-full flex-col md:mr-auto lg:w-2/6">
            <h2 className="mb-5 text-2xl font-medium text-gray-900">Update profile</h2>
            <div className="mb-4 flex">
                <div className="mr-4 w-1/2">
                    <Label htmlFor="full-name" text="Name" required />
                    <InputField
                        type="text"
                        id="full-name"
                        value={displayName}
                        isRequired
                        handleChange={setDisplayName}
                    />
                </div>
                <div className="w-1/2">
                    <Label htmlFor="email" text="Email" required />
                    <InputField
                        type="email"
                        id="email"
                        value={email}
                        isRequired
                        handleChange={setEmail}
                    />
                </div>
            </div>
            <div className="mb-4 flex">
                <div className="mr-4 w-1/2">
                    <Label htmlFor="password" text="Password" required={false} />
                    <InputField
                        type="password"
                        id="password"
                        value={password}
                        isRequired={false}
                        handleChange={setPassword}
                        autoComplete="new-password"
                    />
                </div>
                <div className="w-1/2">
                    <Label htmlFor="confirm" text="Confirm password" required={false} />
                    <InputField
                        type="password"
                        id="confirm"
                        value={confirm}
                        isRequired={false}
                        handleChange={setConfirm}
                        autoComplete="new-password"
                    />
                </div>
            </div>
            <div className="mb-6">
                <span className="mb-1 inline-block text-xs font-medium uppercase leading-7 tracking-widest text-emerald-500">
                    Profile photo
                </span>
                <div className="mt-1 flex items-center">
                    <span className="mr-4 inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                        {user.photoURL ? (
                            <img
                                src={user.photoURL}
                                className="h-12 w-12 object-cover"
                                alt=""
                                width="48"
                                height="48"
                            />
                        ) : (
                            <svg
                                className="h-full w-full text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        )}
                    </span>
                    <div className="flex grow justify-center rounded-md border border-dashed border-gray-300 p-4">
                        <div className="space-y-1 text-center">
                            <div className="flex text-sm">
                                <label
                                    htmlFor="image"
                                    className="relative cursor-pointer rounded-md bg-white font-medium text-emerald-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-green-500 focus-within:ring-offset-2 hover:text-emerald-500"
                                >
                                    <span>Upload a photo</span>
                                    <input
                                        id="image"
                                        type="file"
                                        accept="image/png, image/jpeg"
                                        className="sr-only"
                                        onChange={(e) => setPhoto(e.target.files[0])}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <button type="submit" disabled={loading} className="btn inline-block">
                    Update account
                </button>
                <button
                    disabled={loading}
                    onClick={onDelete}
                    className="btn danger mt-4 inline-block outline md:mt-0 md:ml-4"
                >
                    Delete account
                </button>
            </div>
            {notification && <p className="mt-4 text-sm">{notification}</p>}
        </form>
    );
}

export default UpdateAccountForm;
