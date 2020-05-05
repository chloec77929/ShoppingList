var button = document.getElementById("add");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.addEventListener("click", function() {
		// creates a boolean that toggles the done class on li:
		// if the list item is clicked this toggles the done class
		var finished = this.classList.toggle("done");
		// creates a remove button for the finished item:
		var removeButton = document.createElement("button");
		removeButton.classList.add("deleteButton");

		// if the list item is clicked (li add event listener ) then 
		// finished is true
		if (finished) {
			removeButton.appendChild(document.createTextNode("remove"));
			removeButton.classList = "deleteButton";
			li.appendChild(removeButton);

			removeButton.addEventListener("click", function() {
				this.parentElement.remove();
			});
		} else {
			this.getElementsByClassName("deleteButton")[0].remove();
		}
	})
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




//









