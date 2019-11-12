// function generatePassword() {
//     var numChars = prompt("How many chars do you want?");
//     var lowerWanted = confirm("Do you want lowercase characters?");
//     var upperWanted = confirm("Do you want uppercase characters?");
//     var numWanted = confirm("Do you want numbers?");
//     var symbWanted = confirm("Do you want special characters?");

//     var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//     var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//     var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//     var symbArr = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ";", ":", ",", ".", "/", "?", "|", "[", "{", "]", "}"];
//     var all = lowerArr + upperArr + numArr + symbArr;

//     var finalPassword = "final placeholder";
//     var passwordDisplay = document.getElementById("password");
//     // passwordDisplay.innerHTML = finalPassword;

//     var randomLowerIndex = Math.floor(Math.random() * lowerArr.length);
//     var randomLower = lowerArr[randomLowerIndex];
//     var randomUpperIndex = Math.floor(Math.random() * upperArr.length);
//     var randomUpper = upperArr[randomUpperIndex];
//     var randomNumIndex = Math.floor(Math.random() * numArr.length);
//     var randomNum = numArr[randomNumIndex];
//     var randomSymbIndex = Math.floor(Math.random() * symbArr.length);
//     var randomSymb = symbArr[randomSymbIndex];
//     // var randomAllIndex = Math.floor(Math.random() * allArr.length);
//     var allArr = [randomLower, randomUpper, randomNum, randomSymb];

//     // finalPassword += lowerArr.pick(lowerWanted.value);
//     // finalPassword += upperArr.pick(upperWanted.value);
//     // finalPassword += numArr.pick(numWanted.value);
//     // finalPassword += symbArr.pick(symbWanted.value);
//     // finalPassword == allArr.pick(numChars.value);
//     // finalPassword = finalPassword.shuffle();

//     // for (var i = 0; i < numChars; i++) {
//     //     finalPassword = finalPassword + "";

//     // };

//     finalPassword = "";
//     passwordCharSet = "";
//     if (lowerWanted === true) {
//         passwordCharSet += randomLower;
//     }
//     if (upperWanted === true) {
//         passwordCharSet += randomUpper;
//     }
//     if (numWanted === true) {
//         passwordCharSet += randomNum;
//     }
//     if (symbWanted === true) {
//         passwordCharSet += randomSymb;
//     }
//     for (var i = 0; i < numChars; i++) {
//         finalPassword += passwordCharSet.charAt(
//             Math.floor(Math.random() * all.length)
//         );
//         passwordDisplay.innerHTML = finalPassword;
//     }

//     // for (var i = 0; i < numChars; i++) {
//     //     var character = Math.floor(Math.random() * all.length);
//     //     finalPassword += passwordCharSet.charAt(character, character + 1);
//     //     passwordDisplay.innerHTML = finalPassword;
//     // }


//     console.log(randomLowerIndex + " = random lower index");
//     console.log(randomLower + " = random lower");
//     console.log(numChars + " = password length");
//     console.log(symbWanted + " = special chars");
//     console.log(lowerWanted + " = lower chars")
//     console.log(upperWanted + " = upper chars")
//     console.log(numWanted + " = numbers")
// }

function generate() {

    var numChars = prompt("How many characterss do you want? Max 126.");
    if (numChars > 126) {
        alert("Please choose a number between 1 and 126.");
        prompt("How many characters do you want? Max 126.")
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
