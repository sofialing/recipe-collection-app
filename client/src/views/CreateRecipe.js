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
        <section className="container mx-auto flex-grow flex flex-col-reverse lg:flex-row items-center px-5 py-16 md:py-24">
            <div className="lg:flex-grow lg:w-1/2 lg:pr-24 flex flex-col lg:items-start lg:text-left items-center text-center">
                <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Import new recipe</h1>
                <p className="mb-8 leading-relaxed">Found a recipe on the internet that looks great? Just paste the link to easily import it to your recipe collection.</p>
                <AddRecipeForm setRecipe={setRecipe} loading={loading} />
            </div>
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                <img className="object-cover w-full" alt="" src={image} width="640" height="427" />
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <SaveRecipeForm recipe={recipe} setRecipe={setRecipe} setSubmit={setSubmit} loading={loading} />
            </Modal>
        </section>
    )
}

export default CreateRecipe;
