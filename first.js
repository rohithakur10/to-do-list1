let listContainer = document.getElementById ("list_container")
let inputBox = document.getElementById("input_box")

function addTask () {
    if (inputBox.value === "") {
        alert ("Add some Task")
    }
        else {
            let task = document.createElement ("li")
            task.textContent = inputBox.value
            listContainer.appendChild(task)

            let span = document.createElement("span");
            span.textContent = "\u00d7";
            task.appendChild(span)
        }
        inputBox.value = ""
}
listContainer.addEventListener("click", (el) =>{
    if(el.target.tagName === "LI") {
        el.target.classList.toggle("checked")
    }
    else if (el.target.tagName === "SPAN") {
        el.target.parentElement.remove()
    }
})