import InputSelect from "components/partials/InputSelect";
import Label from "components/partials/Label";

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

const FilterRecipesForm = ({ cuisineType, setcuisineType, recipeType, setRecipeType }) => {
    const handleReset = (e) => {
        e.preventDefault();
        setRecipeType('');
        setcuisineType('');
    }

    return (
        <form className="flex items-end flex-wrap mb-8 -m-4">
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4 md:mb-0">
                <Label text="Recipe type" htmlFor="recipeType" />
                <InputSelect options={recipeTypes} value={recipeType} id="recipeType" onChange={setRecipeType} defaultValue="Select recipe type" />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-5 md:mb-0">
                <Label text="Cuisine type" htmlFor="cuisineType" />
                <InputSelect options={cuisineTypes} value={cuisineType} id="cuisineType" onChange={setcuisineType} defaultValue="Select cuisine type" />
            </div>
            <div className="px-4">
                <button type="reset" onClick={handleReset} className="btn inline-block">Remove filters</button>
            </div>
        </form>
    )
}

export default FilterRecipesForm
