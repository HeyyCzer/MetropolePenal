function renderCategories() {
    for(let i = 0; i < categorias.length; i++) {
        const categoria = categorias[i];
        const section = document.getElementById("itemList");

        const newItem = document.createElement("div");
        newItem.id = getNameReplaced(categoria);
        newItem.classList.add("col-8");
        newItem.classList.add("mb-4");


        const label = document.createElement("h4");
        label.innerHTML = (i+1) + ". " + categoria;
        label.classList.add("calcLabel")

        newItem.appendChild(label);

        section.appendChild(newItem);
    }
}

function renderItems() {
    for(let i = 0; i < items.length; i++) {
        const item = items[i];
        const categoria = document.getElementById(item.categoria);

        const label = document.createElement("label");
        label.id = getNameReplaced(item.name);
        item.id = label.id;
        label.classList.add("row", "m-2", "calcInputLabel");

        label.innerHTML = "<input tabindex=\"-1\" type=\"checkbox\" class=\"calcInputLabel mt-1\" id=\""+ getNameReplaced(item.name) + "_label" + "\"> " + item.name;

        categoria.appendChild(label);
    }
}

function getNameReplaced(name) {
    name = name.toLowerCase()
        .replaceAll(" ", "_")

        .replaceAll("(", "").replaceAll(")", "")
        .replaceAll("[", "").replaceAll("]", "")
        .replaceAll("{", "").replaceAll("}", "")

        .replaceAll("$", "")
        .replaceAll("%", "")
        .replaceAll("&", "")
        .replaceAll("+", "")
        .replaceAll("/", "")
        .replaceAll("\"", "").replaceAll("\'", "");

    return name;
}

renderCategories();
renderItems();