function TextArea({ type, id, value, handleChange, isRequired, autoComplete = 'on' }) {
    return (
        <textarea
            type={type}
            id={id}
            className="h-24 w-full resize-none rounded border border-gray-300 bg-white py-2 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-emerald-500"
            autoComplete={autoComplete}
            value={value}
            required={isRequired}
            onChange={(e) => handleChange(e.target.value)}
        />
    );
}

export default TextArea;
