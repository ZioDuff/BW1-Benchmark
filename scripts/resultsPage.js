const btnContainer = document.querySelector("#btnContainer")
const btn = document.createElement("button")
btn.innerText = "RATE US"
btnContainer.appendChild(btn)

btn.addEventListener("click", () => {
  window.location.href = "rateUs.html"
})
