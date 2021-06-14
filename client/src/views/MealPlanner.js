import { useAuth } from 'contexts/AuthContext';
import useMealPlans from 'hooks/useMealPlans';
import Spinner from 'components/partials/Spinner';
import PlannerGrid from 'components/cards/PlannerGrid';
import { deleteRecipeFromMealPlan, createMealPlan } from 'services/firebase';

const MealPlanner = () => {
    const { user } = useAuth();
    const { loading, mealPlan } = useMealPlans();

    const onRemoveRecipe = async (recipeId) => {
        try {
            const _recipes = mealPlan.recipes.filter(recipe => recipe.id !== recipeId);
            await deleteRecipeFromMealPlan(_recipes, user.uid);
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    }

    const onCreateMealPlan = async () => {
        try {
            await createMealPlan(user.uid);
        } catch (error) {
            console.error('Could not create meal plan: ', error.message);
        }
    }

    return (
        <section className="container px-5 py-16 md:py-24 mx-auto">
            <header className="flex flex-col text-center w-full mb-20">
                <span className="text-xs text-green-500 tracking-widest font-medium mb-1 uppercase">Meal plan</span>
                <h1 className="text-3xl sm:text-4xl mb-4 font-medium text-gray-900">What are you cooking this week?</h1>
                <p className="lg:w-1/2 mx-auto leading-relaxed tracking-wide text-base">Create your ideal meal plan for the week and take away the stress of having to decide what to cook every night.</p>
            </header>
            {loading
                ? <Spinner />
                : <PlannerGrid mealPlan={mealPlan} onCreateMealPlan={onCreateMealPlan} onRemoveRecipe={onRemoveRecipe} />
            }
        </section>
    )
}

export default MealPlanner;
