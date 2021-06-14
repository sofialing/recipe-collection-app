import { db, storage, arrayToUpdate } from 'database';
import { nanoid } from 'nanoid';
import slugify from 'slugify';
/**
 * Delete a recipe from Cloud Firestore.
 * 
 * @param {String} recipeId The ID of the recipe.
 */
export const deleteRecipe = (recipeId) => {
    return db.collection('recipes').doc(recipeId).delete();
}

/**
 * Get current users meal plan,
 * 
 * @param {String} userId The ID of current user,
 */
export const getUserMealPlan = (userId) => {
    return db.collection('meal-plans').where('ownerId', '==', userId).get();
}

/**
 * Add recipe to user's meal plan.
 * 
 * @param {String} docId The document ID.
 * @param {Object} recipe The recipe object.
 * @param {Object} date The date to add.
 */
export const addToMealPlan = (docId, recipe, date) => {
    return db.collection('meal-plans').doc(docId)
        .update({
            recipes: arrayToUpdate({
                ...recipe,
                id: nanoid(16),
                date
            })
        });
}

/**
 * Toggle favorite recipe.
 * 
 * @param {String} recipeId The ID of the recipe.
 * @param {Boolean} state The new state: true or false.
 */
export const toggleFavoriteRecipe = (recipeId, state) => {
    return db.collection('recipes').doc(recipeId).update({
        favorite: state,
    });
}

/**
 * Update recipe.
 * 
 * @param {String} recipeId The ID of the recipe.
 * @param {Object} updatedRecipe The updated recipe.
 */
export const updateRecipe = (recipeId, updatedRecipe) => {
    return db.collection('recipes').doc(recipeId).update({
        ...updatedRecipe
    });
}

/**
 * Get single recipe by ID.
 * 
 * @param {String} recipeId The ID of the recipe.
 */
export const getRecipe = (recipeId) => {
    return db.collection('recipes').doc(recipeId).get();

}

/**
 * Get single recipe by slug.
 *
 * @param {String} userId The ID of current user.
 * @param {Function} cb The callback function.
 */
export const getRecipeSnapshot = (slug, cb) => {
    return db.collection('recipes')
        .where('slug', '==', slug)
        .onSnapshot(cb);
}

/**
 * Get all recipes.
 * 
 * @param {String} userId The ID of current user.
 * @param {Function} cb The callback function.
*/
export const getRecipesSnapshot = (userId, cb) => {
    return db.collection('recipes')
        .where('ownerId', '==', userId)
        .orderBy('title')
        .onSnapshot(cb);
}


/**
 * Add new recipe to Firebase.
 * 
 * @param {Object} recipe The new recipe.
 * @param {String} ownerId The ID of current user.
 */
export const createRecipe = (recipe, ownerId) => {
    return db.collection('recipes').add({
        ...recipe,
        favorite: false,
        slug: slugify(recipe.title, { lower: true }) + '-' + nanoid(4),
        ownerId,
    });
}

/**
 * Get snapshot of current users meal plan.
 * 
 * @param {String} userId The ID of the current user.
 * @param {Function} callback The callback function.
 */
export const getMealPlanSnapshot = (userId, cb) => {
    return db.collection('meal-plans')
        .where('ownerId', '==', userId)
        .onSnapshot(cb);
}

/**
 * Remove a recipe from meal plan.
 * 
 * @param {Array} recipes The new array of recipes.
 * @param {String} userId The ID of the current user.
*/
export const deleteRecipeFromMealPlan = (recipes, userId) => {
    return db.collection('meal-plans')
        .where('ownerId', '==', userId)
        .get()
        .then(querySnapshot => {
            querySnapshot.docs[0].ref.update({ recipes })
        })
}

/**
 * Create new meal plan
 * 
 * @param {String} userId The ID of the current user.
 */
export const createMealPlan = (userId) => {
    return db.collection('meal-plans').add({
        ownerId: userId,
        recipes: [],
    });
}

/**
 * Upload user profile photo
 * 
 * @param {Object} photo 
 */
export const uploadProfilePhoto = (photo) => {
    const fileRef = storage.ref(`avatars/${photo.name}`);
    const uploadTask = fileRef.put(photo);

    return uploadTask.then(async snapshot => await snapshot.ref.getDownloadURL())
}

export const uploadRecipeImage = (photo) => {
    const fileRef = storage.ref(`recipes/${photo.name}`);
    const uploadTask = fileRef.put(photo);

    return uploadTask.then(async snapshot => await snapshot.ref.getDownloadURL())
}


export const updateMealPlanDate = (recipe, newDate) => {
    return db.collection('meal-plans')
        .where('ownerId', '==', recipe.ownerId)
        .get()
        .then(querySnapshot => {
            querySnapshot.docs[0].ref.get()
                .then(snapshot => {
                    const recipes = snapshot.data().recipes.map(item =>
                        item.id === recipe.id
                            ? { ...item, date: newDate }
                            : item
                    );

                    return snapshot.ref.update({ recipes });
                })
        })

}