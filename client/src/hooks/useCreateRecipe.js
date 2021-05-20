import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

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
        db.collection('recipes').add({
            ...recipe,
            owner: user.uid,
        }).then(() => {
            setLoading(false);
            setError(false);
            navigate('/recipes');
        }).catch(error => {
            setError(error);
            setLoading(false);
            console.log(error);

        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [submit])

    return { loading, error }
}

export default useCreateRecipe;
