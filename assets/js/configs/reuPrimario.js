var configReuPrimario = {
    reducaoPenal: 40, // VALOR EM PORCENTAGEM
    reducaoDeMultas: 0 // VALOR EM PORCENTAGEM
}

// Explicação:
// Se a opção "REU PRIMÁRIO" for marcada, os valores serão recalculados
// para que sejam retirados 10% ou 30% (por exemplo) destas infos.
// Se a multa for 20000 e a opção "REU PRIMÁRIO" for marcada, o valor será mudado
// para 18000, uma redução de 10% do valor original, e seria uma redução desta porcentagem,
// pois o valor "reducaoDeMultas" seria 10.