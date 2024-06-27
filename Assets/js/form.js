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
const userInput = document.querySelector('#user-input')
const titleInput = document.querySelector('#title-input');
const contentInput = document.querySelector('#content-input');
submitBtnObj.addEventListener('click', (event) => {
  event.preventDefault();
  if(userInput && titleInput && contentInput) {
    let articleAuthor = userInput.value;
    let articleTitle = titleInput.value;
    let articleContent = contentInput.value;
    const postIt = document.querySelector('#post-target');
    postIt.innerHTML += `
      <article>
        <h3>${articleTitle}</h3>
        <pre>${articleContent}</pre>
        <h4>${articleAuthor}</h4>
      </article> 
    `
  } 
})
