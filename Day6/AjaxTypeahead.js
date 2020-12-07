console.log("Ajax");
const uri = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
fetch(uri)
.then(response => response.json())
.then(data => {
    cities.push(...data);
    console.log(cities);
});
function findString(words, cities) {
    return cities.filter(place => {
        const find = new RegExp(words, 'gi');
        return place.city.match(find) || place.state.match(find);
    });
}
function displayCities() {
    const matchingCity = findString(this.value, cities);
    const html = matchingCity.map(place => {
        const regex = new RegExp(this.value,'gi');
        const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class="h1">${this.value}</span>`)
        return `<li>
        <span class="name">${cityName},${stateName}</span>
        <span class="population">${place.population}</span>
        </li>`;
    }).join('');
    console.log(html);
    suggestions.innerHTML = html;
}
const searchField = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchField.addEventListener("keyup",displayCities);