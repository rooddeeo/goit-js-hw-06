const arrCategories = document.querySelectorAll(".item");
console.log(arrCategories);
console.log(`Number of categories: ${arrCategories.length}`);

arrCategories.forEach(elem => {
	console.log(`Category: ${elem.firstElementChild.textContent}`);
	const arrChildList = elem.lastElementChild.children.length;
	console.log(`Elements: ${arrChildList}`);
});
