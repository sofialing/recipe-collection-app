import { Link } from 'react-router-dom';
import MealCard from 'components/cards/MealCard'

const PlannerGrid = ({ mealPlan, onRemoveRecipe, onCreateMealPlan }) => {

    if (!mealPlan) {
        return (
            <div className="text-center mt-28">
                <p>You haven't created a meal plan.</p>
                <button className="inline-block mt-5 btn" onClick={onCreateMealPlan}>Get started</button>
            </div>
        )
    }

    if (!mealPlan.recipes.length) {
        return (
            <div className="text-center">
                <p>Your meal plan is empty.</p>
                <Link className="inline-block mt-5 btn" to="/recipes">Add recipe</Link>
            </div>
        );
    }

    return (<>
        <div className="flex flex-wrap -m-4">
            {mealPlan.recipes.map(recipe => <MealCard key={recipe.id} recipe={recipe} onRemoveRecipe={onRemoveRecipe} />)}
        </div>
        <div className="text-center mt-24">
            <Link to="/recipes" className="inline-block btn">Add more recipes</Link>
        </div>
    </>
    )
}

export default PlannerGrid;
