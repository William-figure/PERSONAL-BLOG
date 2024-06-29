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
const articleTitle = JSON.parse(localStorage.getItem("articleTitle").split(","))
const articleContent = JSON.parse(localStorage.getItem("articleContent").split(","))
const articleAuthor = JSON.parse(localStorage.getItem("articleAuthor").split(","))
const articleDate = JSON.parse(localStorage.getItem("articleDate"))
const postIt = document.querySelector("#post-target");
for (let i = 0; i < articleTitle.length; i++) {
  postIt.innerHTML += `
    <article class="flex-container-column">
      <h2 class="article-title flex-item">${articleTitle[i]}</h2>
      <hr>
      <pre class="article-content flex-item">${articleContent[i]}</pre>
      <h6 class="article-author flex-item">${articleAuthor[i]} ${articleDate}</h6>
    </article>
  `;
}