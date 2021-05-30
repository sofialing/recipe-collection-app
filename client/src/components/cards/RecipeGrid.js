import { useState } from 'react';
import useAddToMealPlan from 'hooks/useAddToMealPlan';
import RecipeCard from 'components/cards/RecipeCard'
import Modal from 'components/partials/Modal';
import Label from 'components/partials/Label';
import InputDate from 'components/partials/InputDate';

const RecipeGrid = ({ recipes }) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const { showDateModal, setShowDateModal, date, setDate, onAddToMealPlan } = useAddToMealPlan();

    const onSubmit = (e) => {
        e.preventDefault();
        onAddToMealPlan(selectedRecipe);
    }

    if (!recipes.length) {
        return (
            <div className="text-center mt-28">
                <p>No recipes to display.</p>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-wrap -m-4">
                {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} setSelectedRecipe={setSelectedRecipe} setShowDateModal={setShowDateModal} />)}
            </div>
            <Modal showModal={showDateModal} setShowModal={setShowDateModal}>
                <form onSubmit={onSubmit}>
                    <h2 className="text-gray-900 text-xl mb-4 mr-24 font-medium">Add recipe to meal plan</h2>
                    <div className="mb-5">
                        <Label htmlFor="date" text="Pick a date" />
                        <InputDate id="date" value={date} handleChange={setDate} />
                    </div>
                    <button type="submit" className="btn inline-block">Add</button>
                </form>
            </Modal>
        </>
    )
}

export default RecipeGrid;
