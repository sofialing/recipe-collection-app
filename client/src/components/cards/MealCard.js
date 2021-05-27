import moment from 'moment';
import noImg from 'assets/images/image-missing.jpg';

const MealCard = ({ recipe, onRemoveRecipe }) => {
    const date = moment(recipe.date).calendar({
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd, MMMM Do',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'dddd, MMMM Do'
    })

    return (
        <div className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="h-full flex flex-col border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <img className="h-60 w-full object-cover object-center" src={recipe.image ? recipe.image : noImg} alt={recipe.title} />
                <div className="p-6 flex-grow flex flex-col">
                    <h3 className="tracking-widest text-xs font-medium uppercase text-gray-400 mb-1">{date}</h3>
                    <h2 className="text-lg font-medium text-gray-900 flex-grow">{recipe.title}</h2>
                    <div className="flex items-center justify-between flex-wrap mt-6">
                        <a href={recipe.url} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm flex items-center">View recipe
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <button onClick={() => onRemoveRecipe(recipe.id)} className="text-gray-400 hover:text-red-500" title="Remove from meal plan" aria-label="Remove from meal plan">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MealCard;
