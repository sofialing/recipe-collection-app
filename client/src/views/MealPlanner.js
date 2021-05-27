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
                <h2 className="text-xs text-green-500 tracking-widest font-medium mb-1 uppercase">Meal planner</h2>
                <h1 className="sm:text-3xl text-2xl font-medium mb-4 text-gray-900">Hello {user.displayName}, what are you cooking today?</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
            </header>
            {loading
                ? <Spinner />
                : <PlannerGrid mealPlan={mealPlan} onCreateMealPlan={onCreateMealPlan} onRemoveRecipe={onRemoveRecipe} />
            }
        </section>
    )
}

export default MealPlanner;
