let obj = document.querySelector(".objednaj");

obj.onclick = () => {
    localStorage.setItem("produkt", document.querySelector(".produkt-meno").textContent);
};