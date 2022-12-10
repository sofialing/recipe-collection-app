import InputSelect from 'components/partials/InputSelect';
import Label from 'components/partials/Label';
import { cuisineTypes, recipeTypes } from 'utils/select-types';

function FilterRecipesForm({ cuisineType, setcuisineType, recipeType, setRecipeType }) {
    const handleReset = (e) => {
        e.preventDefault();
        setRecipeType('');
        setcuisineType('');
    };

    return (
        <form className="-m-4 mb-5 flex flex-wrap items-end">
            <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <Label text="Recipe type" htmlFor="recipeType" />
                <InputSelect
                    options={recipeTypes}
                    value={recipeType}
                    id="recipeType"
                    onChange={setRecipeType}
                    defaultValue="Select recipe type"
                />
            </div>
            <div className="mb-5 w-full px-4 md:mb-0 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <Label text="Cuisine type" htmlFor="cuisineType" />
                <InputSelect
                    options={cuisineTypes}
                    value={cuisineType}
                    id="cuisineType"
                    onChange={setcuisineType}
                    defaultValue="Select cuisine type"
                />
            </div>
            <div className="px-4 md:mt-5 lg:mt-0">
                <button type="reset" onClick={handleReset} className="btn inline-block">
                    Remove filters
                </button>
            </div>
        </form>
    );
}

export default FilterRecipesForm;
