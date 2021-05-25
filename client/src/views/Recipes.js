import { Link } from 'react-router-dom';
import useRecipes from 'hooks/useRecipes';
import Spinner from 'components/partials/Spinner';
import RecipeGrid from 'components/cards/RecipeGrid';

const Recipes = () => {
    const { loading, recipes } = useRecipes();

    return (
        <section className="container px-5 py-24 mx-auto">
            <header className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-green-500 tracking-widest font-medium mb-1 uppercase">Recipe collection</h2>
                <h1 className="sm:text-3xl text-2xl font-medium mb-4 text-gray-900">All your recipes in one place</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
            </header>
            {loading
                ? <Spinner />
                : <RecipeGrid recipes={recipes} />
            }
            <footer className="text-center mt-24">
                <Link className="btn inline-block" to="/add-recipe">Add recipe</Link>
            </footer>
        </section>
    )
}

export default Recipes;
