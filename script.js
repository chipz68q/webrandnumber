window.addEventListener("load", function () {
  const resultElement = document.querySelector("#result");
  const generateButton = document.querySelector("#buttonGenerator");
  generateButton.addEventListener("click", function () {
    const result = Math.random();
    resultElement.textContent = result;
  });
});
