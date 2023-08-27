function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
buttonChangeColor.addEventListener("click", () => {
	const bodyBg = document.querySelector("body"),
	randomColor = getRandomHexColor();
	bodyBg.style.backgroundColor = randomColor;
	const printColor = document.querySelector(".color");
	printColor.innerHTML = bodyBg.style.backgroundColor;
});
