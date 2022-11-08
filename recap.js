//..1.. random user example 
const userData = () => {
    const url = 'https://randomuser.me/api/'
    fetch(url)
    .then(res => res.json())
    .then(data => displaySingleUser(data.results[0]))
}
userData()

const displaySingleUser = user =>{
//    console.log(user)
}



//..2..mealDb example 
const loadMeal = (searchText) => {
    const mealUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(mealUrl)
    .then(res => res.json())
    .then(data => displayMeal(data.meals));
}
loadMeal('fish')

const displayMeal = meals => {
    const container = document.getElementById('meals');
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.innerHTML = `
           <h1> ${meal.strMeal} is meals of this api </h1>
           <p> is free for first day </p>
           <button onclick ="displayMealDetail('${meal.strMeal}')">click me</button>
        `
        container.appendChild(div);
    });
    
    // console.log(meals);
}


const displayMealDetail = (mealName)  => {
  console.log(mealName)
}