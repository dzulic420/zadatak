function suggestionTool(currentText) {
    currentText = currentText.toLowerCase();
    let br_rijeci = currentText.split(" ");
    if (br_rijeci.length > 3 || currentText.length == 0) return []
    var fs = require("fs");
    let file = fs.readFileSync('long.txt', 'utf-8').toLowerCase().split(" ");
    let sugestije = [];
    let prioritet = {};
    let matchCounter = 0;
    for (let i = 0; i < file.length; i++) {
        let wordsinfile = file[i];
        if (wordsinfile == br_rijeci[matchCounter]) matchCounter++;
        else matchCounter = 0;

        if (matchCounter == br_rijeci.length && i + 1 < file.length) {
            matchCounter = 0;
            let recommend = br_rijeci.join(" ");
            let nextfileRijec = file[i + 1];
            recommend += " " + nextfileRijec;

            if (recommend in prioritet) prioritet[recommend]++;
            else {
                sugestije.push(recommend);
                prioritet[recommend] = 1;
            }
        }
    }
    let sortiranje = sugestije.sort(function (prvi, drugi) {
        return prioritet[drugi] - prioritet[prvi];
    })
    let rjesenje = []
    for (let i = 0; i < sortiranje.length; i++) {
        if (i == 5) break;
        rjesenje.push(sortiranje[i]);
    }
    return rjesenje;
}
console.log(suggestionTool("I am"));

//sugestije trebaju raditi za do 3 riječi
//dakle suggestionTool("I am very") je legalno
//ali suggestionTool("I am very hungry") nije
//["I AM just", "I am often", "I am currently", "I am 90%"]