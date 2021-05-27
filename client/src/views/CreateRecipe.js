import { useEffect, useState } from 'react'
import useCreateRecipe from 'hooks/useCreateRecipe';
import AddRecipeForm from 'components/forms/AddRecipeForm';
import SaveRecipeForm from 'components/forms/SaveRecipeForm';
import Modal from 'components/partials/Modal';
import image from 'assets/images/recipe-hero.jpg';

const CreateRecipe = () => {
    const [showModal, setShowModal] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [recipe, setRecipe] = useState({
        title: '',
        desc: '',
        image: '',
        url: null,
        recipeType: '',
        cuisineType: '',
    });
    const { loading } = useCreateRecipe(recipe, submit);

    useEffect(() => {
        if (!recipe.url) {
            return;
        }
        setShowModal(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recipe.url])

    return (
        <section className="container mx-auto flex-grow flex flex-col lg:flex-row items-center px-5 py-16 md:py-24">
            <div className="lg:flex-grow lg:w-1/2 lg:pr-24 flex flex-col lg:items-start lg:text-left items-center text-center mb-12 lg:mb-0">
                <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Add new recipe</h1>
                <p className="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
                <AddRecipeForm setRecipe={setRecipe} loading={loading} />
            </div>
            <div className="w-full lg:w-1/2">
                <img className="object-cover object-center" alt="hero" src={image} />
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <SaveRecipeForm recipe={recipe} setRecipe={setRecipe} setSubmit={setSubmit} loading={loading} />
            </Modal>
        </section>
    )
}

export default CreateRecipe;
