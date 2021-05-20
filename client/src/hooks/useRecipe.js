import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

const useRecipe = (recipeId) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState([]);
    const { user } = useAuth();


    useEffect(() => {
        console.log(recipeId);
        const unsubscribe = db.collection('recipes').doc(recipeId)
            .onSnapshot(snapshot => {
                console.log('snapshot', snapshot);
                if (snapshot.exists && snapshot.data().owner === user.uid) {
                    setRecipe({ id: snapshot.id, ...snapshot.data() });
                } else {
                    setError('Oh no! Could not find recipe.');
                }
                setLoading(false);
            })
        return unsubscribe;
    }, [user.uid, recipeId])

    return { recipe, error, loading }

}

export default useRecipe;