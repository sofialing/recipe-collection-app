const InputSelect = ({ options, value, id, onChange, defaultValue = "", isRequired = false }) => {
    return (
        <div className="relative">
            <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded tracking-wide leading-tight focus:outline-none  focus:border-green-500" id={id} value={value} onChange={(e) => onChange(e.target.value)} required={isRequired}>
                <option value="">{defaultValue}</option>
                {options.map(item => <option key={item.value} value={item.option}>{item.option}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
        </div>
    )
}

export default InputSelect;
