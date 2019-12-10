var storage = window.localStorage;
var keyId=localStorage.length;
var UlTest = document.getElementById("testUL");
var i;
for (i = 0; i < storage.length; i++) {
    var LiTest=document.createElement("li");
    LiTest.innerText=storage.getItem(i);
    UlTest.appendChild(LiTest);
}
/* 
function addNewItemTest(UlTest,itemText)
{
    var LiTest=document.createElement("li");

    LiTest.innerText=storage.getItem(keyId);


    UlTest.appendChild(LiTest);

}
*/


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
}
function deleteItem() {

    var clickedItemId = this.id.replace("btn_", "");
    //if checkbox is checked then proceed, otherwise return false
    if (document.getElementById("checkBox_" + clickedItemId).checked) {
        document.getElementById("li_" + clickedItemId).style.display = "none";
    }
    else {
        return false;
    }
}

function addNewItem(list, itemText) {

    //assign unique number to the id's through time
    var date = new Date();
    var id = "" + date.getHours() + date.getMinutes() + date.getSeconds + date.getMilliseconds();

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
    span.innerText = itemText;
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
        addNewItem(document.getElementById("toDoList"), itemTextValue);
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





