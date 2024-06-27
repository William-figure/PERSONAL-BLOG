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
