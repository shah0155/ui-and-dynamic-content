const userInput = document.getElementById("user-input");
const btn = document.getElementById("trigger-click");
const displayData = document.getElementById("display-data");
const err = document.querySelector(".error");

function addItem() {
    err.textContent = null;
    userInput.value = userInput.value.trim();
    if (userInput.value !== "") {
        //Create a list item
        let listItem = document.createElement("li");
        listItem.textContent = userInput.value;
        displayData.appendChild(listItem);
    } else {
        err.textContent = "Please enter a value.";
        alert("Nothing entered!");
    }

}
btn.addEventListener("click", addItem);