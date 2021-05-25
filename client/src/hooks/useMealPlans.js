import { useEffect, useState } from 'react';
import { useAuth } from 'contexts/AuthContext';
import { getMealPlanSnapshot } from '../services/firebase';

const useMealPlans = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [mealPlan, setMealPlan] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        const unsubscribe = getMealPlanSnapshot(user.uid, {
            next: snapshot => {
                setLoading(true);
                if (snapshot.empty) {
                    setError('Oh no! Could not find mealplan.')
                } else {
                    const recipes = snapshot.docs[0].data().recipes.sort((a, b) => a.date.seconds - b.date.seconds);

                    setMealPlan({
                        id: snapshot.docs[0].id,
                        recipes: recipes,
                    });
                }
                setLoading(false);
            },
            error: error => {
                setError(error.message);
                setLoading(false);
            }
        })

        return unsubscribe;
    }, [user.uid])


    return { error, loading, mealPlan }
}

export default useMealPlans;
