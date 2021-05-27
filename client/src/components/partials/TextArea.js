import React from 'react'

const TextArea = ({ type, id, value, handleChange, isRequired, autoComplete = "on" }) => {
    return (
        <textarea
            type={type}
            id={id}
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-2 px-3 h-24 resize-none leading-6 transition-colors duration-200 ease-in-out"
            autoComplete={autoComplete}
            value={value}
            required={isRequired}
            onChange={(e) => handleChange(e.target.value)}
        />
    )
}

export default TextArea;
