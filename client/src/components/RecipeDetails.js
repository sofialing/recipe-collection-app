import React from 'react'

const RecipeDetails = ({ recipe }) => {
    return (
        <>
            <div className="md:w-1/2 w-5/6 overflow-hidden">
                <figure className="aspect-w-3 aspect-h-2">
                    <img className="object-cover object-center" alt={recipe.title} src={recipe.image} />
                </figure>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="text-3xl sm:text-4xl mb-4 font-medium text-gray-900">{recipe.title}</h1>
                <p className="mb-8 leading-relaxed">{recipe.desc}</p>
                <div className="flex justify-center">
                    <a href={recipe.url} target="_blank" rel="noreferrer" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-lg text-lg">Go to recipe</a>
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-lg text-lg">Add to meal planner</button>
                </div>
            </div>
        </>
    )
}

export default RecipeDetails
