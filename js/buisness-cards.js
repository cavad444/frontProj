const additionButtons = document.querySelectorAll(
  ".bc-section-carts-addition-button"
);
additionButtons.forEach((additionButton) => {
  additionButton.addEventListener("click", () => {
    additionButton.classList.toggle("active");
    const accordionItemBody =
      additionButton.parentNode.parentNode.parentNode.nextElementSibling;
    console.log(accordionItemBody);
    if (additionButton.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      additionButton.innerHTML = "Bağla";
    } else {
      accordionItemBody.style.maxHeight = 0;
      additionButton.innerHTML = "Ətraflı";
    }
  });
});
