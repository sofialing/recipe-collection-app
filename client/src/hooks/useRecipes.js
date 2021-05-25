import { useEffect, useState } from 'react';
import { useAuth } from 'contexts/AuthContext';
import { getRecipesSnapshot } from 'services/firebase';

const useRecipes = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);
    const { user } = useAuth();

    const categories = {}

    useEffect(() => {
        const unsubscribe = getRecipesSnapshot(user.uid, {
            next: snapshot => {
                setLoading(true);
                const _recipes = [];

                snapshot.forEach(doc => {
                    _recipes.push({ id: doc.id, ...doc.data() })
                })

                setRecipes(_recipes);
                setLoading(false);
            },
            error: error => {
                setError(error.message);
                setLoading(false);

            }
        })

        return unsubscribe;
    }, [user.uid])

    return { categories, recipes, loading, error }

}

export default useRecipes;