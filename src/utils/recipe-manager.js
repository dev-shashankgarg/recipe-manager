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

const createRecipe = () => {
    const newRecipe = {
        id: uuidv4(),
        title : 'untitled',
        description : '',
        ingredients : []
    }
    recipes.push(newRecipe)

    saveAllRecipes()
    return newRecipe.id
}

const saveAllRecipes = () => {
    localStorage.setItem('recipe-data' , JSON.stringify(recipes))
}

const removeAllRecipes = () => {
    recipes = []
    saveAllRecipes()
}

loadRecipes()

export {createRecipe , fetchAllRecipes, removeAllRecipes}