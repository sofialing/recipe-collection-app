function InputDate({ id, value, handleChange, isRequired = false }) {
    return (
        <input
            type="date"
            id={id}
            value={value}
            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-emerald-500"
            onChange={(e) => handleChange(e.target.value)}
            required={isRequired}
        />
    );
}

export default InputDate;
