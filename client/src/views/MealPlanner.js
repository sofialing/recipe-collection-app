import PlannerGrid from 'components/cards/PlannerGrid';
import Spinner from 'components/partials/Spinner';
import { useAuth } from 'contexts/AuthContext';
import useMealPlans from 'hooks/useMealPlans';
import { createMealPlan, deleteRecipeFromMealPlan } from 'services/firebase';

function MealPlanner() {
    const { user } = useAuth();
    const { loading, mealPlan } = useMealPlans();

    const onRemoveRecipe = async (recipeId) => {
        try {
            const _recipes = mealPlan.recipes.filter((recipe) => recipe.id !== recipeId);
            await deleteRecipeFromMealPlan(_recipes, user.uid);
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };

    const onCreateMealPlan = async () => {
        try {
            await createMealPlan(user.uid);
        } catch (error) {
            console.error('Could not create meal plan: ', error.message);
        }
    };

    return (
        <section className="container mx-auto px-5 py-16 md:py-24">
            <header className="mb-20 flex w-full flex-col text-center">
                <span className="mb-1 text-xs font-medium uppercase tracking-widest text-emerald-500">
                    Meal plan
                </span>
                <h1 className="mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
                    What are you cooking this week?
                </h1>
                <p className="mx-auto text-base leading-relaxed tracking-wide lg:w-1/2">
                    Create your ideal meal plan for the week and take away the stress of
                    having to decide what to cook every night.
                </p>
            </header>
            {loading ? (
                <Spinner />
            ) : (
                <PlannerGrid
                    mealPlan={mealPlan}
                    onCreateMealPlan={onCreateMealPlan}
                    onRemoveRecipe={onRemoveRecipe}
                />
            )}
        </section>
    );
}

export default MealPlanner;
