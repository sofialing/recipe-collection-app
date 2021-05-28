const Modal = ({ children, showModal, setShowModal }) => {
    return showModal && (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-5 lg:px-24">
                <div className="relative w-full my-6 mx-auto max-w-6xl">
                    <div className="border-0 rounded-lg shadow-lg p-8 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <button aria-label="Close modal" title="Close modal" className="absolute rounded-full z-50 p-2 bg-gray-700 text-white right-4 top-4" onClick={() => setShowModal(prevState => !prevState)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        {children}
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 z-40 bg-gray-100 bg-opacity-90"></div>
        </>
    )
}

export default Modal;
