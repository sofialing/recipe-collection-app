import { useState } from 'react';
import { Link } from 'react-router-dom';
import MealCard from 'components/cards/MealCard'
import Modal from 'components/partials/Modal';
import AddCustomMeal from 'components/forms/AddCustomMeal';

const PlannerGrid = ({ mealPlan, onRemoveRecipe, onCreateMealPlan }) => {
    const [showModal, setShowModal] = useState(false);

    if (!mealPlan) {
        return (
            <div className="text-center mt-28">
                <p>You haven't created a meal plan.</p>
                <button className="inline-block mt-6 btn" onClick={onCreateMealPlan}>Get started</button>
            </div>
        )
    }

    return (
        <>
            {mealPlan.recipes.length ? (
                <div className="flex flex-wrap -m-4 mb-24">
                    {mealPlan.recipes.map(recipe => <MealCard key={recipe.id} recipe={recipe} onRemoveRecipe={onRemoveRecipe} />)}
                </div>
            ) : (
                <p className="w-full text-center mb-6">Your meal plan is empty.</p>
            )}
            <div className="text-center">
                <Link to="/recipes" className="inline-block btn">Add recipe</Link>
                <button className="inline-block mt-5 btn btn-outline md:mt-0 ml-4" onClick={() => setShowModal(true)}>Add custom meal</button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <AddCustomMeal setShowModal={setShowModal} />
            </Modal>
        </>
    )
}

export default PlannerGrid;
