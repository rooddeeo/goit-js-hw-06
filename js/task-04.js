let counterValue = 0;

const controlPanel = document.querySelector("#counter"),
	result = document.querySelector("#value");

controlPanel.firstElementChild.addEventListener("click", () => {
	counterValue -= 1;
	result.innerHTML = counterValue;
});

controlPanel.lastElementChild.addEventListener("click", () => {
	counterValue += 1;
	result.innerHTML = counterValue;
});
