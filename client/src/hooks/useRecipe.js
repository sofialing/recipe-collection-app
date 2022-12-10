import { useAuth } from 'contexts/AuthContext';
import { useEffect, useState } from 'react';
import { getRecipeSnapshot } from 'services/firebase';

const useRecipe = (slug) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        if (!slug) {
            return;
        }

        const unsubscribe = getRecipeSnapshot(slug, {
            next: (snapshot) => {
                setLoading(true);
                if (!snapshot.empty && snapshot.docs[0].data().ownerId === user.uid) {
                    setRecipe({
                        id: snapshot.docs[0].id,
                        ...snapshot.docs[0].data(),
                    });
                } else {
                    setError('Oh no! Could not find recipe.');
                }
                setLoading(false);
            },
            error: () => {
                setError('Oh no! Something went wrong, try again.');
                setLoading(false);
            },
        });

        return unsubscribe;
    }, [user.uid, slug]);

    return { recipe, error, loading };
};

export default useRecipe;
