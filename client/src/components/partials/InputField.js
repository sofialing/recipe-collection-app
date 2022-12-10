function InputField({
    type,
    id,
    value,
    handleChange,
    isRequired,
    autoComplete = 'on',
    placeholder = '',
}) {
    return (
        <input
            type={type}
            id={id}
            className="w-full rounded border border-gray-300 bg-white py-1  px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-emerald-500"
            autoComplete={autoComplete}
            value={value}
            required={isRequired}
            onChange={(e) => handleChange(e.target.value)}
            placeholder={placeholder}
        />
    );
}

export default InputField;
