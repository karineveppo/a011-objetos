const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

//letra a:

console.log(filme.elenco[0])

//letra b:
console.log(filme.elenco[3])

//letra c:
console.log("lista de canais transmitindo", filme.transmissoesHoje)

//letra d:
console.log(filme.transmissoesHoje[1].horario)

