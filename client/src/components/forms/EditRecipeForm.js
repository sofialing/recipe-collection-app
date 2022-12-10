import noImg from 'assets/images/image-missing.jpg';
import InputField from 'components/partials/InputField';
import InputSelect from 'components/partials/InputSelect';
import Label from 'components/partials/Label';
import TextArea from 'components/partials/TextArea';
import { useState } from 'react';
import { updateRecipe, uploadRecipeImage } from 'services/firebase';
import { cuisineTypes, recipeTypes } from 'utils/select-types';

function EditRecipeForm({ recipe, setShowModal }) {
    const [title, setTitle] = useState(recipe.title);
    const [desc, setDesc] = useState(recipe.desc);
    const [recipeType, setRecipeType] = useState(recipe.recipeType);
    const [cuisineType, setCuisineType] = useState(recipe.cuisineType);
    const [photo, setPhoto] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            // upload new photo, get url
            if (photo) {
                const image = await uploadRecipeImage(photo);
                console.log('image', image);
                await updateRecipe(recipe.id, {
                    ...recipe,
                    title,
                    desc,
                    recipeType,
                    cuisineType,
                    image,
                });
            } else {
                await updateRecipe(recipe.id, {
                    ...recipe,
                    title,
                    desc,
                    recipeType,
                    cuisineType,
                });
            }
            setShowModal(false);
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };

    return (
        <form className="flex flex-col md:flex-row-reverse" onSubmit={onSubmit}>
            <div className="relative mb-4 hidden overflow-hidden md:mb-0 md:block md:w-1/2">
                <figure className="aspect-w-3 aspect-h-3 relative">
                    {photo ? (
                        <img
                            className="object-cover object-center"
                            alt={recipe.title}
                            src={URL.createObjectURL(photo)}
                        />
                    ) : (
                        <img
                            className="object-cover object-center"
                            alt={recipe.title}
                            src={recipe.image ? recipe.image : noImg}
                        />
                    )}
                </figure>
                <div className="absolute bottom-3 right-3 rounded-3xl bg-white px-5 py-2 text-center text-sm">
                    <div className="flex ">
                        <label
                            htmlFor="image"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-emerald-500 focus-within:outline-none hover:text-emerald-500"
                        >
                            <span>Change image</span>
                            <input
                                id="image"
                                type="file"
                                accept="image/png, image/jpeg"
                                className="sr-only"
                                onChange={(e) => setPhoto(e.target.files[0])}
                            />
                        </label>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 md:pr-16 lg:grow">
                <h2 className="mb-4 text-xl font-medium text-gray-900">Edit recipe</h2>
                <div className="relative mb-4">
                    <Label htmlFor="title" text="Title" required />
                    <InputField
                        type="text"
                        id="title"
                        value={title}
                        handleChange={setTitle}
                        isRequired
                    />
                </div>
                <div className="relative mb-4">
                    <Label htmlFor="desc" text="Description" />
                    <TextArea
                        type="text"
                        id="desc"
                        value={desc}
                        handleChange={setDesc}
                        isRequired={false}
                    />
                </div>
                <div className="mb-4 flex">
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
                <div className="mt-6">
                    <button type="submit" className="btn mr-4">
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="btn btn-outline inline-block"
                    >
                        Back
                    </button>
                </div>
            </div>
        </form>
    );
}

export default EditRecipeForm;
