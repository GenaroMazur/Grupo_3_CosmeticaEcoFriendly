var printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);

var addButton = document.getElementById("addIt");
addButton.addEventListener("click", addTheThing);


var myList = [];
var myListArea = document.getElementById("wishList");



function addTheThing() {

    var theThing = document.getElementById("iWant");

    addToTheList(theThing);
    resetInput(theThing);

}

function addToTheList(thingToAdd) {
    myList.push(thingToAdd.value);
    var newListItem = document.createElement("li");
    newListItem.innerHTML = myList[myList.length - 1];

    myListArea.appendChild(newListItem);

}

function resetInput(inputToReset) {
    inputToReset.value = "";
}

function printView() {
    var listPage = document.getElementById("listPage");
    var formArea = document.getElementById("formArea");

    formArea.style.display = "none";
    listPage.className = "print";
    myListArea.innerHTML = "";
    myList.sort();

    for (var i = 0; i < myList.length; i++) {
        wishList.innerHTML += "<li>" + myList[i] + "</li>";
    }
    window.print();
}