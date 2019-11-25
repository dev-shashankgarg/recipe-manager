import {findRecipe , updateIngredient , removeIngredient} from './recipe-manager'

const createTableHeader = () =>{
    const tableRow = document.createElement('tr')

    const tableHeader1 = document.createElement('th')
    tableHeader1.textContent = 'Available'
    const tableHeader2 = document.createElement('th')
    tableHeader2.textContent = 'Ingredient'
    const tableHeader3 = document.createElement('th')
    tableHeader3.textContent = 'Remove'

    tableRow.appendChild(tableHeader1)
    tableRow.appendChild(tableHeader2)
    tableRow.appendChild(tableHeader3)

    return tableRow
}

const createTableRow = (recipeId,ingredient) => {
    const tableRow = document.createElement('tr')

    const tableData1 = document.createElement('td')

    const availableCheckBox = document.createElement('input')
    availableCheckBox.type = 'checkbox'
    availableCheckBox.checked = ingredient.available

    availableCheckBox.addEventListener('change', (event) => {
        const ingredientStatus = event.target.checked
        updateIngredient(recipeId , ingredient.id , {available: ingredientStatus})
        renderIngredients(recipeId)
    })

    tableData1.appendChild(availableCheckBox)

    const tableData2 = document.createElement('td')
    tableData2.textContent = ingredient.name

    const tableData3 = document.createElement('td')

    const deleteButton = document.createElement('button')
    deleteButton.className = 'button-ing-delete'
    deleteButton.textContent = 'remove'

    deleteButton.addEventListener('click' , (event) => {
        removeIngredient(recipeId , ingredient.id)
        renderIngredients(recipeId)
    })

    tableData3.appendChild(deleteButton)

    tableRow.appendChild(tableData1)
    tableRow.appendChild(tableData2)
    tableRow.appendChild(tableData3)

    return tableRow
}

const createTable = (recipeId , ingredients) => {
const container = document.querySelector('.ingredient-container')
container.innerHTML = ''

const table  = document.createElement('table')
table.appendChild(createTableHeader())
ingredients.forEach(ingredient => table.appendChild(createTableRow(recipeId,ingredient)))

container.appendChild(table)
}

const renderIngredients = (recipeId) => {
    const foundRecipe = findRecipe(recipeId)
    if(foundRecipe){
        createTable(foundRecipe.id ,foundRecipe.ingredients)
    }
}

export {renderIngredients}