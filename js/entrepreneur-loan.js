const rangeSliderPriceInput = document.querySelector(
  ".range-slider-price-input"
);
const rangeSliderMonthInput = document.querySelector(
  ".range-slider-month-input"
);
const rangeSliderRangeMonthInput = document.querySelector(
  ".range-slider-range-input-month"
);
const rangeSliderRangePriceInput = document.querySelector(
  ".range-slider-range-input-price"
);

const monthlyLabel = document.querySelector(
  ".el-section-calculator-monthly-price"
);

const percentLabel = document.querySelector(
  ".el-section-calculator-monthly-percentage"
);
const tabmenus = document.querySelectorAll(".el-tabmenu");

const elTabMenuButtons = document.querySelectorAll(".el-tabmenu-button");

const elTabMenuEssential = document.querySelector(".el-tabmenu-essential");
const elTabMenuCreditConditions = document.querySelector(
  ".el-tabmenu-credit-conditions"
);

// Range slider begins

rangeSliderRangePriceInput.addEventListener("input", function () {
  rangeSliderPriceInput.value = this.value;
  const monthlyLabelText =
    this.value / rangeSliderMonthInput.value +
    (this.value * parseFloat(percentLabel.innerText)) / 100;
  monthlyLabel.innerText = monthlyLabelText.toString().slice(0, 7);
});

rangeSliderRangeMonthInput.addEventListener("input", function () {
  rangeSliderMonthInput.value = this.value;
  const monthlyLabelText =
    rangeSliderRangePriceInput.value / this.value +
    (rangeSliderRangePriceInput.value * parseFloat(percentLabel.innerText)) /
      100;
  monthlyLabel.innerText = monthlyLabelText.toString().slice(0, 7);
});

// Range slider ends

// Tab menu begins

elTabMenuCreditConditions.style.display = "none";

elTabMenuButtons.forEach((elTabMenuButton) => {
  elTabMenuButton.addEventListener("click", () => {
    tabmenus.forEach((tabcontent) => {
      tabcontent.style.display = "none";
    });

    if (elTabMenuButton.id == "el-button-essential") {
      if (elTabMenuButton.classList.contains("active")) {
        elTabMenuEssential.style.display = "flex";
      } else {
        elTabMenuEssential.style.display = "flex";
        elTabMenuButton.classList.add("active");
        elTabMenuButton.style.color = "#343836";
        const otherButton = document.querySelector(
          "#el-button-credit-conditions"
        );
        otherButton.style.color = "#c1c1c1";
        otherButton.classList.remove("active");
        elTabMenuCreditConditions.style.display = "none";
      }
    } else {
      if (elTabMenuButton.classList.contains("active")) {
        elTabMenuCreditConditions.style.display = "flex";
      } else {
        elTabMenuCreditConditions.style.display = "flex";
        elTabMenuButton.classList.add("active");
        elTabMenuButton.style.color = "#343836";
        const otherButton = document.querySelector("#el-button-essential");
        otherButton.style.color = "#c1c1c1";
        otherButton.classList.remove("active");
        elTabMenuEssential.style.display = "none";
      }
    }
  });
});
// Tab menu ends
