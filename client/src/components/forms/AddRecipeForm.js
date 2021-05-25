import { useState } from 'react';
import axios from 'axios';

const AddRecipeForm = ({ setRecipe, loading }) => {
    const [url, setUrl] = useState('');

    const handleInput = async e => {
        setUrl(e.target.value);
    }

    const onSubmit = async e => {
        e.preventDefault();

        if (!url.length) {
            return;
        }

        try {
            const response = await axios(`/api?url=${url}`);
            if (response.status === 200) {
                setRecipe((prevState => ({
                    ...prevState,
                    title: response.data.ogTitle ? response.data.ogTitle : '',
                    desc: response.data.ogDescription ? response.data.ogDescription : '',
                    image: response.data.ogImage ? response.data.ogImage.url : '',
                    url: url,
                })))
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={onSubmit} className="w-full">
            <div className="relative">
                <label htmlFor="url" className="leading-7 tracking-widest text-xs title-font font-medium uppercase text-green-500">Recipe Link</label>
                <input type="url" id="url" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required value={url} onChange={handleInput} />
            </div>
            <button className="inline-block mt-6 btn">Next</button>
        </form>
    )
}

export default AddRecipeForm;
