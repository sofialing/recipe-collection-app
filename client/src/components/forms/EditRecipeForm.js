import { useState } from 'react';
import { updateRecipe } from 'services/firebase';

const categories = [
    'breakfast', 'brunch', 'lunch', 'dinner', 'snack', 'appetiser',
]

const EditRecipeForm = ({ recipe, setShowModal }) => {
    const [updatedRecipe, setUpdatedRecipe] = useState(recipe);

    const handleChange = e => {
        setUpdatedRecipe((prevstate) => ({
            ...prevstate,
            [e.target.id]: e.target.value,
        }));
    }

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await updateRecipe(recipe.id, updatedRecipe);
            setShowModal(false);
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    }

    return (
        <div className="flex flex-col md:flex-row-reverse">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <img className="object-cover object-center" alt={recipe.title} src={recipe.image} />
            </div>
            <form className="w-full md:w-1/2 lg:flex-grow md:pr-16" onSubmit={onSubmit}>
                <h2 className="text-gray-900 text-xl mb-4 font-medium">Edit recipe</h2>
                <div className="relative mb-4">
                    <label htmlFor="title" className="leading-7 tracking-widest text-xs font-medium uppercase text-green-500">Title</label>
                    <input type="text" id="title" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={updatedRecipe.title} onChange={handleChange} />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="desc" className="leading-7 tracking-widest text-xs font-medium uppercase text-green-500">Description</label>
                    <textarea id="desc" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={updatedRecipe.desc} onChange={handleChange} />
                </div>
                <div className="relative mb-5">
                    <label htmlFor="category" className="leading-7 tracking-widest text-xs font-medium uppercase text-green-500">Category</label>
                    <select id="category" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" value={recipe.category} onChange={handleChange} required>
                        <option value="">Choose a category</option>
                        {categories.map(category =>
                            <option key={category} value={category}>{category}</option>
                        )};
                        </select>
                </div>
                <div className="mt-6">
                    <button type="submit" className="btn mr-4">Save updates</button>
                    <button type="button" onClick={() => setShowModal(false)} className="inline-block btn btn-outline">Back</button>
                </div>
            </form>
        </div>
    )
}

export default EditRecipeForm;
