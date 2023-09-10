const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listIngredients = document.querySelector("#ingredients");
const listItem = ingredients.map(ingredient => {
		const li = document.createElement("li");
		li.classList.add("item");
		li.textContent = ingredient;
		return li;
});
listIngredients.append(...listItem);