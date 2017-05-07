var a = prompt('podaj liczbę '),
    b = prompt('podaj liczbę '),
    value = (a * a) + (2 * a * b) - (b * b);
 
console.log(value);
 
if (value > 0) {
	console.log('Wynik dodatni');
} else {
	console.log('Wynik ujemny');
}

if (value === 0) {
	console.log('Równe 0');
} else {
	console.log(value);
}