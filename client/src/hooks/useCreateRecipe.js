import { useAuth } from 'contexts/AuthContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRecipe, getRecipe } from 'services/firebase';

const useCreateRecipe = (recipe, submit) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!submit) {
            return;
        }
        setLoading(true);
        createRecipe(recipe, user.uid)
            .then(async (docRef) => {
                const doc = await getRecipe(docRef.id);
                if (doc.exists) {
                    const { slug } = doc.data();
                    navigate(`/recipes/${slug}`);
                } else {
                    setLoading(false);
                    setError('Could not save recipe.');
                }
            })
            .catch((error) => {
                setLoading(false);
                setError(error.message);
            });
    }, [submit]);

    return { loading, error };
};

export default useCreateRecipe;
