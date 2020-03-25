//DOM Manipulation
let listTitle = document.getElementById("listTitle");
let listItem = document.querySelectorAll('ul li');
let groceryItems = document.getElementsByClassName('groceryItem');
let groceryList = document.getElementById('groceryList');
let listDiv = document.getElementById("list");
let inputBox = document.getElementById("listInput");
let button = document.getElementById("clickMe")
let bodyColor = "white";
let inputField = document.getElementById("inputField");
let errorMessage = document.createElement('p');
let xButtons = document.getElementsByClassName('deleteButton');
errorMessage.style.color = "red";
inputField.appendChild(errorMessage);

const xButtonEventAdd = button => {
    button.addEventListener('click', event => event.target.parentNode.parentNode.removeChild(event.target.parentNode));
}

const itemCrossoffEventsAdd = item => {
    item.style.cursor = "pointer";
    item.addEventListener('click', event => {
        event.target.style.textDecoration = "line-through";
    })
}

const addInputToList = () => {
    if (inputBox.value.length > 0) {
        let newGroceryItem = document.createElement('li');
        let newP = document.createElement('p');
        newP.innerText = inputBox.value;
        itemCrossoffEventsAdd(newP);
        newGroceryItem.className = "groceryItem";
        newGroceryItem.appendChild(newP);

        //add xButton and its event listener
        let xButton = document.createElement('button');
        xButton.className = "deleteButton";
        xButton.innerText = "x";
        xButtonEventAdd(xButton);
        newGroceryItem.appendChild(xButton);


        groceryList.appendChild(newGroceryItem);
        inputBox.value = "";
        errorMessage.innerText = "";
    } else {
        errorMessage.innerText = "Please enter a value";        
    }
    
}

groceryItems[2].style.color = "red";
groceryItems[1].style.color = "lightgreen";
listTitle.style.textAlign = "center";
listDiv.firstElementChild.style.fontSize = "45px";

console.log(document.body.childNodes);
console.log(listItem);





listTitle.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "lightblue";
});

listTitle.addEventListener("mouseleave", event => {
    event.target.style.backgroundColor = "transparent";
});

button.addEventListener('click', event => {
    addInputToList();
});

inputBox.addEventListener('keypress', event => {
    if (event.keyCode === 13) {
        addInputToList();
    }
});

for (each of xButtons) {
    xButtonEventAdd(each);
}

for (each of groceryItems) {
    itemCrossoffEventsAdd(each);
}