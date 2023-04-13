const btnShare = document.querySelector(".arrow-share");
const popupShare = document.querySelector(".share");

btnShare.addEventListener("click", function () {
	popupShare.classList.toggle("show");
});
