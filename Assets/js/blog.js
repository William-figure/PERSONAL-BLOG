"use strict";
const blogTitleObj = document.querySelector("#blog-page-title");

toggleCircleObj.addEventListener("click", () => {
  if (currentTcColor == "#000") {
    toggleCircleObj.style.backgroundColor = "#fff";
    bodyObj.style.backgroundColor = "#000";
    bodyObj.style.color = "#fff";
    blogTitleObj.style.color = "#fff";
    currentTcColor = "#fff";
  } else {
    toggleCircleObj.style.backgroundColor = "#000";
    bodyObj.style.backgroundColor = "#fff";
    bodyObj.style.color = "#000";
    blogTitleObj.style.color = "#000";
    currentTcColor = "#000";
  }
});

const backBtnObj = document.querySelector("#back-btn");
backBtnObj.addEventListener("click", () => {
  window.open("../../index.html", "_self");
});
console.log(userInput);
const postIt = document.querySelector("#post-target");
postIt.innerHTML += `
  <article>
    <h2>${localStorage.getItem("articleTitle")}</h2>
    <hr>
    <pre>${localStorage.getItem("articleContent")}</pre>
    <h6>${localStorage.getItem("articleAuthor")}</h6>
  </article>
`;