import noImg from 'assets/images/image-missing.jpg';
import InputField from 'components/partials/InputField';
import InputSelect from 'components/partials/InputSelect';
import Label from 'components/partials/Label';
import TextArea from 'components/partials/TextArea';
import { useState } from 'react';
import { cuisineTypes, recipeTypes } from 'utils/select-types';

function SaveRecipeForm({ recipe, setRecipe, setSubmit, loading }) {
    const [title, setTitle] = useState(recipe.title);
    const [desc, setDesc] = useState(recipe.desc);
    const [recipeType, setRecipeType] = useState('');
    const [cuisineType, setCuisineType] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        setRecipe((prevstate) => ({
            ...prevstate,
            title,
            desc,
            recipeType,
            cuisineType,
        }));
        setSubmit(true);
    };

    return (
        <div className="flex flex-col md:flex-row-reverse">
            <div className="mb-4 hidden md:mb-0 md:block md:w-1/2">
                <img
                    className="object-cover object-center"
                    alt={recipe.title}
                    src={recipe.image ? recipe.image : noImg}
                />
            </div>
            <form className="w-full md:w-1/2 md:pr-16 lg:grow" onSubmit={onSubmit}>
                <h2 className="mb-4 text-xl font-medium text-gray-900">
                    Save recipe to collection
                </h2>
                <div className="mb-4">
                    <Label htmlFor="title" text="Title" required />
                    <InputField
                        type="text"
                        id="title"
                        value={title}
                        handleChange={setTitle}
                        isRequired
                    />
                </div>
                <div className="mb-4">
                    <Label htmlFor="desc" text="Description" />
                    <TextArea
                        type="text"
                        id="desc"
                        value={desc}
                        handleChange={setDesc}
                        isRequired={false}
                    />
                </div>
                <div className="mb-6 flex">
                    <div className="mr-2 flex-1">
                        <Label htmlFor="recipeType" text="Recipe type" required />
                        <InputSelect
                            options={recipeTypes}
                            value={recipeType}
                            id="recipeType"
                            onChange={setRecipeType}
                            defaultValue="Select recipe type"
                            isRequired
                        />
                    </div>
                    <div className="ml-2 flex-1">
                        <Label htmlFor="cuisineType" text="Cuisine type" />
                        <InputSelect
                            options={cuisineTypes}
                            value={cuisineType}
                            id="cuisineType"
                            onChange={setCuisineType}
                            defaultValue="Select cuisine type"
                        />
                    </div>
                </div>
                <button type="submit" disabled={loading} className="btn">
                    Save
                </button>
            </form>
        </div>
    );
}

export default SaveRecipeForm;
