const currentVersion = "1.0"

for (const x of document.getElementsByClassName("versionControl")) {
    x.innerHTML = getPlaceholders(x.innerHTML);

    // TODO: Adicionar um "caroussel" de imagens na página inicial.
}

document.title = getPlaceholders("Metrópole - Calculadora Penal ($version)");



// UTILS
function getPlaceholders(text) {
    text = text.replace("$version", currentVersion);
    return text;
}