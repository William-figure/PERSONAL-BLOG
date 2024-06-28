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

const articleAuthor = [];
articleAuthor.push(localStorage.getItem("articleAuthor"));
const articleTitle = [];
articleTitle.push(localStorage.getItem("articleTitle"));
const articleContent = [];
articleContent.push(localStorage.getItem("articleContent"));

console.log(articleAuthor);
console.log(articleTitle);
console.log(articleContent);

const postIt = document.querySelector("#post-target");
postIt.innerHTML += `
  <article>
    <h2>${articleTitle[0]}</h2>
    <pre>${articleContent[0]}</pre>
    <h6>${articleAuthor[0]}</h6>
  </article>
`;
