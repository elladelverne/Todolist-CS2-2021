console.log('script loaded')

//add click event handler on button
let $button = document.getElementById('addTodo')
let $textbox = document.getElementById('userInput')
let $list = document.getElementById('list')
let $head = document.getElementById('header')
$button.onclick = addTodo
$head.onclick = changeColor
//define the button click handler
function addTodo(event) {
    //console.log("button was clicked")
    //$button.style.backgroundColor = 'teal'
    
    //get text from text box
    let newTodoText = $textbox.value
    //creat new list item
    let $newTodoItem = document.createElement('li')
    $newTodoItem.innerHTML= newTodoText
    //list item in list
    $list.append($newTodoItem)
}
function changeColor(){
    $head.style.color = 'red'
}