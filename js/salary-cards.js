const tabmenus = document.querySelectorAll(".sc-tabmenu");

const scTabMenuButtons = document.querySelectorAll(".sc-tabmenu-button");

const scTabMenuLaw = document.querySelector(".sc-tabmenu-law");
const scTabMenuSalary = document.querySelector(".sc-tabmenu-salary");

// Tabmenu starts

scTabMenuSalary.style.display = "none";

scTabMenuButtons.forEach((scTabMenuButton) => {
  scTabMenuButton.addEventListener("click", () => {
    tabmenus.forEach((tabcontent) => {
      tabcontent.style.display = "none";
    });

    if (scTabMenuButton.id == "sc-button-law") {
      if (scTabMenuButton.classList.contains("active")) {
        scTabMenuLaw.style.display = "flex";
      } else {
        scTabMenuLaw.style.display = "flex";
        scTabMenuButton.classList.add("active");
        scTabMenuButton.style.color = "#343836";
        const otherButton = document.querySelector("#sc-button-salary");
        otherButton.style.color = "#c1c1c1";
        otherButton.classList.remove("active");
        scTabMenuSalary.style.display = "none";
      }
    } else {
      if (scTabMenuButton.classList.contains("active")) {
        scTabMenuSalary.style.display = "flex";
      } else {
        scTabMenuSalary.style.display = "flex";
        scTabMenuButton.classList.add("active");
        scTabMenuButton.style.color = "#343836";
        const otherButton = document.querySelector("#sc-button-law");
        otherButton.style.color = "#c1c1c1";
        otherButton.classList.remove("active");
        scTabMenuLaw.style.display = "none";
      }
    }
  });
});

// -----------------
const accordionQuestionHeaders = document.querySelectorAll(
  ".bc-section-question-box-top"
);

accordionQuestionHeaders.forEach((accordionQuestionHeader) => {
  accordionQuestionHeader.addEventListener("click", () => {
    console.log("salam");
    accordionQuestionHeader.classList.toggle("active");
    const accordionItemBody = accordionQuestionHeader.nextElementSibling;
    const accordionItemQuestion = accordionQuestionHeader.firstChild;
    console.log(accordionItemBody);
    if (accordionQuestionHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      accordionItemBody.style.marginTop = "30px";
      accordionItemQuestion.style.color = "green";
    } else {
      accordionItemBody.style.maxHeight = 0;
      accordionItemBody.style.marginTop = "0";
      accordionItemQuestion.style.color = "black";
    }
  });
});
