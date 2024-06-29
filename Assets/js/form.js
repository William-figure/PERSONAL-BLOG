"use strict";
const titleObj = document.querySelector("#page-title");

toggleCircleObj.addEventListener("click", () => {
  if (currentTcColor == "#000") {
    toggleCircleObj.style.backgroundColor = "#fff";
    bodyObj.style.backgroundColor = "#000";
    bodyObj.style.color = "#fff";
    titleObj.style.color = "#fff";
    currentTcColor = "#fff";
  } else {
    toggleCircleObj.style.backgroundColor = "#000";
    bodyObj.style.backgroundColor = "#fff";
    bodyObj.style.color = "#000";
    titleObj.style.color = "#000";
    currentTcColor = "#000";
  }
});

const submitBtnObj = document.querySelector('#submit-btn');
const userInputObj = document.querySelector('#username-input');
const titleInputObj = document.querySelector('#title-input');
const contentInputObj = document.querySelector('#content-input');
const d = new Date();
const userInput = [];
const titleInput = [];
const contentInput = [];
const articleForm = {
  articleAuthor: userInput,
  articleTitle: titleInput,
  articleContent: contentInput,
  articleDate: `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
};
submitBtnObj.addEventListener('click', (event) => {
  event.preventDefault();
  if (userInputObj.value === ""|| titleInputObj.value === ""|| contentInputObj.value === "") {
    alert("Missing Value!");
    return;
  }
  confirm("Please double check before submission, if ready, please hit OK.")
  userInput.push(userInputObj.value);
  titleInput.push(titleInputObj.value);
  contentInput.push(contentInputObj.value);
  localStorage.setItem('articleAuthor', articleForm.articleAuthor);
  localStorage.setItem('articleTitle', articleForm.articleTitle);
  localStorage.setItem('articleContent', articleForm.articleContent);
  localStorage.setItem('articleDate', articleForm.articleDate);
})
