window.addEventListener("load", (e) => {
	setupHeader();
	setupFooter();
})

function setupHeader() {
	let header = document.querySelector("header");
	header.className = "navTools";
	header.innerHTML = "<nav><a href = 'index.html'>Home</a><a href = 'resume.html'>Résumé</a><a href = 'portfolio.html'>Projects</a></nav>";

	//https://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript
	let path = window.location.pathname;
	path = path.split("/").pop();

	let headerLinks = document.querySelectorAll("nav a");

	for (let item of headerLinks) {
		if (item.href.split('/').pop() == path) {
			item.id = "currentPage";
		}
	}
}

function setupFooter() {
	let footer = document.querySelector("footer");
	footer.className = "navTools";
	footer.innerHTML = "<ul><li><a href = 'mailto:jacob.ciliberti@rhit.edu'>Email</a></li><li><a href = 'https://www.linkedin.com/in/jake-ciliberti'>Linkedin</a></li></ul>";
}