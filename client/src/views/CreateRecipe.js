import image from 'assets/images/recipe-hero.jpg';
import AddRecipeForm from 'components/forms/AddRecipeForm';
import SaveRecipeForm from 'components/forms/SaveRecipeForm';
import Modal from 'components/partials/Modal';
import useCreateRecipe from 'hooks/useCreateRecipe';
import { useEffect, useState } from 'react';

function CreateRecipe() {
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
    }, [recipe.url]);

    return (
        <section className="container mx-auto flex grow flex-col-reverse items-center px-5 py-16 md:py-24 lg:flex-row">
            <div className="flex flex-col items-center text-center lg:w-1/2 lg:grow lg:items-start lg:pr-24 lg:text-left">
                <h1 className="mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
                    Import new recipe
                </h1>
                <p className="mb-8 leading-relaxed">
                    Found a recipe on the internet that looks great? Just paste the link
                    to easily import it to your recipe collection.
                </p>
                <AddRecipeForm setRecipe={setRecipe} loading={loading} />
            </div>
            <div className="mb-12 w-full lg:mb-0 lg:w-1/2">
                <img
                    className="w-full object-cover"
                    alt=""
                    src={image}
                    width="640"
                    height="427"
                />
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <SaveRecipeForm
                    recipe={recipe}
                    setRecipe={setRecipe}
                    setSubmit={setSubmit}
                    loading={loading}
                />
            </Modal>
        </section>
    );
}

export default CreateRecipe;
