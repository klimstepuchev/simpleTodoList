const todoListNode = document.querySelector(".todo-list")
const todoFormNode = document.querySelector(".todo-form")
const todoInputNode = document.querySelector("#todo-input")

todoFormNode.addEventListener("submit", function(event) {
    event.preventDefault()
    
    const inputValue = todoInputNode.value
    
    const newTask = document.createElement("li")
    newTask.innerHTML = inputValue

    todoListNode.insertAdjacentElement("beforeend", newTask)

    const deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("role", "button")
    deleteBtn.style["margin-left"] = "10px"
    deleteBtn.innerHTML = "Удалить"

    deleteBtn.addEventListener("click", function() {
        newTask.remove()
    })

    newTask.append(deleteBtn)

    todoInputNode.value = ""

    todoInputNode.focus()
})