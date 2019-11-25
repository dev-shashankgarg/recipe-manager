import uuidv4 from 'uuid/v4'

let recipes = []

const loadRecipes = () => {
    const recipeJson = localStorage.getItem('recipe-data')
    if(recipeJson){
        try{
            recipes = JSON.parse(recipeJson)    
        }catch(err){
            console.log(`could not load recipe data from local storage: ${err.message}`)
            recipes = []
            saveAllRecipes()
        }
    }else{
        recipes = []
    }
}

const fetchAllRecipes = () => {return recipes}

const findRecipeIndex = (uuid) => {
    return recipes.findIndex(recipe => recipe.id === uuid)
}

const findRecipe = (uuid) => {
    return recipes.find(recipe => recipe.id === uuid)
}

const updateRecipe = (id ,{title,description,ingredients}) => {

    const recipeFound = findRecipe(id)
    if(recipeFound){
        if(title){
            recipeFound.title = title
        }
    
        if(description){
            recipeFound.description = description
        }
    
        if(ingredients){
            recipeFound.ingredients = ingredients
        }
    }
    saveAllRecipes()
}


const createRecipe = () => {
    const newRecipe = {
        id: uuidv4(),
        title : 'Untitled',
        description : 'Add Recipe Steps...',
        ingredients : []
    }
    recipes.push(newRecipe)

    saveAllRecipes()
    return newRecipe.id
}

const findIngredient = (id , ingredients) => {
    return ingredients.find(ingredient => ingredient.id === id)
}

const findIngredientIndex = (id , ingredients) => {
    return ingredients.findIndex(ingredient => ingredient.id === id)
}

const createIngredient = (id , ingredientName) => {
    const recipeFound = findRecipe(id)
    if(recipeFound){
        let ingredients = recipeFound.ingredients
        const newIngredientId = id + uuidv4()
        ingredients.push({
            id: newIngredientId,
            name: ingredientName,
            available: false
        })
        saveAllRecipes()
        return newIngredientId
    }
}

const updateIngredient = (recipeId , ingredientId , {available}) => {
    const foundRecipe = findRecipe(recipeId)
    if(foundRecipe){
        const foundIngredient = findIngredient(ingredientId ,foundRecipe.ingredients )
        if(foundIngredient){
            foundIngredient.available = available
            console.log(foundIngredient)
            saveAllRecipes()
        }
    }
}

const removeIngredient = (recipeId , ingredientId) => {
    const foundRecipe = findRecipe(recipeId)
    if(foundRecipe){
        const foundIngredientIndex = findIngredientIndex(ingredientId,foundRecipe.ingredients)
        if(foundIngredientIndex > -1){
            foundRecipe.ingredients.splice(foundIngredientIndex,1)
            saveAllRecipes()
        }
    }
}

const saveAllRecipes = () => {
    localStorage.setItem('recipe-data' , JSON.stringify(recipes))
}

const removeAllRecipes = () => {
    recipes = []
    saveAllRecipes()
}

const  removeRecipe = (uuid) => {
    const index = findRecipeIndex(uuid)
    if(index > -1){
        recipes.splice(index,1)
        saveAllRecipes()
    }
}

loadRecipes()

export {createRecipe , fetchAllRecipes, removeAllRecipes, removeRecipe, findRecipe, updateRecipe, createIngredient , updateIngredient , removeIngredient}