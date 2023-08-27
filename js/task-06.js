const inputText = document.querySelector("input");

inputText.addEventListener("blur", () => {
	inputText.classList.add("invalid");
	if (inputText.value.trim().length === Number(inputText.getAttribute("data-length"))) {
		inputText.classList.add("valid");
		inputText.classList.remove("invalid");
	} else {
		inputText.classList.add("invalid");
		inputText.classList.remove("valid");
	}
});
