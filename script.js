function generate() {

    var numChars = prompt("How many characterss do you want? Max 126.");
    if (numChars > 126 || numChars < 8) {
        alert("Please choose a number between 8 and 128.");
        prompt("How many characters do you want? Max 128.")
    }
    var lowerWanted = confirm("Do you want lowercase characters?");
    var upperWanted = confirm("Do you want uppercase characters?");
    var numWanted = confirm("Do you want numbers?");
    var symbWanted = confirm("Do you want special characters?");

    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

    var all = uppercase + lowercase + numbers + symbols;

    var randomLowerIndex = Math.floor(Math.random() * lowercase.length);
    var randomLower = lowercase[randomLowerIndex];
    var randomUpperIndex = Math.floor(Math.random() * uppercase.length);
    var randomUpper = uppercase[randomUpperIndex];
    var randomNumIndex = Math.floor(Math.random() * numbers.length);
    var randomNum = numbers[randomNumIndex];
    var randomSymbIndex = Math.floor(Math.random() * symbols.length);
    var randomSymb = symbols[randomSymbIndex];

    var password = '';
    var passwordDisplay = document.getElementById("password");

    
    for (var index = 0; index < numChars; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
        if (lowerWanted === true) {
            character += randomLower;
        }
        if (upperWanted === true) {
            character += randomUpper;
        }
        if (numWanted === true) {
            character += randomNum;
        }
        if (symbWanted === true) {
            character += randomSymb;
        } 
        if (lowerWanted === false && upperWanted === false && numWanted === false && symbWanted === false) {
            alert("Please choose at least one type of character for your password.");
            generate();
        }
        passwordDisplay.innerHTML = password;
    }

    console.log(randomLowerIndex + " = random lower index");
    console.log(randomLower + " = random lower");
    console.log(randomUpperIndex + " = random upper index");
    console.log(randomUpper + " = random upper");
    console.log(randomNumIndex + " = random num index");
    console.log(randomNum + " = random num");
    console.log(randomSymbIndex + " = random symb index");
    console.log(randomSymb + " = random symb");
    console.log(numChars + " = password length");
    console.log(symbWanted + " = special chars");
    console.log(lowerWanted + " = lower chars")
    console.log(upperWanted + " = upper chars")
    console.log(numWanted + " = numbers")

}


function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert("Copied to clipboard: " + password.value);
}
