function Spinner() {
    return (
        <div className="flex w-full flex-col text-center">
            <div
                className="spinner mx-auto"
                role="status"
                aria-label="Page is loading, do not refresh"
            >
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
}

export default Spinner;
