import { useState } from 'react';
import { useAuth } from 'contexts/AuthContext';
import useAddToMealPlan from 'hooks/useAddToMealPlan';
import Label from 'components/partials/Label';
import InputDate from 'components/partials/InputDate';
import InputField from 'components/partials/InputField';

const AddCustomMeal = ({ setShowModal }) => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const { date, setDate, onAddToMealPlan } = useAddToMealPlan();
    const { user } = useAuth();

    const onSubmit = (e) => {
        e.preventDefault();
        onAddToMealPlan({
            title,
            url: url.length ? url : null,
            image: null,
            ownerId: user.uid
        });
        setShowModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-gray-900 text-xl mb-4 mr-24 font-medium">Create custom meal</h2>
            <div className="mb-4">
                <Label htmlFor="title" text="Title" required={true} />
                <InputField id="title" value={title} handleChange={setTitle} isRequired={true} placeholder="Give your recipe a name" />
            </div>
            <div className="mb-4">
                <Label htmlFor="date" text="Pick a date" required={true} />
                <InputDate id="date" value={date} handleChange={setDate} isRequired={true} />
            </div>
            <div className="mb-4">
                <Label htmlFor="url" text="Recipe Url" />
                <InputField id="url" value={url} handleChange={setUrl} placeholder="http://" />
            </div>
            <button type="submit" className="btn inline-block">Add</button>
        </form>
    )
}

export default AddCustomMeal;
