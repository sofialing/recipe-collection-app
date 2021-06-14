import { useState } from 'react';
import { updateRecipe, uploadRecipeImage } from 'services/firebase';
import noImg from 'assets/images/image-missing.jpg';
import Label from 'components/partials/Label';
import InputField from 'components/partials/InputField';
import InputSelect from 'components/partials/InputSelect';
import TextArea from 'components/partials/TextArea';
import { recipeTypes, cuisineTypes } from 'utils/select-types';

const EditRecipeForm = ({ recipe, setShowModal }) => {
    const [title, setTitle] = useState(recipe.title);
    const [desc, setDesc] = useState(recipe.desc);
    const [recipeType, setRecipeType] = useState(recipe.recipeType);
    const [cuisineType, setCuisineType] = useState(recipe.cuisineType);
    const [photo, setPhoto] = useState('');

    const onSubmit = async e => {
        e.preventDefault();
        try {
            // upload new photo, get url
            if (photo) {
                const image = await uploadRecipeImage(photo)
                console.log('image', image);
                await updateRecipe(recipe.id, {
                    ...recipe, title, desc, recipeType, cuisineType, image
                });
            } else {
                await updateRecipe(recipe.id, {
                    ...recipe, title, desc, recipeType, cuisineType,
                });
            }
            setShowModal(false);
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    }

    return (
        <form className="flex flex-col md:flex-row-reverse" onSubmit={onSubmit}>
            <div className="hidden md:block md:w-1/2 mb-4 md:mb-0 overflow-hidden relative">
                <figure className="aspect-w-3 aspect-h-3 relative">
                    {photo
                        ? <img className="object-cover object-center" alt={recipe.title} src={URL.createObjectURL(photo)} />
                        : <img className="object-cover object-center" alt={recipe.title} src={recipe.image ? recipe.image : noImg} />}
                </figure>
                <div className="absolute bottom-3 right-3 bg-white px-5 py-2 rounded-3xl text-center text-sm">
                    <div className="flex ">
                        <label htmlFor="image" className="relative cursor-pointer bg-white rounded-md font-medium text-green-500 hover:text-green-500 focus-within:outline-none">
                            <span>Change image</span>
                            <input id="image" type="file" accept="image/png, image/jpeg" className="sr-only" onChange={(e) => setPhoto(e.target.files[0])} />
                        </label>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:flex-grow md:pr-16" >
                <h2 className="text-gray-900 text-xl mb-4 font-medium">Edit recipe</h2>
                <div className="relative mb-4">
                    <Label htmlFor="title" text="Title" required={true} />
                    <InputField type="text" id="title" value={title} handleChange={setTitle} isRequired={true} />
                </div>
                <div className="relative mb-4">
                    <Label htmlFor="desc" text="Description" />
                    <TextArea type="text" id="desc" value={desc} handleChange={setDesc} isRequired={false} />
                </div>
                <div className="mb-4 flex">
                    <div className="mr-2 flex-1">
                        <Label htmlFor="recipeType" text="Recipe type" required={true} />
                        <InputSelect options={recipeTypes} value={recipeType} id="recipeType" onChange={setRecipeType} defaultValue="Select recipe type" isRequired={true} />
                    </div>
                    <div className="ml-2 flex-1">
                        <Label htmlFor="cuisineType" text="Cuisine type" />
                        <InputSelect options={cuisineTypes} value={cuisineType} id="cuisineType" onChange={setCuisineType} defaultValue="Select cuisine type" />
                    </div>
                </div>
                <div className="mt-6">
                    <button type="submit" className="btn mr-4">Save</button>
                    <button type="button" onClick={() => setShowModal(false)} className="inline-block btn btn-outline">Back</button>
                </div>
            </div>
        </form>
    )
}

export default EditRecipeForm;
