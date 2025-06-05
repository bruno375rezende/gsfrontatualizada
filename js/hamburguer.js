const hamburger = document.querySelector(".hamburguer");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

function toggleSidebar() {
	sidebar.classList.toggle("open");
	overlay.classList.toggle("active");
}

hamburger.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", toggleSidebar);

sidebar
	.querySelectorAll("a")
	.forEach((link) => link.addEventListener("click", toggleSidebar));
