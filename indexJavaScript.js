// PAGINA 1

// chiamati input e bottone , dove il bottone parte disabilitato e viene abilitato al check dell'input
const checkbox = document.querySelector("#checkbox");
const startButton = document.querySelector("#btn");
startButton.disabled = true;
const check = function () {
  if (checkbox.checked) {
    startButton.disabled = false;
  } else {
    startButton.disabled = true;
  }
};
checkbox.addEventListener("change", check);
// questo serve per far cambiare pagina
startButton.addEventListener("click", () => {
  window.location.assign("./indexPage2.html");
});
