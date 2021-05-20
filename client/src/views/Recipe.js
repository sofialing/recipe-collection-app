import React from 'react'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import RecipeDetails from '../components/RecipeDetails';
import Spinner from '../components/Spinner';
import useRecipe from '../hooks/useRecipe';


const Recipe = () => {
    const { recipeId } = useParams();
    const { recipe, loading } = useRecipe(recipeId);

    return (
        <>
            <Breadcrumbs title={recipe.title} />
            <section className="container mx-auto flex-grow flex px-5 py-24 md:flex-row flex-col items-center">
                {loading ? <Spinner /> : <RecipeDetails recipe={recipe} />}
            </section>
        </>
    )
}

export default Recipe
