import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useRecipes from 'hooks/useRecipes';
import Spinner from 'components/partials/Spinner';
import RecipeGrid from 'components/cards/RecipeGrid';
import FilterRecipesForm from 'components/forms/FilterRecipesForm';
import useFilterRecipes from 'hooks/useFilterRecipes';

const Recipes = () => {
    const [cuisineType, setcuisineType] = useState('');
    const [recipeType, setRecipeType] = useState('');
    const { loading, recipes } = useRecipes(cuisineType, recipeType);
    const { filteredRecipes } = useFilterRecipes(recipes, recipeType, cuisineType);
    const navigate = useNavigate();

    const getRandomRecipe = () => {
        const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
        navigate(randomRecipe.slug);
    }

    return (
        <section className="container px-5 py-16 md:py-24 mx-auto">
            <header className="flex flex-col text-center w-full mb-16 lg:mb-20">
                <span className="text-xs text-green-500 tracking-widest font-medium mb-1 uppercase">Recipe collection</span>
                <h1 className="text-3xl sm:text-4xl mb-4 font-medium text-gray-900">What do you want to cook today?</h1>
                <p className="lg:w-1/2 mx-auto leading-relaxed tracking-wide text-base">Browse all your favorite recipes to get inspiration. Not sure what to cook? Use the handy <button className="hover:underline" onClick={() => getRandomRecipe()}>recipe roulette</button> to get some ideas.</p>
            </header>
            <FilterRecipesForm cuisineType={cuisineType} recipeType={recipeType} setcuisineType={setcuisineType} setRecipeType={setRecipeType} />
            {loading
                ? <Spinner />
                : <RecipeGrid recipes={filteredRecipes} />
            }
            {recipes.length ? (
                <footer className="text-center mt-24">
                    <Link className="btn inline-block" to="/add-recipe">Add Recipe</Link>
                    <button className="btn btn-outline inline-block ml-4" onClick={getRandomRecipe}>Recipe Roulette</button>
                </footer>
            ) : ''}
        </section>
    )
}

export default Recipes;
