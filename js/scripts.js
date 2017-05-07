var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = "Zielone słonie";
var animalUpperCased = animal.toUpperCase();
var textReplaced = text.replace('Papugi', animalUpperCased);
console.log(textReplaced.substr(0, textReplaced.length/2));
