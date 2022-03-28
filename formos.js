let objText = document.querySelector("#produkty-na-obj");
let submitos = document.querySelector("#submitos");


objText.textContent = localStorage.getItem("produkt");
localStorage.clear();