import React from 'react'
import useRecipes from '../hooks/useRecipes';
import Spinner from '../components/Spinner';
import CardGrid from '../components/CardGrid';
import RecipeHeader from '../components/RecipeHeader';

const Recipes = () => {
    const { loading, recipes } = useRecipes();

    return (
        <section className="container px-5 py-24 mx-auto">
            <RecipeHeader />
            {loading ? <Spinner /> : <CardGrid recipes={recipes} />}
        </section>
    )
}

export default Recipes
