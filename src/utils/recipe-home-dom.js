
const generateIngSummaryText = (count , total) => {
    if(count === total){
        return `You have all the ingredients !!`
    }
    if(count === 0){
        return `You have no ingredients !!`
    }
    return `You have some ingredients !! Ingredients left: (${count})`
} 

const generateIngSummaryColor = (count , total) => {
    if(count === total){
        return `green`
    }
    if(count === 0){
        return `red`
    }
    return `yellow`
}

const createRecipeLink = ({id , title , ingredients}) => {
    const recipeLinkDiv = document.createElement('div')
    recipeLinkDiv.className = 'recipe-listing'

    const recipeTitle = document.createElement('a')
    recipeTitle.className = 'recipe-listing-title'
    recipeTitle.textContent = title
    recipeTitle.setAttribute('href' , (`/edit-recipe.html#${id}`))

    const recipeIngredientSummary = document.createElement('p')
    recipeIngredientSummary.className = 'recipe-listing-ingredient-summary'
    
    const ingredientMissing = ingredients.filter(ingredient => !ingredient.isAvailable).length

    recipeIngredientSummary.textContent = generateIngSummaryText(ingredientMissing , ingredients.length)
    recipeIngredientSummary.style.color = generateIngSummaryColor(ingredientMissing, ingredients.length)

    recipeLinkDiv.appendChild(recipeTitle)
    recipeLinkDiv.appendChild(recipeIngredientSummary)

    return recipeLinkDiv
}

const renderRecipes = (recipes) => {
    const recipeListContainer = document.querySelector('.all-recipe-container')
    recipeListContainer.innerHTML = ''
    recipes.forEach( recipe => {
        recipeListContainer.appendChild(createRecipeLink(recipe))
    })
}

export {renderRecipes}