const InputDate = ({ id, value, handleChange }) => {
    return (
        <input
            type="date"
            id={id}
            value={value}
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => handleChange(e.target.value)}
        />
    )
}

export default InputDate;
