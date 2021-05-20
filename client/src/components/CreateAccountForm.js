import { useRef } from 'react'
import { Link } from 'react-router-dom';

const CreateAccountForm = ({ onCreateAccount, loading, error }) => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const onSubmit = e => {
        e.preventDefault();

        onCreateAccount({
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        });
    }

    return (
        <form onSubmit={onSubmit} className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mr-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Create account</h2>
            <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 tracking-widest text-xs title-font font-medium uppercase text-green-500">Full Name</label>
                <input type="text" id="full-name" ref={nameRef} className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 tracking-widest text-xs title-font font-medium uppercase text-green-500">Email</label>
                <input type="email" id="email" ref={emailRef} className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            </div>
            <div className="relative mb-5">
                <label htmlFor="password" className="leading-7 tracking-widest text-xs title-font font-medium uppercase text-green-500">Password</label>
                <input type="password" id="password" ref={passwordRef} className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            </div>
            <button type="submit" disabled={loading} className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded-lg text-lg">Sign up</button>
            <p className="text-xs text-gray-500 mt-5">Already have an account? <Link className="underline" to="/login">Log in</Link>.</p>
            {error && <p className="text-xs text-red-500 mt-3">{error}</p>}
        </form>
    )
}

export default CreateAccountForm;
