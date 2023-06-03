var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElements() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var span = document.createElement("span");
	span.classList.add("material-symbols-outlined")
	span.innerText = "delete"
	ul.appendChild(div);
	li.appendChild(document.createTextNode(input.value));
	div.appendChild(li);
	div.appendChild(span);
	strikethrough();
	removeItem()
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElements();
		input.value = "";
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElements();
		input.value = "";
	}
}
function strikethrough() {
	for (var i = 0; i < li.length; i++) {
		li[i].addEventListener("click", changeStatus);
	}

}
function changeStatus() {
	this.classList.toggle("done");
}
function removeItem() {
	var span = document.getElementsByTagName("span");
	for (var i = 0; i < span.length; i++) {
		span[i].classList.add("red")
		span[i].addEventListener("click", deleteItem);
	
	}
}

function deleteItem () {
	for (var i = 0; i < li.length; i++) {
		this.parentNode.remove()
	}

}


strikethrough();
removeItem();
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
