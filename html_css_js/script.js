document.addEventListener("DOMContentLoaded", function () {
  const changeColorBtn = document.getElementById("change-color");
  const colored = document.getElementById("colored");

  changeColorBtn.addEventListener("click", function () {
    // skapa en slumpad färg
    const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    // ändra bakgrundsfärgen på diven
    colored.style.backgroundColor = newColor;
  });
});
