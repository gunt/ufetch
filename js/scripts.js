document
  .getElementById('fetchUserDataBtn')
  .addEventListener('click', fetchUserData);

function fetchUserData() {
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
    .then((response) => response.json())
    .then((json) => console.log(json));
}