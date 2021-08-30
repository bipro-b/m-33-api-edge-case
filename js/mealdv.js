const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //  clear data 

    searchField.value = '';
    if (searchText == '') {
        const notFound = document.getElementById('isFound');
        notFound.innerHTML = '';
        const p = document.createElement('p');

        p.innerText = 'Enter a meal name😋';

        notFound.appendChild(p);
        p.innerText = '';

    }
    else {
        // load data 
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals));//displaySearchFood(data))
    }

    //  .catch (error=> console.log(error));

}

const displaySearchResult = meals => {

    const searchResult = document.getElementById('search-result');

    //searchResult.innerHTML = '';
    searchResult.textContent = '';
    if (meals.length == 0) {
        const notFound = document.getElementById('isFound');
        //notFound.innerHTML = '';
        notFound.innerHTML = `<h3>Enter a meal name😋</h3>`;
    }
    meals.forEach(meal => {

        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <h4>${meal.strCategory}</h4>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div> 
        `;
        searchResult.appendChild(div);
    })
}

const loadMealDetail = mealId => {
    //  console.log(mealId);

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]));

}

const displayMealDetail = meal => {
    console.log(meal)

    const mealdetails = document.getElementById('meal-details');

    mealdetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `   <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">See Video </a>
    </div> `;
    mealdetails.appendChild(div);
}