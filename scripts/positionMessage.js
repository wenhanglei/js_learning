function positionMessage() {
	if(!document.getElementById) return false;
	if(!document.getElementById("message1")) return false;
	var elem = document.getElementById("message1");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";
	moveElement("message1",250,50,10);
}

function addLoadEvent(func) {
	var oldEvent = window.onload;
	if(typeof oldEvent != 'function') {
		window.onload = func
	} else {
		window.onload = function() {
			oldEvent();
			func();
		}
	}
}
/*
function moveMessage() {
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if(xpos == 200 && ypos == 100) {
		return true;
	}
	if(xpos < 200) {
		xpos++;
	}
	if(xpos > 200) {
		xpos--;
	}
	if(ypos < 100) {
		ypos++;
	}
	if(ypos > 100) {
		ypos--;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	movement = setTimeout("moveMessage()", 10);
}*/
addLoadEvent(positionMessage);