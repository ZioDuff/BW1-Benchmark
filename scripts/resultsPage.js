const risposteGiuste = localStorage.getItem("correctQuestion");
const giuste = risposteGiuste;

console.log(giuste);

const btn = document.getElementById("change");
btn.addEventListener("click", () => {
  window.location.href = "rateUs.html";
});
