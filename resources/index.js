window.addEventListener("load", (e) => {
	setupHeader();
	setupFooter();
})

function setupHeader() {
	let header = document.querySelector("header");
	header.className = "navTools";
	header.innerHTML = "<nav><a href = 'index.html'>Home</a><a href = 'resume.html'>Resume</a><a href = 'portfolio.html'>Projects</a></nav>";
}

function setupFooter() {
	let footer = document.querySelector("footer");
	footer.className = "navTools";
	footer.innerHTML = "<ul><li><a href = 'mailto:jacob.ciliberti@rhit.edu'>Email</a></li><li><a href = 'https://www.linkedin.com/in/jake-ciliberti'>Linkedin</a></li></ul>";
}