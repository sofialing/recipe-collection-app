const categories = [
    'breakfast', 'brunch', 'lunch', 'dinner', 'snack', 'appetiser',
]
const AddRecipeModal = ({ recipe, setRecipe, setSubmit }) => {
    const handleChange = e => {
        setRecipe((prevstate) => ({
            ...prevstate,
            [e.target.id]: e.target.value,
        }));
    }
    const onSubmit = e => {
        e.preventDefault();
        setSubmit(true);
    }

    return (
        <section className="text-gray-600 body-font absolute inset-0 bg-gray-100 bg-opacity-90">
            <div className="container px-5 py-24 mx-auto flex">
                <form className="w-full md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto mt-10 md:mt-0 relative z-10 shadow-lg" onSubmit={onSubmit}>
                    <h2 className="text-gray-900 text-lg mb-1 font-medium">Add recipe to collection</h2>
                    <p className="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                    <div className="relative mb-4">
                        <label htmlFor="title" className="leading-7 tracking-widest text-xs title-font font-medium uppercase text-green-500">Title</label>
                        <input type="text" id="title" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={recipe.title} onChange={handleChange} />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="desc" className="leading-7 tracking-widest text-xs title-font font-medium uppercase text-green-500">Description</label>
                        <textarea id="desc" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={recipe.desc} onChange={handleChange} />
                    </div>
                    <div className="relative mb-5">
                        <label htmlFor="category" className="leading-7 tracking-widest text-xs title-font font-medium uppercase text-green-500">Category</label>
                        <select id="category" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" value={recipe.category} onChange={handleChange} required>
                            <option value="">Choose a category</option>
                            {categories.map(category =>
                                <option key={category} value={category}>{category}</option>
                            )};
                        </select>
                    </div>
                    <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Save</button>
                    <p className="text-xs text-gray-500 mt-5">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                </form>
            </div>
        </section>
    )
}

export default AddRecipeModal;
