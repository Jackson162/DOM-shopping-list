var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("LI");
	// .createElement("LI") convert strings into lowercase
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);


	var deletBtn = document.createElement("Button");
	deletBtn.appendChild(document.createTextNode("delete"));
	li.appendChild(deletBtn)

	input.value = ""; //empty the searchbox after event 
}



function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


function removeListAfterClickDeletbtn(event) {
	if (event.target && event.target.tagName == "BUTTON") {
		// or event.target.nodeName == "BUTTON"
		var deletBtn = event.target;
		deletBtn.parentNode.remove();
	}
}


ul.addEventListener("click", removeListAfterClickDeletbtn, false);
// .addEventListener("click", removeListAfterClickDeletbtn, false);


// ============================================================
// 1. If you click on the list item, it toggles the .done  class on and off.


function strikeThrough (event) {
//     // var list = event.target;
//     // list.classList.toggle("done");
//     // delete button also be stroke through


    if (event.target && event.target.nodeName == "LI") {
    	var list = event.target;
    	list.classList.toggle("done");
    	// event.target.classList.toggle("done"); does not work (must cache the selector?)
    }
}

ul.addEventListener("click", strikeThrough, false);
//useCapture(third one) default is false


// alternative code

// ul.onclick = function (event) {
//     var list = event.target;
//     list.classList.toggle("done");
// }; 
// onclick is an attribute of ul in HTML, itself is event listener.

// =========================================================================
// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)


// function createListElement() {

// add:
// 	var deletbtn = document.createElement("Button");
// 	deletbtn.appendChild(document.createTextNode("delete"));
// 	li.appendChild(deletbtn)


// }
