window.onload = function() {
	var request = getHTTPObject();
	if (request) {
		request.open("GET", "example.txt", true);
		request.send();
	}
}