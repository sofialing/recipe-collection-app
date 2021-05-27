import React from 'react'

const Label = ({ text, htmlFor, required = false }) => {
    return (
        <label className="leading-7 inline-block tracking-widest text-xs font-medium uppercase text-green-500 mb-1" htmlFor={htmlFor}>
            {text}
            {required && <sup className="text-red-500" title="Required">*</sup>}
        </label>
    )
}

export default Label
