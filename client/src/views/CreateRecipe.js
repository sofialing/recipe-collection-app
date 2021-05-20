import { useState } from 'react'
import AddRecipeLink from '../components/AddRecipeLink';
import AddRecipeModal from '../components/AddRecipeModal';
import useCreateRecipe from '../hooks/useCreateRecipe';
import image from '../assets/images/recipe-hero.jpg';

const CreateRecipe = () => {
    const [submit, setSubmit] = useState(false);
    const [recipe, setRecipe] = useState({
        title: '',
        desc: '',
        image: '',
        url: '',
        category: ''
    });
    const { error, loading } = useCreateRecipe(recipe, submit);

    return (
        <section className="container mx-auto flex flex-grow px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Add new recipe</h1>
                <p className="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
                <AddRecipeLink setRecipe={setRecipe} loading={loading} />
                {recipe.url && <AddRecipeModal recipe={recipe} setRecipe={setRecipe} setSubmit={setSubmit} />}
            </div>
            <div className="md:w-1/2 w-5/6">
                <img className="object-cover object-center" alt="hero" src={image} />
            </div>
        </section>
    )
}

export default CreateRecipe
