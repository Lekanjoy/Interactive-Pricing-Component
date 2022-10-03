let range = document.getElementById("range");
let pageViews = document.getElementById("views");
let price = document.getElementById("price");
let priceDesktop = document.getElementById("priceDesk");
let duration = document.getElementById("duration");
let checkbox = document.getElementById("checkbox");
let label = document.getElementById("label");
console.log(price);


const pageViewsValues = ["10K", "50K", "100K", "500K", "1M"];
const priceValues = [8, 12, 16, 24, 36];
const discount = 0.25;

// change label color on checkbox change
checkbox.addEventListener("change", () => {
setValueAndBGColor();
duration.innerHTML = checkbox.checked ? "/ year" : "/ month";
});

range.addEventListener("change", () => {
  pageViews.innerHTML = pageViewsValues[range.value];
  setLowerFillColor();
    setValueAndBGColor();
});

// Getting Values and changing Checked bg color
function setValueAndBGColor() {
  pageViews.innerHTML = pageViewsValues[range.value];
  setLowerFillColor();
  if (checkbox.checked) {
    label.style.backgroundColor = "hsl(174, 86%, 45%)";
    price.innerHTML = `$${(priceValues[range.value] * discount).toFixed(2)}`;
    priceDesktop.innerHTML = `$${(priceValues[range.value] * discount).toFixed(2)}`;
  } else {
    label.style.backgroundColor = "hsl(224, 65%, 95%)";
    price.innerHTML = `$${priceValues[range.value]}.00`;
  }
}

// set lower fill color in range input
function setLowerFillColor() {
  let percent = ((range.value - range.min) / (range.max - range.min)) * 100;
  range.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${percent}%, hsl(224, 65%, 95%) ${percent}%, hsl(224, 65%, 95%) 100%)`;
}
