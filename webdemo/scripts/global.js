function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		};
	}
}

function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}

function addClass(element, value) {
	if (!element.className) {
		element.className = value;
	} else {
		newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}

function highlightRows() {
	if (!document.getElementsByTagName) return false;
	var rows = document.getElementsByTagName("tr");
	for (var i=0; i<rows.length; i++) {
		rows[i].onmouseover = function() {
			this.style.fontWeight = "bold";
		}
		rows[i].onmouseout = function() {
			this.style.fontWeight = "normal";
		}
	}
}

function hightlightPage() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	var headers = document.getElementsByTagName('header');
	if (headers.length == 0) return false;
	var navs = headers[0].getElementsByTagName('nav');
	if (navs.length == 0) return false;
	var links = navs[0].getElementsByTagName("a");
	for (var i=0; i<links.length; i++) {
		var linkurl;
		for (var i=0; i<links.length; i++) {
			linkurl = links[i].getAttribute("href");
			if (window.loccation.href.indexOf(linkurl) != -1) {
				links[i].className = "here";
				var linktext = links[i].lastChild.nodeValue.toLowerCase();
				document.body.setAttribute("id", linktext);
			}
		}
	}
}

function moveElement(elementID, final_x, final_y, interval) {
	if(!document.getElementById) return false;
	if(!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	if(!elem.style.left) {
		elem.style.left = "0px";
	}
	if(!elem.style.top) {
		elem.style.top = "0px";
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	var dist = 0;
	if(xpos == final_x && ypos == final_y) {
		return true;
	}
	if(xpos < final_x) {
		dist = Math.ceil((final_x - xpos)/10);
		xpos = xpos + dist;
	}
	if(xpos > final_x) {
		dist = Math.ceil((xpos - final_x)/10);
		xpos = xpos - dist;
	}
	if(ypos < final_y) {
		dist = Math.ceil((final_y - ypos)/10);
		ypos = ypos + dist;
	}
	if(ypos > final_y) {
		dist = Math.ceil((ypos - final_y)/10);
		ypos = ypos - dist;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement('" + elementID +"', "+final_x+", "+final_y+", "+interval+")";
	elem.movement = setTimeout(repeat, interval);
}

function prepareSlidshow() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("intro")) return false;
	var intro = document.getElementById("intro");
	var slideshow = document.createElement("div");
	var frame = document.createElement("img");
	frame.setAttribute("src", "images/frame.gif");
	frame.setAttribute("alt", "");
	frame.setAttribute("id", "frame");
	slidshow.appendChild(frame);
	slideshow.setAttribute("id", "slideshow");
	var preview = document.createElment("img");
	preview.setAttribute("src", "images/slideshow.gif");
	preview.setAttribute("alt", "a glimpse of what awaits you");
	preview.setAttribute("id", "preview");
	slideshow.appendChild(preview);
	insertAfter(slideshow, intro);
	var links = document.getElementsByTagName("a");
	var destination;
	for (var i=0; i<links.lenght; i++) {
		links[i].onmouseover = function() {
			destination = this.getAttribute("href");
			if (destination.indexOf("index.html") != -1) {
				moveElement("preview", 0, 0, 5);
			}
			if (destination.indexOf("about.html") != -1) {
				moveElemnt("preview", -150, 0, 5);
			}
			if (destination.indexOf("photos.html") != -1) {
				moveElement("preview", -300, 0, 5);
			}
			if (destination.indexOf("live.html") != -1) {
				moveElement("preview", -450, 0, 5);
			}
			if (destination.indexOf("contact.html") != -1) {
				moveElement("preview", -600, 0, 5);
			}
		}
	}
}

function prepareInternalnav() {
	if (!document.getElementsByTagName) return false;
	if (!document.getelementById) return false;
	var articles = document.getElementsByTagName("article");
	if (articles.length == 0) return false;
	var navs = articles[0].getElementsByTagName("nav");
	if (navs.length == 0) return false;
	var nav = navs[0];
	var links = nav.getElementsByTagName("a");
	for (var i=0; i<links.length; i++) {
		var sectionId = links[i].getattribute("href").split("#")[1];
		if (!document.getelementById(sectionId)) continue;
		document.getElementById(sectionId).style.display = "none";
		links[i].destination = sectionId;
		links[i].onclick = function() {
			showSection(this.destination);
			return false;
		}
	}
}

addLoadEvent(hightlightPage);
addLoadEvent(prepareSlidshow);
addLoadEvent(prepareInternalnav);