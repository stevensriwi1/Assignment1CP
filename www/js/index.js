var storage = window.localStorage;
var keyId = localStorage.length;
//assign unique number to the id's through time
var date;
var id;
var UlList = document.getElementById("toDoList");



function updateListItem() {
    //getting hold of the checkbox id and replacing to just the number and assign the item variable to the id to get hold of the span item id.
    var checkBoxId = this.id.replace("checkBox_", "");
    var itemText = document.getElementById("item_" + checkBoxId);
    //if the checkbox is checked then do this
    if (this.checked) {
        itemText.className = "checked";
    }
    else {
        itemText.className = "unchecked";
    }
}
function renameItem() {
    var newItemText = prompt("What should the new item be renamed?");

    if (!newItemText || newItemText == "" || newItemText == " ") {
        return false;
    }

    this.innerText = newItemText;

    var clickedSpanId = this.id.replace("item_", "");
    storage.setItem(clickedSpanId, newItemText);
}
function deleteItem() {

    var clickedItemId = this.id.replace("btn_", "");
    //if checkbox is checked then proceed, otherwise return false
    if (document.getElementById("checkBox_" + clickedItemId).checked) {
        var deletingItem = document.getElementById("li_" + clickedItemId);
        deletingItem.parentNode.removeChild(deletingItem);
        storage.removeItem(clickedItemId);
    }
    else {
        return false;
    }
}

function addNewItem(list, itemText) {
    //date = new Date();
    //id = "" + date.getHours() + date.getMinutes() + date.getSeconds + date.getMilliseconds();

    //adding an element of li(HTML tag)
    var listItem = document.createElement("li");
    listItem.id = "li_" + keyId;
    listItem.style.cssText = 'border:1px solid #ccc; background: #eee; padding: 5px 10px; width:100%; color: #000;';


    //assigning a checkbox
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "checkBox_" + keyId;

    //if checkbox is clicked then use this function
    checkBox.onclick = updateListItem;

    //assigning the assigned task to the span
    var span = document.createElement("span");
    span.innerText = itemText;
    span.style.cssText = 'padding-left:10px'
    span.id = "item_" + keyId;
    //rename
    span.onclick = renameItem;

    //delete
    var deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerText = "Delete";
    deleteButton.style.cssFloat = 'right';
    deleteButton.id = "btn_" + keyId;
    deleteButton.onclick = deleteItem;

    //append these elements to listItem
    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    //append list item to the UpperList
    list.appendChild(listItem);


}

var btnEnter = document.getElementById("btnEnter");
var insertItemText = document.getElementById("insertItemText");
insertItemText.onkeyup = function (event) {

    //proceed when enter button is pushed.
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        btnEnter.click();
    }

    btnEnter.onclick = function () {
        var itemText = insertItemText.value;
        storage.setItem(keyId, itemText); // Pass a key name and its value to add or update that key.
        var itemTextValue = storage.getItem(keyId); // Pass a key name to get its value
        if (!itemText || itemText == "" || itemText == " ") {
            return false;
        }
        //call function to add the value you want to list
        addNewItem(UlList, itemTextValue);
        //make input hidden
        insertItemText.setAttribute("type", "hidden");
        btnEnter.style.display = "none";

        keyId++;
    }

}



var btnNewList = document.getElementById("btnToDoList");

btnNewList.onclick = function () {
    //setting the input to be visible
    insertItemText.setAttribute("type", "text");
    btnEnter.style.display = "block";
    insertItemText.select();
}


for (var i = 0; i < storage.length; i++) {
    id = i;
    //adding an element of li(HTML tag)
    var listItem = document.createElement("li");
    listItem.id = "li_" + id;
    listItem.style.cssText = 'border:1px solid #ccc; background: #eee; padding: 5px 10px; width:100%; color: #000;';

    //assigning a checkbox
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "checkBox_" + id;

    //if checkbox is clicked then use this function
    checkBox.onclick = updateListItem;

    //assigning the assigned task to the span
    var span = document.createElement("span");
    span.innerText = storage.getItem(i);
    span.style.cssText = 'padding-left:10px'
    span.id = "item_" + id;
    //rename
    span.onclick = renameItem;

    //delete
    var deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerText = "Delete";
    deleteButton.style.cssFloat = 'right';
    deleteButton.id = "btn_" + id;
    deleteButton.onclick = deleteItem;

    //append these elements to listItem
    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    //append list item to the UpperList
    UlList.appendChild(listItem);
}





