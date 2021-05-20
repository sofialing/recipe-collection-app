import { Link } from 'react-router-dom';
const Card = ({ recipe }) => {
    return (
        <div className="p-4 md:w-1/4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-60 md:h-36 w-full object-cover object-center" src={recipe.image} alt="recipe" />
                <div className="p-6">
                    <h3 className="tracking-widest text-xs title-font font-medium uppercase text-gray-400 mb-1">{recipe.category}</h3>
                    <h2 className="title-font text-lg font-medium text-gray-900 mb-3">{recipe.title}</h2>
                    <div className="flex items-center flex-wrap ">
                        <Link to={recipe.id} className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">View recipe
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
