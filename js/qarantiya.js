const tabmenus = document.querySelectorAll(".el-tabmenu");

const elTabMenuButtons = document.querySelectorAll(".el-tabmenu-button");

const elTabMenuEssential = document.querySelector(".el-tabmenu-essential");
const elTabMenuCreditConditions = document.querySelector(
  ".el-tabmenu-credit-conditions"
);

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

// Filter starts

const sectionQarantiyaFilters = document.querySelectorAll(
  ".section-qarantiya-filter"
);
const sectionQarantiyaBoxes = document.querySelectorAll(
  ".section-qarantiya-box"
);

sectionQarantiyaFilters.forEach((sectionQarantiyaFilter) => {
  sectionQarantiyaFilter.addEventListener("click", () => {
    console.log("salam");
    sectionQarantiyaBoxes.forEach((sectionQarantiyaBox) => {
      sectionQarantiyaBox.style.display = "none";
    });
    if (sectionQarantiyaFilter.classList.contains("active")) {
    } else {
      sectionQarantiyaFilters.forEach((sectionQarantiyaFilterR) => {
        sectionQarantiyaFilterR.classList.remove("active");
      });
      sectionQarantiyaFilter.classList.add("active");
    }
    sectionQarantiyaFilters.forEach((sectionQarantiyaFilter) => {
      if (sectionQarantiyaFilter.classList.contains("active")) {
        sectionQarantiyaFilter.style.border = "1px solid #058d66;";
        switch (sectionQarantiyaFilter.id) {
          case "all":
            sectionQarantiyaBoxes.forEach((sectionQarantiyaBox) => {
              sectionQarantiyaBox.style.display = "flex";
            });
            break;
          case "et":
            document.querySelector("#et-box").style.display = "flex";
            break;
          case "iq":
            document.querySelector("#iq-box").style.display = "flex";
            break;
          case "aogq":
            document.querySelector("#aogq-box").style.display = "flex";
            break;
          case "mvs":
            document.querySelector("#mvs-box").style.display = "flex";
            break;
          case "o":
            document.querySelector("#o-box").style.display = "flex";
            break;
          case "gv":
            document.querySelector("#gv-box").style.display = "flex";
            break;
          case "k":
            document.querySelector("#k-box").style.display = "flex";
            break;
        }
      } else {
        sectionQarantiyaFilter.style.border = "1px solid #e8e8e8;";
      }
    });
  });
});

const qarantiyaForm = document.querySelector(".qarantiya-form");
const qarantiyaInputs = document.querySelectorAll(".q-input");
const modal = document.querySelector(".pt-section-pos-modal");
const modalContent = document.querySelector(".modal-content");
let qarantiyaName;
let qarantiyaNumber;

qarantiyaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  qarantiyaInputs.forEach((qarantiyaInput) => {
    if (qarantiyaInput.id == "q-name") {
      qarantiyaName = qarantiyaInput.value;
    } else {
      qarantiyaNumber = qarantiyaInput.value;
    }
  });
  modalContent.innerHTML = `
  <i class="fa-solid fa-xmark modal-close"></i>
  <span>Name :${qarantiyaName}</span>
  <span>number :${qarantiyaNumber}</span>
  `;
  modal.style.display = "flex";
  const modalCloseButton = document.querySelector(".modal-close");
  modalCloseButton.addEventListener("click", () => {
    modal.style.display = "none";
  });
  qarantiyaForm.reset();
});
