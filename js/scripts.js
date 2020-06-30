const btnSearch = document.getElementById('btnSearch');
const txtSearch = document.getElementById('domains');
const resultArea = document.getElementById('result');
let out = "";

btnSearch.onclick = function () {
  var searchTerm = txtSearch.nodeValue;
  const url = ''
}


document
  .getElementById('fetchUserDataBtn')
  .addEventListener('click', fetchUserData);

function fetchUserData() {
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
    .then((response) => response.json())
    .then((json) => console.log(json));
}