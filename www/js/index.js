
function addNewItem(list, itemText)
{
    //adding an element of li(HTML tag)
    var listItem = document.createElement("li");
    listItem.innerText=itemText;


    list.appendChild(listItem);
}
var btnEnter=document.getElementById("btnEnter");
var insertItemText = document.getElementById("insertItemText");
insertItemText.onkeyup = function(event)
{
    //proceed when enter button is pushed.
    btnEnter.onclick= function()
    { 
        var itemText = insertItemText.value;

        if(!itemText|| itemText==""|| itemText== " ")
        {
            return false;
        }
        //call function to add the value you want to list
        addNewItem(document.getElementById("toDoList"), itemText);
        //make input hidden
        
        insertItemText.setAttribute("type","hidden");
        btnEnter.style.display="none";
    }

}




var btnNewList = document.getElementById("btnToDoList");

btnNewList.onclick = function(){
    //setting the input to be visible
    insertItemText.setAttribute("type","text");
    btnEnter.style.display="block";
    insertItemText.select();
}





var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();