import { useState } from 'react';
import axios from 'axios';

const AddRecipeLink = ({ setRecipe, loading }) => {
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
        <form onSubmit={onSubmit} className="flex flex-wrap	w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 md:w-full lg:w-full xl:w-2/3 w-2/4">
                <label htmlFor="url" className="leading-7 tracking-widest text-xs title-font font-medium uppercase text-green-500">Recipe Link</label>
                <input type="url" id="url" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required onChange={handleInput} />
            </div>
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Add recipe</button>
        </form>
    )
}

export default AddRecipeLink
