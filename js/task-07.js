const fontSizeControl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener("input", valueFontSize);
function valueFontSize(event) {
	const minFontSize = Number(fontSizeControl.getAttribute("min")),
		maxFontSize = Number(fontSizeControl.getAttribute("max"));

	if (event.currentTarget.value >= minFontSize && event.currentTarget.value <= maxFontSize) {
		textEl.style.fontSize = `${event.currentTarget.value}px`;
	}
}
