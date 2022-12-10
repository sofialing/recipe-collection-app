import MealCard from 'components/cards/MealCard';
import AddCustomMeal from 'components/forms/AddCustomMeal';
import Modal from 'components/partials/Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function PlannerGrid({ mealPlan, onRemoveRecipe, onCreateMealPlan }) {
    const [showModal, setShowModal] = useState(false);

    if (!mealPlan) {
        return (
            <div className="mt-28 text-center">
                <p>You haven&apos;t created a meal plan.</p>
                <button className="btn mt-6 inline-block" onClick={onCreateMealPlan}>
                    Get started
                </button>
            </div>
        );
    }

    return (
        <>
            {mealPlan.recipes.length ? (
                <div className="-m-4 mb-24 flex flex-wrap">
                    {mealPlan.recipes.map((recipe) => (
                        <MealCard
                            key={recipe.id}
                            recipe={recipe}
                            onRemoveRecipe={onRemoveRecipe}
                        />
                    ))}
                </div>
            ) : (
                <p className="mb-6 w-full text-center">Your meal plan is empty.</p>
            )}
            <div className="text-center">
                <Link to="/recipes" className="btn inline-block">
                    Add recipe
                </Link>
                <button
                    className="btn btn-outline mt-5 ml-4 inline-block md:mt-0"
                    onClick={() => setShowModal(true)}
                >
                    Add custom meal
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <AddCustomMeal setShowModal={setShowModal} />
            </Modal>
        </>
    );
}

export default PlannerGrid;
