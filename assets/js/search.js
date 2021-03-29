function procurar() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById("search-box");
	filter = input.value.toUpperCase();
	ul = document.getElementById("itemList");
	li = ul.getElementsByTagName("label");

	// Procurar elementos...
	for (i = 0; i < li.length; i++) {
		a = li[i].textContent || li[i].innerText;
		txtValue = a;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}
