console.log('script loaded')

//add click event handler on button
let $button = document.getElementById('addTodo')
let $textbox = document.getElementById('userInput')
let $list = document.getElementById('list')
let $head = document.getElementById('header')
let $completed = document.getElementById('completed')
$button.onclick = addTodo
$head.onclick = changeColor
//define the button click handler
function addTodo(event) {
    //console.log("button was clicked")
    //$button.style.backgroundColor = 'teal'
    
    //get text from text box
    let newTodoText = $textbox.value

    $textbox.value = ''
    //creat new list item
    let $newTodoItem = document.createElement('li')
    $newTodoItem.innerHTML= `${newTodoText} <button onclick='taskDone(event)'>Done</button> <button onclick='deleteTask(event)'>Delete</button>`
    
    //list item in list
    $list.append($newTodoItem)
}
function changeColor(){
    $head.style.color = 'red'
}

function taskDone(event){
    let $listItem = event.target.parentElement
    console.log($listItem)
    event.target.remove()
    $listItem.style.textDecoration='line-through'
    $completed.append($listItem)
}
function deleteTask(event){
    event.target.parentElement.remove()
}