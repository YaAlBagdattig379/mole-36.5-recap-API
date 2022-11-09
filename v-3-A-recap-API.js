
//..2..mealDb example 
const toggleSpinner = diplayStyle  =>{
    document.getElementById('spinner').style.display = diplayStyle;
}
const toggleSearchResults = diplayStyle  =>{
    document.getElementById('meals').style.display = diplayStyle;
}
 
const searchMeal = () =>{
   let searchText = document.getElementById("search-input").value;
   // display spinner 
   toggleSpinner('block')
   toggleSearchResults('none')
   loadMeal(searchText)
   document.getElementById("search-input").value ='';
}

const loadMeal = (searchText) => {
    const mealUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(mealUrl)
    .then(res => res.json())
    .then(data => displayMeal(data.meals));
}
// loadMeal('fish')
const displayMeal = meals => {
    const container = document.getElementById('meals');
    container.textContent = '';
    if(! meals){ // results are not found ! eita ui te    dekhate paro
        console.log('results are not found !')
    }
    meals?.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div');
        div.innerHTML = `
           <h1> ${meal.strMeal} is meals of this api </h1>
           <P>${meal.strCategory ? meal.strCategory : ' '}</p>
           <button onclick ="displayMealDetail('${meal.strMeal}')">click me</button>
           `
        container.appendChild(div);
    });
    // to stop spinner 
    toggleSpinner('none');
    toggleSearchResults('block')
}
const displayMealDetail = (mealName)  => {
  console.log(mealName)
}