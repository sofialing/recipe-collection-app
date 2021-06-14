import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';
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
                    const slug = doc.data().slug;
                    navigate('/recipes/' + slug);
                } else {
                    setLoading(false);
                    setError('Could not save recipe.');
                }
            }).catch(error => {
                setLoading(false);
                setError(error.message);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [submit])

    return { loading, error }
}

export default useCreateRecipe;
