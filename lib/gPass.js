function gPass(lettersCount = 8, lowercase = true, uppercase = true, numbers = true, symbols = "#!%$") {
    let generateFrom = "";

    if (lowercase)
        generateFrom += "qwertyuiopasdfghjklzxcvbnm";
    if (uppercase)
        generateFrom += "QWERTYUIOPASDFGHJKLZXCVBNM";
    if (numbers)
        generateFrom += "1234567890";
    if (symbols)
        generateFrom += symbols;

    let finalPass = "";
    for (let i = 0; i < lettersCount; i++) {
        finalPass += generateFrom[Math.floor(Math.random() * generateFrom.length)];
    }
    
    return finalPass;
}

module.exports = gPass