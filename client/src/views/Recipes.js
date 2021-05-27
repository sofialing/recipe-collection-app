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
                <h2 className="text-xs text-green-500 tracking-widest font-medium mb-1 uppercase">Recipe collection</h2>
                <h1 className="sm:text-3xl text-2xl font-medium mb-4 text-gray-900">All your recipes in one place</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">CookBook is your very own personal recipe organiser. Save your favourite recipes from websites, magazines, recipe books or simply those from your head, all in one place, accessible on all of your devices, anytime.</p>
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
