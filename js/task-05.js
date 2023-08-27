const inputName = document.querySelector("#name-input"),
	outputName = document.querySelector("#name-output");
inputName.addEventListener("input", event => {
	if (inputName.value.trim() === "") {
		outputName.textContent = "Anonymous";
	} else {
		outputName.textContent = event.currentTarget.value;
	}
});
