import RecipeCard from 'components/cards/RecipeCard';
import InputDate from 'components/partials/InputDate';
import Label from 'components/partials/Label';
import Modal from 'components/partials/Modal';
import useAddToMealPlan from 'hooks/useAddToMealPlan';
import { useState } from 'react';

function RecipeGrid({ recipes }) {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const { showDateModal, setShowDateModal, date, setDate, onAddToMealPlan } =
        useAddToMealPlan();

    const onSubmit = (e) => {
        e.preventDefault();
        onAddToMealPlan(selectedRecipe);
    };

    if (!recipes.length) {
        return (
            <div className="mt-28 text-center">
                <p>No recipes to display.</p>
            </div>
        );
    }

    return (
        <>
            <span className="mb-5 block text-right text-sm font-medium tracking-wide text-gray-500">
                Showing {recipes.length} recipes
            </span>
            <div className="-m-4 flex flex-wrap">
                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        setSelectedRecipe={setSelectedRecipe}
                        setShowDateModal={setShowDateModal}
                    />
                ))}
            </div>
            <Modal showModal={showDateModal} setShowModal={setShowDateModal}>
                <form onSubmit={onSubmit}>
                    <h2 className="mb-4 mr-24 text-xl font-medium text-gray-900">
                        Add recipe to meal plan
                    </h2>
                    <div className="mb-5">
                        <Label htmlFor="date" text="Pick a date" />
                        <InputDate id="date" value={date} handleChange={setDate} />
                    </div>
                    <button type="submit" className="btn inline-block">
                        Add
                    </button>
                </form>
            </Modal>
        </>
    );
}

export default RecipeGrid;
