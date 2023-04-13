const accordionQuestionHeaders = document.querySelectorAll(
  ".bc-section-question-box-top"
);

accordionQuestionHeaders.forEach((accordionQuestionHeader) => {
  accordionQuestionHeader.addEventListener("click", () => {
    console.log("salam");
    accordionQuestionHeader.classList.toggle("active");
    const accordionItemBody = accordionQuestionHeader.nextElementSibling;
    console.log(accordionItemBody);
    if (accordionQuestionHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      accordionItemBody.style.marginTop = "30px";
      accordionQuestionHeader.style.color = "green";
    } else {
      accordionItemBody.style.maxHeight = 0;
      accordionItemBody.style.marginTop = "0";
      accordionQuestionHeader.style.color = "black";
    }
  });
});
