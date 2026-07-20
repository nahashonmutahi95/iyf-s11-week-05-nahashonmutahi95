const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filterButtons = document.querySelectorAll(".filter");
const clearCompleted = document.getElementById("clear-completed");

let count = 0;

form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (input.value == "") {
        alert("Please enter a task.");
        return;
    }

    alert("The Add button is working!");

    let li = document.createElement("li");

li.textContent = input.value + " ";

let deleteButton = document.createElement("button");

deleteButton.textContent = "Delete";

li.appendChild(deleteButton);

todoList.appendChild(li);
    
    count++;

    itemsLeft.textContent = count + " items left";

    input.value = "";

});

/*todoList.addEventListener("click", function(event) {

    if (event.target.tagName == "BUTTON") {

        event.target.parentElement.remove();

        count--;

        itemsLeft.textContent = count + " items left";

    }

});*/
todoList.addEventListener("click", function(event) {

    if (event.target.tagName == "LI") {

        event.target.classList.toggle("completed");

    }

    if (event.target.tagName == "BUTTON") {

        event.target.parentElement.remove();

        count--;

        itemsLeft.textContent = count + " items left";

    }

});

/*making the filter button work*/
filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let filter = button.getAttribute("data-filter");

        let tasks = todoList.getElementsByTagName("li");

        for (let i = 0; i < tasks.length; i++) {

            if (filter == "all") {

                tasks[i].style.display = "block";

            }

            else if (filter == "active") {

                if (tasks[i].classList.contains("completed")) {

                    tasks[i].style.display = "none";

                } else {

                    tasks[i].style.display = "block";

                }

            }

            else if (filter == "completed") {

                if (tasks[i].classList.contains("completed")) {

                    tasks[i].style.display = "block";

                } else {

                    tasks[i].style.display = "none";

                }

            }

        }

    });

});


clearCompleted.addEventListener("click", function() {

    let tasks = todoList.getElementsByTagName("li");

    for (let i = tasks.length - 1; i >= 0; i--) {

        if (tasks[i].classList.contains("completed")) {

            tasks[i].remove();

            count--;

        }

    }

    itemsLeft.textContent = count + " items left";

});