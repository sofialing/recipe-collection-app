import { useAuth } from 'contexts/AuthContext';
import moment from 'moment';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addToMealPlan, getUserMealPlan } from 'services/firebase';

const useAddToMealPlan = () => {
    const [showDateModal, setShowDateModal] = useState(false);
    const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
    const { user } = useAuth();
    const navigate = useNavigate();

    const onAddToMealPlan = async (recipe) => {
        if (!date) {
            return;
        }

        try {
            const snapshot = await getUserMealPlan(user.uid);

            if (snapshot.empty) {
                console.log('Could not find user meal plan.');
                return;
            }

            await addToMealPlan(snapshot.docs[0].id, recipe, date);
            navigate('/meal-planner');
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };

    return {
        showDateModal,
        setShowDateModal,
        date,
        setDate,
        onAddToMealPlan,
    };
};

export default useAddToMealPlan;
