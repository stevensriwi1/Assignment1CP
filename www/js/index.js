
function addNewItem()
{
    //adding an element of li(HTML tag)
    var listItem = document.createElement("li");
    listItem.innerText="Helllllllllo";


    var list= document.getElementById("toDoList");
    list.appendChild(listItem);
}


var btnNewList = document.getElementById("btnToDoList");
// if you use brackets, then it will just call the function straight away.
btnNewList.onclick = addNewItem;



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