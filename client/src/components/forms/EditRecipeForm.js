import { useState } from 'react';
import { updateRecipe } from 'services/firebase';
import noImg from 'assets/images/image-missing.jpg';
import Label from 'components/partials/Label';
import InputField from 'components/partials/InputField';
import InputSelect from 'components/partials/InputSelect';
import TextArea from 'components/partials/TextArea';

const recipeTypes = [
    { value: 'bread', option: 'Bread' },
    { value: 'breakfast-brunch', option: 'Breakfast & Brunch' },
    { value: 'dinner', option: 'Dinner' },
    { value: 'dessert', option: 'Dessert' },
    { value: 'drink', option: 'Drink' },
    { value: 'lunch', option: 'Lunch' },
    { value: 'snacks-appetizer', option: 'Snacks & Appetizer' },
];

const cuisineTypes = [
    { value: 'asian-food', option: 'Asian Food' },
    { value: 'italian-food', option: 'Italian Food' },
    { value: 'nordic-food', option: 'Nordic Food' },
    { value: 'thai-food', option: 'Thai Food' },
    { value: 'american-food', option: 'American Food' },
    { value: 'indian-food', option: 'Indian Food' },
    { value: 'mexican-food', option: 'Mexican Food' },
    { value: 'greek-food', option: 'Greek Food' },
    { value: 'middle-eastern-food', option: 'Middle Eastern Food' },
];

const EditRecipeForm = ({ recipe, setShowModal }) => {
    const [title, setTitle] = useState(recipe.title);
    const [desc, setDesc] = useState(recipe.desc);
    const [recipeType, setRecipeType] = useState(recipe.recipeType);
    const [cuisineType, setCuisineType] = useState(recipe.cuisineType);

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await updateRecipe(recipe.id, {
                ...recipe, title, desc, recipeType, cuisineType
            });
            setShowModal(false);
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    }

    return (
        <div className="flex flex-col md:flex-row-reverse">
            <div className="hidden md:block md:w-1/2 mb-4 md:mb-0 overflow-hidden">
                <figure className="aspect-w-3 aspect-h-2">
                    <img className="object-cover object-center" alt={recipe.title} src={recipe.image ? recipe.image : noImg} />
                </figure>
            </div>
            <form className="w-full md:w-1/2 lg:flex-grow md:pr-16" onSubmit={onSubmit}>
                <h2 className="text-gray-900 text-xl mb-4 font-medium">Edit recipe</h2>
                <div className="relative mb-4">
                    <Label htmlFor="title" text="Title" />
                    <InputField type="text" id="title" value={title} handleChange={setTitle} isRequired={true} />
                </div>
                <div className="relative mb-4">
                    <Label htmlFor="desc" text="Description" />
                    <TextArea type="text" id="desc" value={desc} handleChange={setDesc} isRequired={false} />
                </div>
                <div className="mb-6 flex">
                    <div className="mr-2 flex-1">
                        <Label htmlFor="recipeType" text="Recipe type" />
                        <InputSelect options={recipeTypes} value={recipeType} id="recipeType" onChange={setRecipeType} defaultValue="Select recipe type" />
                    </div>
                    <div className="ml-2 flex-1">
                        <Label htmlFor="cuisineType" text="Cuisine type" />
                        <InputSelect options={cuisineTypes} value={cuisineType} id="cuisineType" onChange={setCuisineType} defaultValue="Select cuisine type" />
                    </div>
                </div>
                <div className="mt-6">
                    <button type="submit" className="btn mr-4">Save updates</button>
                    <button type="button" onClick={() => setShowModal(false)} className="inline-block btn btn-outline">Back</button>
                </div>
            </form>
        </div>
    )
}

export default EditRecipeForm;
