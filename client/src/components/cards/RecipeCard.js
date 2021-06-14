import { Link } from 'react-router-dom';
import noImg from 'assets/images/image-missing.jpg';

const RecipeCard = ({ recipe, setShowDateModal, setSelectedRecipe }) => {
    const onClick = () => {
        setSelectedRecipe(recipe);
        setShowDateModal(true);
    }

    return (
        <div className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="h-full flex flex-col border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <img className="h-60 w-full object-cover object-center" src={recipe.image ? recipe.image : noImg} alt={recipe.title} />
                <div className="p-6 flex-grow flex flex-col">
                    <h3 className="tracking-widest text-xs font-medium uppercase text-gray-400 mb-1">
                        {recipe.recipeType}
                        {recipe.cuisineType.length ? ` · ${recipe.cuisineType}` : ''}
                    </h3>
                    <h2 className="text-lg font-medium text-gray-900 flex-grow">{recipe.title}</h2>
                    <div className="flex items-center flex-wrap mt-6">
                        <Link to={recipe.slug} className="btn btn-outline btn-sm flex items-center">View recipe
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <button onClick={onClick} className="text-gray-400 ml-auto hover:text-green-500 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" title="Add to meal planner" aria-label="Add to meal plan">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </button>
                        {/* <button className="text-gray-400 ml-auto hover:text-red-500 focus:outline-none" title="Add to favorites" aria-label="Add to favorites">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        <button className="text-gray-400 ml-4 hover:text-red-500 focus:outline-none" title="Delete recipe" aria-label="Delete recipe">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;
