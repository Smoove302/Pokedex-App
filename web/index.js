const localhost = "http://localhost:3000/pokemon/search";
const btn = document.querySelector(".btn");

//On Click function
async function searchPoke() {
  const response = await fetch(localhost);
  const json = await response.json();
  console.log(json.data);
}

btn.addEventListener("click", searchPoke);
