import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Breadcrumbs from 'components/partials/Breadcrumbs';
import Spinner from 'components/partials/Spinner';
import useRecipe from 'hooks/useRecipe';
import { deleteRecipe, toggleFavoriteRecipe } from 'services/firebase';
import Modal from 'components/partials/Modal';
import EditRecipeForm from 'components/forms/EditRecipeForm';
import noImg from 'assets/images/image-missing.jpg';
import Label from 'components/partials/Label';
import InputDate from 'components/partials/InputDate';
import useAddToMealPlan from 'hooks/useAddToMealPlan';

const Recipe = () => {
    const [showModal, setShowModal] = useState(false);
    const { slug } = useParams();
    const { recipe, loading } = useRecipe(slug);
    const [favorite, setFavorite] = useState(recipe.favorite);
    const navigate = useNavigate();
    const { showDateModal, setShowDateModal, date, setDate, onAddToMealPlan } = useAddToMealPlan();

    const onDeleteRecipe = async () => {
        try {
            await deleteRecipe(recipe.id);
            navigate('/recipes');
        } catch (error) {
            console.error('Error removing document: ', error);
        }
    }

    const handleAddToMealPlan = (e) => {
        e.preventDefault();
        onAddToMealPlan(recipe);
    }

    const onFavoriteRecipe = async () => {
        try {
            await toggleFavoriteRecipe(recipe.id, !favorite);
            setFavorite(prevState => !prevState);
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    }

    if (loading) {
        return (
            <section className="container mx-auto px-5 py-24 flex-grow flex flex-col md:flex-row items-center">
                <Spinner />
            </section>
        )
    }

    return (
        <>
            <Breadcrumbs title={recipe.title} />
            <section className="container mx-auto px-5 py-16 md:py-24 flex-grow flex flex-col md:flex-row items-center">
                <div className="w-full lg:w-1/2 mb-10 lg:mb-0 overflow-hidden">
                    <figure className="aspect-w-3 aspect-h-2">
                        <img className="object-cover object-center" alt={recipe.title} src={recipe.image ? recipe.image : noImg} />
                    </figure>
                </div>
                <div className="lg:flex-grow lg:w-1/2 lg:pl-24 flex flex-col lg:items-start lg:text-left items-center text-center">
                    <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1 uppercase">{recipe.recipeType} &middot; {recipe.cuisineType}</h2>
                    <h1 className="text-3xl sm:text-4xl mb-4 font-medium text-gray-900">{recipe.title}</h1>
                    <p className="mb-8 leading-relaxed">{recipe.desc}</p>
                    <div className="flex items-center">
                        <a href={recipe.url} target="_blank" rel="noreferrer" className="inline-flex btn">View recipe</a>
                        <button className="ml-4 inline-flex btn btn-outline" onClick={() => setShowDateModal(true)}>Add to meal plan</button>
                    </div>
                    <div className="flex w-full items-center justify-center lg:justify-start mt-8">
                        <button className="mr-4 text-gray-400 hover:text-red-500 focus:outline-none" onClick={onFavoriteRecipe}>
                            {favorite
                                ? (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>)
                                : (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>)
                            }
                        </button>
                        <button onClick={() => setShowModal(true)} className="text-gray-400 mr-4 hover:text-red-500 focus:outline-none" title="Update recipe" aria-label="Update recipe">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </button>
                        <button className="text-gray-400 mr-4 hover:text-red-500 focus:outline-none" title="Delete recipe" aria-label="Delete recipe" onClick={onDeleteRecipe}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                <Modal showModal={showModal} setShowModal={setShowModal}>
                    <EditRecipeForm recipe={recipe} setShowModal={setShowModal} />
                </Modal>
                <Modal showModal={showDateModal} setShowModal={setShowDateModal}>
                    <form onSubmit={handleAddToMealPlan}>
                        <h2 className="text-gray-900 text-xl mb-4 mr-24 font-medium">Add recipe to meal plan</h2>
                        <div className="relative mb-4">
                            <Label htmlFor="date" text="Pick a date" />
                            <InputDate id="date" value={date} handleChange={setDate} />
                        </div>
                        <button type="submit" className="btn inline-block">Add</button>
                    </form>
                </Modal>
            </section>
        </>
    )
}

export default Recipe
