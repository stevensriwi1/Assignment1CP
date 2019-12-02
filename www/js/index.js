
function updateListItem()
{
    //getting hold of the checkbox id and replacing to just the number and assign the item variable to the id to get hold of the span item id.
    var checkBoxId= this.id.replace("checkBox_","");
    var itemText=document.getElementById("item_"+checkBoxId);
    //if the checkbox is checked then do this
    if(this.checked)
    {
        itemText.className="checked";
    }
    else
    {
        itemText.className="unchecked";
    }
}
function renameItem()
{

}
function addNewItem(list, itemText) {

    //assign unique number to the id's through time
    var date = new Date();
    var id= "" + date.getHours() + date.getMinutes() + date.getSeconds + date.getMilliseconds();

    //adding an element of li(HTML tag)
    var listItem = document.createElement("li");
    listItem.style.cssText='border:1px solid #ccc; background: #eee; padding: 5px 10px; width:100%; color: #000;';
    

    //assigning a checkbox
    var checkBox = document.createElement("input");
    checkBox.type="checkbox";
    checkBox.id="checkBox_"+ id;

    //if checkbox is clicked then use this function
    checkBox.onclick = updateListItem;

    //assigning the assigned task to the span
    var span = document.createElement("span");
    span.innerText=itemText;
    span.style.cssText='padding-left:10px'
    span.id="item_"+ id;
    span.onclick=renameItem;

    //append these elements to listItem
    listItem.appendChild(checkBox);
    listItem.appendChild(span);

    //append list item to the UpperList
    list.appendChild(listItem);
    

}

var totalItem=0;
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

        if (!itemText || itemText == "" || itemText == " ") {
            return false;
        }
        //call function to add the value you want to list
        addNewItem(document.getElementById("toDoList"), itemText);
        //make input hidden

        insertItemText.setAttribute("type", "hidden");
        btnEnter.style.display = "none";
    }
    
}



var btnNewList = document.getElementById("btnToDoList");

btnNewList.onclick = function () {
    //setting the input to be visible
    insertItemText.setAttribute("type", "text");
    btnEnter.style.display = "block";
    insertItemText.select();
}





var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();