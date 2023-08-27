const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", event => {
	event.preventDefault();
	const formElem = event.currentTarget.elements,
		email = formElem.email.value,
		password = formElem.password.value;
	if (email === "" || password === "") {
		alert("ВНИМАНИЕ! Все поля должны быть заполнены!");
	} else {
		const formData = {
			email,
			password,
		};
		console.log(formData);
		loginForm.reset();
	}
});
