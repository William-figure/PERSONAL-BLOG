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
submitBtnObj.addEventListener('click', (event) => {
  event.preventDefault();
  let userInput = userInputObj.value;
  let titleInput = titleInputObj.value;
  let contentInput = contentInputObj.value;
  if(userInput && titleInput && contentInput) {
    localStorage.setItem('articleAuthor', userInput);
    localStorage.setItem('articleTitle', titleInput);
    localStorage.setItem('articleContent', contentInput);
  } else {
    alert("Missing Value!");
  }
})
