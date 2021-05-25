import MealCard from 'components/cards/MealCard'

const PlannerGrid = ({ recipes, onRemoveRecipe }) => {
    if (!recipes.length) {
        return (
            <div className="text-center">
                <p>Your meal plan is empty.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-wrap -m-4">
            {recipes.map(recipe => <MealCard key={recipe.id} recipe={recipe} onRemoveRecipe={onRemoveRecipe} />)}
        </div>
    )
}

export default PlannerGrid;
