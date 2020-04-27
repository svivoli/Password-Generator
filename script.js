const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

function generate() {
    const length = prompt("How many characterss do you want? Max 128.");
    if (length < 8 || length > 128) {
        alert("Please select a number between 8 and 128.");
        return;
    };
    const upperOption = confirm("Do you want uppercase characters?");
    const lowerOption = confirm("Do you want lowercase characters?");
    const numOption = confirm("Do you want numbers?");
    const symOption = confirm("Do you want special characters?");

    let character_string = '';
    let password = '';
    const passwordDisplay = document.getElementById("password");

    if (upperOption == true) {
        character_string += uppercase;
    }
    if (lowerOption == true) {
        character_string += lowercase;
    }
    if (numOption == true) {
        character_string += numbers;
    }
    if (symOption == true) {
        character_string += symbols;
    }

    for (let i=0; i<length; i++) {
        password += character_string.charAt(Math.floor(Math.random() * character_string.length));
    }

    if (lowerOption == false && upperOption== false && numOption== false && symOption == false) {
        alert("Please choose at least one type of character for your password.");
        generate();
    } else {
        passwordDisplay.innerHTML = password;
    }
}

function copyToClipboard(element) {
    const $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert("Copied to clipboard: " + password.value);
}
