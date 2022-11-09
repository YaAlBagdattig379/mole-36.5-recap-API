// toggleSpinner and toggleSearchResults 
const loadingToggleSpinner = (spinnerStyle) =>{
    document.getElementById('spinner').style.display = spinnerStyle ;
}
const toggleSearchResults = (previousData) =>{
    document.getElementById('meals').style.display = previousData; 
}
// seach meals
const searchMeal = () =>{
    const inputText = document.getElementById('search-input').value;
    document.getElementById('search-input').value ='';
    loadMeal(inputText)
    loadingToggleSpinner('block')
    toggleSearchResults('none');
}
const loadMeal = (inputData) =>{
    const mealsUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
    fetch(mealsUrl)
    .then(res => res.json())
    .then(data => findMeals(data.meals))
}
const findMeals = (meals) =>{
    console.log(meals)
    const displayData = document.getElementById('meals');
    displayData.textContent = '';
    if(!meals){
        console.log('result is not found.')// eita UI te dekhate paro'result is notfound'
    }
    meals?.forEach(meal => {// '?' ei sign er mane jodi sotti hoi tahole virote jabe otherwise jabe na
    const div = document.createElement('div');
    div.innerHTML = ` 
    <h1>searched Data for: ${meal.strCategory} </h1> 
    <h3> the strMeal is: ${meal.strMeal} </h3> 
    <p> the idMeal is: ${meal.strTags} </p> 
    <button onclick="toSeeMealId('${meal.idMeal}')">click me</button> 
    `
    displayData.appendChild(div);
    console.log(meal)        
    });
    // toggle spinner style and meals     
    toggleSearchResults('block')
    loadingToggleSpinner('none')   
}
const toSeeMealId = (mealdId) =>{
    console.log(mealdId) // to see mealId 
}