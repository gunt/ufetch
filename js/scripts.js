const btnSearch = document.getElementById('btnSearch');
const txtSearch = document.getElementById('domains');
const resultArea = document.getElementById('result');
// const discussion = disc;
let out = "";

btnSearch.onclick = function () {
  var searchTerm = txtSearch.value;
  const url = `reddit.com/r/webdev.json=${searchTerm}`;
  console.log(url)
  fetch(url, {
      mode: 'no-cors'
    }).then(function (data) {
      return data.json();
    })
    .then(function (jsonObject) {
      console.log(jsonObject);
      for (disc in jsonObject) {
        const discInfo = new Array(jsonObject[disc].selftext, jsonObject[disc].title, jsonObject[disc].images.source.url)
        discOut(discInfo);
      }
      resultArea.innerHTML = out;
    })
    .catch(function (e) {
      console.log("Error: + e");
    });
}


function discOut(disc) {
  console.log(disc);
  out += `<div class="disc">
  <div class="discImage"><img scr="${disc[2]}"/></div>
  <div class="discText">
  <h2>${disc[0]}</h2>
  <h2>${disc[1]}</h2>
  </div>
  </div>`;

}

// document
//   .getElementById('btnSearch')
//   .addEventListener('click', fetchUserData);

// function fetchUserData() {
//   fetch('https://www.reddit.com/r/webdev.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }