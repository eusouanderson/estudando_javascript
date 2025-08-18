// Modulo 1 Closure e Escopo
// 1 Escopo Léxico 
// No javascript, o escopo determina a acessibilidade das variaveis. O escopo léxico significa que a função "lembra"
// do local onde foi declarada, nao onde foi executada.

function game(input){
	const random_number = Math.random()
	console.log(random_number)
	if (input > random_number) {
		console.log('O numero é menor')
	}else if (input < random_number ) {
		console.log('O numero é maior')
	}
}
game(300000000)
