const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}
console.log("Bulbasaur", pokemon1)

//letra a:
const copiapokemon1 = {...pokemon1,
nome: "Squirtle",
tipo: "Água"
}
console.log("Squirtle",copiapokemon1) 

//letra b:
pokemon1.ataques = []
pokemon1.ataques.push({
    nome:"Investida",
    dano: 40,
    tipo:"Normal",
    precisao:100
})
console.log("Ataque novo1 Bulbasaur", pokemon1.ataques)

//letra c:
copiapokemon1.ataques = [...pokemon1.ataques]
console.log("Ataque novo1 Squitle", copiapokemon1.ataques)

//letra d:
pokemon1.ataques.push({
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
})
console.log("Ataque2 Bulbasaur",pokemon1.ataques)

//letra e:

copiapokemon1.ataques.push({
    nome: "Jato de Água",
    dano: 40,
    tipo:"Água",
    precisao: 100
})
console.log("Ataque2 Squirtle",copiapokemon1.ataques)






