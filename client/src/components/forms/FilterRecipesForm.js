import InputSelect from "components/partials/InputSelect";
import Label from "components/partials/Label";
import { recipeTypes, cuisineTypes } from 'utils/select-types';

const FilterRecipesForm = ({ cuisineType, setcuisineType, recipeType, setRecipeType }) => {
    const handleReset = (e) => {
        e.preventDefault();
        setRecipeType('');
        setcuisineType('');
    }

    return (
        <form className="flex items-end flex-wrap mb-5 -m-4">
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4 md:mb-0">
                <Label text="Recipe type" htmlFor="recipeType" />
                <InputSelect options={recipeTypes} value={recipeType} id="recipeType" onChange={setRecipeType} defaultValue="Select recipe type" />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-5 md:mb-0">
                <Label text="Cuisine type" htmlFor="cuisineType" />
                <InputSelect options={cuisineTypes} value={cuisineType} id="cuisineType" onChange={setcuisineType} defaultValue="Select cuisine type" />
            </div>
            <div className="md:mt-5 lg:mt-0 px-4">
                <button type="reset" onClick={handleReset} className="btn inline-block">Remove filters</button>
            </div>
        </form>
    )
}

export default FilterRecipesForm
