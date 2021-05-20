import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

const useRecipes = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);
    const { user } = useAuth();

    const categories = {}

    useEffect(() => {
        const unsubscribe = db.collection('recipes')
            .where('owner', '==', user.uid)
            .orderBy('title')
            .onSnapshot(snapshot => {
                setLoading(true);
                const snapshotRecipes = [];
                snapshot.forEach(doc => {
                    snapshotRecipes.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                setRecipes(snapshotRecipes);
                setLoading(false);
            })
        return unsubscribe;
    }, [user.uid])

    return { categories, recipes, loading }

}

export default useRecipes;