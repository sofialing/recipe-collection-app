function Label({ text, htmlFor, required = false }) {
    return (
        <label
            className="mb-1 block text-xs font-medium uppercase leading-7 tracking-widest text-emerald-500"
            htmlFor={htmlFor}
        >
            {text}
            {required && (
                <sup className="text-red-500" title="Required">
                    *
                </sup>
            )}
        </label>
    );
}

export default Label;
