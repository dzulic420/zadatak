
/*

Radimo pretraživač nad slijedećim tekstom:

https://drive.google.com/file/d/1yGKHPlwjuHCwOBfa9pkGyVhl1UcOYdRj/view?usp=sharing

Važ je zadatak napisati “suggest tool” slično kao što imamo na google-u, gdje nakon svake riječi nudimo odabir top 5 slijedećih riječi bez da korisnik mora tipkati.

Lekcija je o:
Razumijevanje zahtjeva 
Modeliranje zahtjeva i pretvaranje istih u kod
Pravila čistog koda
TDD


*/
function suggestionTool(currentText) {
	//implementirati neku magiju
	//vratiti array top 5 sugestija
}

console.log(suggestionTool("I am"));

//sugestije trebaju raditi za do 3 riječi
//dakle suggestionTool("I am very") je legalno
//ali suggestionTool("I am very hungry") nije
//["I AM just", "I am often", "I am currently", "I am 90%"]
module.exports = suggestionTool;