function styleElementSiblings(tag, theClass) {
	if (!document.getElementsByTagName) return false;
	var headers = document.getElementsByTagName(tag);
	var elem;
	for (var i=0; i<headers.length; i++) {
		elem = getNextElement(headers[i].nextSibling);
		addClass(elem, theClass);
	}
}
function getNextElement(node) {
	if (node.nodeType == 1) {
		return node;
	}
	if (node.nextSibling) {
		return getNextElement(node.nextSibling);
	}
	return null;
}

addLoadEvent(function() {
	styleElementSiblings("h1", "intro");
});