const last = document.getElementById("lastChild");
const lastSpan = document.getElementById("lastChild-span");
last.addEventListener("mouseover", () => {
  last.textContent = "Coming Soon";

  last.style.transition = "all 0.3s linear";
});

last.addEventListener("mouseout", () => {
  last.textContent = "Launch App";
});

lastSpan.addEventListener("mouseover", () => {
  lastSpan.textContent = "Coming Soon";
  lastSpan.style.transition = "all 0.3s linear";
});

lastSpan.addEventListener("mouseout", () => {
  lastSpan.textContent = "Launch App";
});

//Toggle

const toggle = document.querySelector(".nav-toggle");
const show = document.querySelector(".mobile-links");

console.log(show);

toggle.addEventListener("click", () => {
  //   if (show.style.display === "none") {
  //     show.style.display = "block";
  //     show.style.transition = "all 0.3s linear";
  //   } else {
  //     show.style.display = "none";
  //     show.style.transition = "all 0.3s linear";
  //   }

  //   if (show.classList.contains("show-links")) {
  //     show.classList.remove("show-links");
  //   } else {
  //     show.classList.add("show-links");
  //   }

  show.classList.toggle("show-links");
});
