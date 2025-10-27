const title = document.getElementById("main-title");
const paragraphs = document.getElementsByClassName("content");
const contaner = document.getElementById("container");

console.log(container.parentElement);      
console.log(container.children);           
console.log(container.firstElementChild);  

title.textcontent = "welcome to the DOM Practice!";
paragraphs[0].computedStyleMap.color = "green";

document.getElementById("changeTextBtn").addEventListener("click", () => {
  title.textContent = "Text Changed via Button Click!";
});

document.getElementById("addElementBtn").addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = "New paragraph added!";
  newPara.classList.add("highlight");
  container.appendChild(newPara);
});

document.getElementById("removeElementBtn").addEventListener("click", () => {
  const lastChild = container.lastElementChild;
  if (lastChild && lastChild.tagName === "P") {
    container.removeChild(lastChild);
  }
});

