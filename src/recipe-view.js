import {findRecipe,updateRecipe , createIngredient,removeRecipe} from './utils/recipe-manager'
import {renderIngredients} from './utils/recipe-edit-dom'

const recipeId = location.hash.substring(1)
const foundRecipe = findRecipe(recipeId)

if(!foundRecipe){
    location.assign('/')
}

renderIngredients(recipeId)

document.querySelector('#recipe-title-input').value = foundRecipe.title
document.querySelector('#recipe-steps-area-id').value = foundRecipe.description


document.querySelector('#recipe-title-input').addEventListener('input', (event) => {
   let valueText = event.target.value
    updateRecipe(recipeId,{title: valueText})
})

document.querySelector('#recipe-steps-area-id').addEventListener('input', (event) => {
    let valueText = event.target.value
     updateRecipe(recipeId,{description: valueText})
 })

 document.querySelector('#ingredient-add-button-id').addEventListener('click' , (event)=> {
    const ingredient = document.querySelector('#ingredient-input-id').value
    if(ingredient.trim()){
        createIngredient(recipeId, ingredient)
        renderIngredients(recipeId)  
    }
    document.querySelector('#ingredient-input-id').value = ''
 })

 document.querySelector('#recipe-delete-button-id').addEventListener('click' , (event) => {
    removeRecipe(recipeId)
    location.assign('/')
 })