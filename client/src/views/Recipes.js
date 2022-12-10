import RecipeGrid from 'components/cards/RecipeGrid';
import FilterRecipesForm from 'components/forms/FilterRecipesForm';
import Spinner from 'components/partials/Spinner';
import useFilterRecipes from 'hooks/useFilterRecipes';
import useRecipes from 'hooks/useRecipes';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Recipes() {
    const [cuisineType, setcuisineType] = useState('');
    const [recipeType, setRecipeType] = useState('');
    const { loading, recipes } = useRecipes(cuisineType, recipeType);
    const { filteredRecipes } = useFilterRecipes(recipes, recipeType, cuisineType);
    const navigate = useNavigate();

    const getRandomRecipe = () => {
        const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
        navigate(randomRecipe.slug);
    };

    return (
        <section className="container mx-auto px-5 py-16 md:py-24">
            <header className="mb-16 flex w-full flex-col text-center lg:mb-20">
                <span className="mb-1 text-xs font-medium uppercase tracking-widest text-emerald-500">
                    Recipe collection
                </span>
                <h1 className="mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
                    What do you want to cook today?
                </h1>
                <p className="mx-auto text-base leading-relaxed tracking-wide lg:w-1/2">
                    Browse all your favorite recipes to get inspiration. Not sure what to
                    cook? Use the handy{' '}
                    <button className="hover:underline" onClick={() => getRandomRecipe()}>
                        recipe roulette
                    </button>{' '}
                    to get some ideas.
                </p>
            </header>
            <FilterRecipesForm
                cuisineType={cuisineType}
                recipeType={recipeType}
                setcuisineType={setcuisineType}
                setRecipeType={setRecipeType}
            />
            {loading ? <Spinner /> : <RecipeGrid recipes={filteredRecipes} />}
            {recipes.length ? (
                <footer className="mt-24 text-center">
                    <Link className="btn inline-block" to="/add-recipe">
                        Add Recipe
                    </Link>
                    <button
                        className="btn btn-outline ml-4 inline-block"
                        onClick={getRandomRecipe}
                    >
                        Recipe Roulette
                    </button>
                </footer>
            ) : (
                ''
            )}
        </section>
    );
}

export default Recipes;
