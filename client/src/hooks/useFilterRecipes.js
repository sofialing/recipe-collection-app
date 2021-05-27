import { useState, useEffect } from 'react'

const useFilterRecipes = (recipes, recipeType, cuisineType) => {
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        if (!recipeType.length && !cuisineType.length) {
            setFilteredRecipes(recipes);
            return;
        }

        let _recipes;

        if (recipeType.length && !cuisineType.length) {
            _recipes = recipes.filter(recipe => recipe.recipeType === recipeType);
        }

        if (!recipeType.length && cuisineType.length) {
            _recipes = recipes.filter(recipe => recipe.cuisineType === cuisineType);
        }

        if (recipeType.length && cuisineType.length) {
            _recipes = recipes.filter(recipe => {
                return recipe.recipeType === recipeType && recipe.cuisineType === cuisineType;
            });
        }

        setFilteredRecipes(_recipes);

    }, [recipes, recipeType, cuisineType])

    return { filteredRecipes };
}

export default useFilterRecipes;
