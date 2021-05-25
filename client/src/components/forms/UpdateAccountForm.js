import { useRef } from 'react'

const UpdateAccountForm = ({ loading, user, notification, onDeleteAccount, onUpdateProfile }) => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmRef = useRef();

    const onDelete = e => {
        e.preventDefault();

        window.confirm('Are you sure you wish to delete account?')
            && onDeleteAccount();
    }


    const onSubmit = e => {
        e.preventDefault();
        console.log('update profile');

        onUpdateProfile({
            displayName: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirm: confirmRef.current.value
        });
    }

    return (
        <form onSubmit={onSubmit} className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mr-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium mb-5">Update account</h2>
            <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 tracking-widest text-xs font-medium uppercase text-green-500">Name</label>
                <input type="text" id="full-name" defaultValue={user.displayName} ref={nameRef} className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 tracking-widest text-xs font-medium uppercase text-green-500">Email</label>
                <input type="email" id="email" defaultValue={user.email} ref={emailRef} className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            </div>
            <div className="relative mb-5">
                <label htmlFor="password" className="leading-7 tracking-widest text-xs font-medium uppercase text-green-500">New password</label>
                <input type="password" autoComplete="new-password" id="password" ref={passwordRef} className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-5">
                <label htmlFor="password" className="leading-7 tracking-widest text-xs font-medium uppercase text-green-500">Confirm new password</label>
                <input type="password" autoComplete="new-password" id="password" ref={confirmRef} className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
