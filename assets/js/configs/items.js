const categorias = ["Crimes de Trânsito", "Crimes contra Pessoa", "Crimes contra o Patrimônio", "Crimes contra a Fé Pública", "Crimes Armamentícios", "Crimes Narcóticos", "Crime Organizado"];

const items = [
	//    Crimes de Trânsito
	{
		name: "Empinar motocicleta",
		categoria: "crimes_de_trânsito",
		multa: 2500,
		pena: 0,
	},
	{
		name: "Dirigir sem permissão ou CNH",
		categoria: "crimes_de_trânsito",
		multa: 6000,
		pena: 0,
	},
	{
		name: "Alta velocidade",
		categoria: "crimes_de_trânsito",
		multa: 3000,
		pena: 0,
	},
	{
		name: "Avançar sinal vermelho",
		categoria: "crimes_de_trânsito",
		multa: 500,
		pena: 0,
	},
	{
		name: "Disputar corrida ilegalmente",
		categoria: "crimes_de_trânsito",
		multa: 7000,
		pena: 0,
	},
	{
		name: "Conduzir sem capacete",
		categoria: "crimes_de_trânsito",
		multa: 2000,
		pena: 0,
	},
	{
		name: "Conduzir veículo sobre influência de substâncias",
		categoria: "crimes_de_trânsito",
		multa: 1000,
		pena: 0,
	},
	{
		name: "Homicídio Culposo (veicular)",
		categoria: "crimes_de_trânsito",
		multa: 20000,
		pena: 15,
	},
	{
		name: "Direção Perigosa",
		categoria: "crimes_de_trânsito",
		multa: 10000,
		pena: 0,
	},
	{
		name: "Lesão Corporal (veicular)",
		categoria: "crimes_de_trânsito",
		multa: 4000,
		pena: 0,
	},
	{
		name: "Omissão de socorro",
		categoria: "crimes_de_trânsito",
		multa: 5000,
		pena: 0,
	},
	{
		name: "Poluição Sonora (veicular)",
		categoria: "crimes_de_trânsito",
		multa: 10000,
		pena: 0,
	},
	{
		name: "Uso excessivo de insulfilm",
		categoria: "crimes_de_trânsito",
		multa: 7000,
		pena: 0,
	},
	{
		name: "Faróis apagados",
		categoria: "crimes_de_trânsito",
		multa: 500,
		pena: 0,
	},
	{
		name: "Veículo com defeito",
		categoria: "crimes_de_trânsito",
		multa: 2000,
		pena: 0,
	},
	{
		name: "Defeito no sistema de iluminação",
		categoria: "crimes_de_trânsito",
		multa: 1000,
		pena: 0,
	},
	{
		name: "Pane seca",
		categoria: "crimes_de_trânsito",
		multa: 500,
		pena: 0,
	},
	{
		name: "Entregar para pessoa sem CNH",
		categoria: "crimes_de_trânsito",
		multa: 6000,
		pena: 0,
	},
	{
		name: "Promover eventos em via pública",
		categoria: "crimes_de_trânsito",
		multa: 3000,
		pena: 0,
	},
	{
		name: "Dirigir na Contramão",
		categoria: "crimes_de_trânsito",
		multa: 2000,
		pena: 0,
	},
	{
		name: "Impedir trânsito de veículos públicos",
		categoria: "crimes_de_trânsito",
		multa: 5000,
		pena: 0,
	},
	{
		name: "Dano a patrimônio público",
		categoria: "crimes_de_trânsito",
		multa: 3000,
		pena: 0,
	},
	{
		name: "Dirigir sem a posse do documento",
		categoria: "crimes_de_trânsito",
		multa: 3000,
		pena: 0,
	},
	{
		name: "Conduzir passageiro sem capacete",
		categoria: "crimes_de_trânsito",
		multa: 500,
		pena: 0,
	},
	{
		name: "Bloquear via",
		categoria: "crimes_de_trânsito",
		multa: 4000,
		pena: 0,
	},

	// CRIMES CONTRA PESSOA
	{
		name: "Homicídio Simples",
		categoria: "crimes_contra_pessoa",
		multa: 15000,
		pena: 18,
	},
	{
		name: "Homicídio Qualificado",
		categoria: "crimes_contra_pessoa",
		multa: 23000,
		pena: 20,
	},
	{
		name: "Homicídio Culposo",
		categoria: "crimes_contra_pessoa",
		multa: 17000,
		pena: 15,
	},
	{
		name: "Homicídio a um policial",
		categoria: "crimes_contra_pessoa",
		multa: 35000,
		pena: 20,
	},
	{
		name: "Tentativa de homicídio",
		categoria: "crimes_contra_pessoa",
		multa: 15000,
		pena: 8,
	},
	{
		name: "Tentativa de homicídio a um policial",
		categoria: "crimes_contra_pessoa",
		multa: 25000,
		pena: 10,
	},
	{
		name: "Sequestro ou cárcere privado",
		categoria: "crimes_contra_pessoa",
		multa: 35000,
		pena: 15,
	},
	{
		name: "Agressão",
		categoria: "crimes_contra_pessoa",
		multa: 4000,
		pena: 8,
	},
	{
		name: "Injúria",
		categoria: "crimes_contra_pessoa",
		multa: 2000,
		pena: 5,
	},
	{
		name: "Difamação",
		categoria: "crimes_contra_pessoa",
		multa: 4000,
		pena: 5,
	},
	{
		name: "Calúnia",
		categoria: "crimes_contra_pessoa",
		multa: 3000,
		pena: 5,
	},
	{
		name: "Agressão Familiar",
		categoria: "crimes_contra_pessoa",
		multa: 5000,
		pena: 10,
	},
	{
		name: "Agressão a autoridade",
		categoria: "crimes_contra_pessoa",
		multa: 25000,
		pena: 13,
	},
	{
		name: "Autoacusação falsa",
		categoria: "crimes_contra_pessoa",
		multa: 15000,
		pena: 10,
	},
	{
		name: "Falsa acusação",
		categoria: "crimes_contra_pessoa",
		multa: 5000,
		pena: 10,
	},

	// CRIMES CONTRA O PATRIMÔNIO
	{
		name: "Roubo",
		categoria: "crimes_contra_o_patrimônio",
		multa: 10000,
		pena: 15,
	},
	{
		name: "Roubo a Conveniência",
		categoria: "crimes_contra_o_patrimônio",
		multa: 12000,
		pena: 20,
	},
	{
		name: "Roubo a Joalheria",
		categoria: "crimes_contra_o_patrimônio",
		multa: 15000,
		pena: 25,
	},
	{
		name: "Roubo a Caixa Eletrônico/Registradora",
		categoria: "crimes_contra_o_patrimônio",
		multa: 8000,
		pena: 10,
	},
	{
		name: "Roubo ao Banco",
		categoria: "crimes_contra_o_patrimônio",
		multa: 30000,
		pena: 30,
	},
	{
		name: "Roubo seguido de ameaça",
		categoria: "crimes_contra_o_patrimônio",
		multa: 20000,
		pena: 20,
	},
	{
		name: "Roubo seguido de morte",
		categoria: "crimes_contra_o_patrimônio",
		multa: 35000,
		pena: 30,
	},
	{
		name: "Roubo seguido de agressão",
		categoria: "crimes_contra_o_patrimônio",
		multa: 15000,
		pena: 10,
	},
	{
		name: "Roubo a veículo",
		categoria: "crimes_contra_o_patrimônio",
		multa: 10000,
		pena: 14,
	},
	{
		name: "Furto",
		categoria: "crimes_contra_o_patrimônio",
		multa: 5000,
		pena: 10,
	},
	{
		name: "Furto Qualificado",
		categoria: "crimes_contra_o_patrimônio",
		multa: 7000,
		pena: 14,
	},
	{
		name: "Receptação",
		categoria: "crimes_contra_o_patrimônio",
		multa: 5000,
		pena: 10,
	},
	{
		name: "Invasão de Propriedade",
		categoria: "crimes_contra_o_patrimônio",
		multa: 20000,
		pena: 10,
	},
	{
		name: "Extorção mediante a sequestro",
		categoria: "crimes_contra_o_patrimônio",
		multa: 40000,
		pena: 20,
	},
	{
		name: "Fuga da polícia",
		categoria: "crimes_contra_o_patrimônio",
		multa: 20000,
		pena: 15,
	},

	// CRIMES CONTRA A FÉ PÚBLICA
	{
		name: "Falsa identidade",
		categoria: "crimes_contra_a_fé_pública",
		multa: 15000,
		pena: 13,
	},
	{
		name: "Uso de Máscara",
		categoria: "crimes_contra_a_fé_pública",
		multa: 20000,
		pena: 0,
	},
	{
		name: "Prevaricação",
		categoria: "crimes_contra_a_fé_pública",
		multa: 10000,
		pena: 8,
	},
	{
		name: "Desacato a funcionário Público",
		categoria: "crimes_contra_a_fé_pública",
		multa: 20000,
		pena: 11,
	},
	{
		name: "Afirmação falsa",
		categoria: "crimes_contra_a_fé_pública",
		multa: 5500,
		pena: 13,
	},
	{
		name: "Fraude Processual",
		categoria: "crimes_contra_a_fé_pública",
		multa: 15000,
		pena: 14,
	},
	{
		name: "Corrupção Passiva/Ativa",
		categoria: "crimes_contra_a_fé_pública",
		multa: 12500,
		pena: 15,
	},
	{
		name: "Desobediência",
		categoria: "crimes_contra_a_fé_pública",
		multa: 15000,
		pena: 10,
	},
	{
		name: "Ocultação de provas",
		categoria: "crimes_contra_a_fé_pública",
		multa: 20000,
		pena: 15,
	},
	{
		name: "Desobediência",
		categoria: "crimes_contra_a_fé_pública",
		multa: 15000,
		pena: 15,
	},

	// CRIMES ARMAMENTÍCIOS
	{
		name: "Tráfico de armas",
		categoria: "crimes_armamentícios",
		multa: 14000,
		pena_per_quantity: 10,
		quantity: 1,
		itemName: "Armas Tráfico",
	},
	{
		name: "Tráfico de peças de arma",
		categoria: "crimes_armamentícios",
		multa: 14000,
		pena_per_quantity: 10,
		quantity: 50,
		itemName: "Peças de Arma",
	},
	{
		name: "Porte ilegal de arma pesada",
		categoria: "crimes_armamentícios",
		multa: 35000,
		multa_per_quantity: 10000,
		pena: 20,
		pena_per_quantity: 10,
		quantity: 1,
		itemName: "Armas Pesadas",
	},
	{
		name: "Porte ilegal de arma leve",
		categoria: "crimes_armamentícios",
		multa: 14000,
		multa_per_quantity: 10000,
		pena: 15,
		pena_per_quantity: 10,
		quantity: 1,
		itemName: "Armas Leves",
	},
	{
		name: "Posse de munição",
		categoria: "crimes_armamentícios",
		multa: 12000,
		multa_per_quantity: 5000,
		pena: 7,
		pena_per_quantity: 5,
		quantity: 5,
		itemName: "Munições",
	},
	{
		name: "Tráfico de coletes balísticos",
		categoria: "crimes_armamentícios",
		multa: 9000,
		multa_per_quantity: 15000,
		pena: 9,
		pena_per_quantity: 20,
		quantity: 1,
		itemName: "Coletes",
	},
	{
		name: "Posse de coletes balísticos",
		categoria: "crimes_armamentícios",
		multa: 8000,
		pena: 7,
		pena_per_quantity: 10,
		quantity: 1,
		itemName: "Coletes",
	},
	{
		name: "Simulador de colete balístico",
		categoria: "crimes_armamentícios",
		multa: 6000,
		pena: 0,
	},
	// CRIMES NARCÓTICOS
	{
		name: "Tráfico de drogas",
		categoria: "crimes_narcóticos",
		multa: 30000,
		multa_per_quantity: 550,
		pena: 15,
		pena_per_quantity: 3,
		quantity: 5,
		itemName: "Drogas",
	},
	// CRIME ORGANIZADO
	{
		name: "Lavagem de dinheiro",
		categoria: "crime_organizado",
		multa_per_quantity: 1,
		pena: 15,
		quantity: 1,
		itemName: "Dinheiro Sujo",
	},
	{
		name: "Formação de Quadrilha",
		categoria: "crime_organizado",
		multa: 17000,
		pena: 10,
	},
	{
		name: "Dinheiro Sujo",
		categoria: "crime_organizado",
		multa_per_quantity: 2000,
		pena: 14,
		quantity: 1,
		itemName: "Dinheiro Sujo",
	},
	{
		name: "Tráfico de animais",
		categoria: "crime_organizado",
		multa: 35000,
		pena: 15,
	},
];
