function Modal({ children, showModal, setShowModal }) {
    return (
        showModal && (
            <>
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden px-5 outline-none focus:outline-none lg:px-24">
                    <div className="relative my-6 mx-auto w-full max-w-6xl">
                        <div className="relative flex w-full flex-col rounded-lg border-0 bg-white p-8 shadow-lg outline-none focus:outline-none">
                            <button
                                aria-label="Close modal"
                                title="Close modal"
                                className="absolute right-4 top-4 z-50 rounded-full bg-gray-700 p-2 text-white"
                                onClick={() => setShowModal((prevState) => !prevState)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            {children}
                        </div>
                    </div>
                </div>
                <div className="fixed inset-0 z-40 bg-gray-100/90" />
            </>
        )
    );
}

export default Modal;
