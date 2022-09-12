let count = 0;

const plusOne = document.getElementById("plus");
const minusOne = document.getElementById("minus");
const numberCounter = document.getElementById("counter");
const star = document.querySelector(".star");

const starTracker = () => {
  star.innerHTML = "";
  for (let i = 1; i <= count; i++) {
    const newStar = document.createElement("div");
    newStar.classList.add("new-star");
    newStar.innerHTML = "⭐";
    star.append(newStar);
  }
};

const numberUpdater = () => {
  numberCounter.innerHTML = count;
  starTracker();
};
numberUpdater();

minusOne.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
    numberUpdater();
  }
});

plusOne.addEventListener("click", () => {
  if (count <= 9) {
    count += 1;
    numberUpdater();
  }
});
