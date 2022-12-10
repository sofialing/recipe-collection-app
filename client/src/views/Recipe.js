import noImg from 'assets/images/image-missing.jpg';
import EditRecipeForm from 'components/forms/EditRecipeForm';
import Breadcrumbs from 'components/partials/Breadcrumbs';
import InputDate from 'components/partials/InputDate';
import Label from 'components/partials/Label';
import Modal from 'components/partials/Modal';
import Spinner from 'components/partials/Spinner';
import useAddToMealPlan from 'hooks/useAddToMealPlan';
import useRecipe from 'hooks/useRecipe';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteRecipe } from 'services/firebase';

function Recipe() {
    const [showModal, setShowModal] = useState(false);
    const { slug } = useParams();
    const { recipe, loading } = useRecipe(slug);
    const navigate = useNavigate();
    const { showDateModal, setShowDateModal, date, setDate, onAddToMealPlan } =
        useAddToMealPlan();

    const onDeleteRecipe = async () => {
        try {
            await deleteRecipe(recipe.id);
            navigate('/recipes');
        } catch (error) {
            console.error('Error removing document: ', error);
        }
    };

    const handleAddToMealPlan = (e) => {
        e.preventDefault();
        onAddToMealPlan(recipe);
    };

    if (loading) {
        return (
            <section className="container mx-auto flex grow flex-col items-center px-5 py-24 md:flex-row">
                <Spinner />
            </section>
        );
    }

    return (
        <>
            <Breadcrumbs title={recipe.title} />
            <section className="container mx-auto flex grow flex-col items-center px-5 py-16 md:py-24 lg:flex-row">
                <div className="mb-10 w-full overflow-hidden lg:mb-0 lg:w-1/2">
                    <figure className="aspect-[3/2]">
                        <img
                            className="object-cover object-center"
                            alt={recipe.title}
                            src={recipe.image ? recipe.image : noImg}
                        />
                    </figure>
                </div>
                <div className="flex flex-col items-center text-center lg:w-1/2 lg:grow lg:items-start lg:pl-24 lg:text-left">
                    <h2 className="mb-1 text-xs font-medium uppercase tracking-widest text-emerald-500">
                        {recipe.recipeType}
                        {recipe.cuisineType.length ? ` · ${recipe.cuisineType}` : ''}
                    </h2>
                    <h1 className="mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
                        {recipe.title}
                    </h1>
                    {recipe.desc.length ? (
                        <p className="leading-relaxed">{recipe.desc}</p>
                    ) : (
                        ''
                    )}
                    <div className="mt-8 flex items-center">
                        <a
                            href={recipe.url}
                            target="_blank"
                            rel="noreferrer"
                            className="btn inline-flex"
                        >
                            View recipe
                        </a>
                        <button
                            className="btn btn-outline ml-4 inline-flex"
                            onClick={() => setShowDateModal(true)}
                        >
                            Add to meal plan
                        </button>
                    </div>
                    <div className="mt-8 flex w-full items-center justify-center lg:justify-start">
                        <button
                            onClick={() => setShowModal(true)}
                            className="mr-4 text-gray-400 hover:text-red-500 focus:outline-none"
                            title="Update recipe"
                            aria-label="Update recipe"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                            </svg>
                        </button>
                        <button
                            className="mr-4 text-gray-400 hover:text-red-500 focus:outline-none"
                            title="Delete recipe"
                            aria-label="Delete recipe"
                            onClick={onDeleteRecipe}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <Modal showModal={showModal} setShowModal={setShowModal}>
                    <EditRecipeForm recipe={recipe} setShowModal={setShowModal} />
                </Modal>
                <Modal showModal={showDateModal} setShowModal={setShowDateModal}>
                    <form onSubmit={handleAddToMealPlan}>
                        <h2 className="mb-4 mr-24 text-xl font-medium text-gray-900">
                            Add recipe to meal plan
                        </h2>
                        <div className="mb-6">
                            <Label htmlFor="date" text="Pick a date" />
                            <InputDate id="date" value={date} handleChange={setDate} />
                        </div>
                        <button type="submit" className="btn block">
                            Add
                        </button>
                    </form>
                </Modal>
            </section>
        </>
    );
}

export default Recipe;
