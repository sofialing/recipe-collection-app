function ToggleMobileMenu({ toggleMenu, setToggleMenu }) {
    const onToggleMenu = () => {
        setToggleMenu((prevState) => !prevState);
    };
    return (
        <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={toggleMenu}
            onClick={onToggleMenu}
        >
            <span className="sr-only">Open main menu</span>
            {toggleMenu ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="block h-6 w-6"
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
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h8m-8 6h16"
                    />
                </svg>
            )}
        </button>
    );
}

export default ToggleMobileMenu;
