var valueNumber;
var specialCharacter;
var letterUpper;
var letterLower;
var imput;

number = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
character = ["!", "[", "]", " ^ ", " ? ", "@", "{", "|", "}", "~", "#", "$", "%", "&", "_", ",", "-", ".", "/", " < ", "`", "'", "(", ")", "*", "+", "=", " > "];
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var alternative;

var toUpper = function (changeLetter) {
    return changeLetter.toUpperCase();
};

newLetter = letter.map(toUpper);
var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});


function generatePassword() {

    imput = parseInt(prompt("Choose between 8 and 128. This is the lenght of the password"));

    if (!imput) {
        alert("Enter a value");
    } else if (imput < 8 || imput > 128) {
      
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
    
        valueNumber = confirm("Will this contain numbers?");
        specialCharacter = confirm("Will this contain special characters?");
        letterUpper = confirm("Will this contain Uppercase letters?");
        letterLower = confirm("Will this contain Lowercase letters?");
    };

    if (!specialCharacter && !valueNumber && !letterUpper && !letterLower) {
        alternative = alert("You must choose a criteria!");
    }

    else if (specialCharacter && valueNumber && letterUpper && letterLower) {
        alternative = character.concat(number, letter, newLetter);
    }

    else if (specialCharacter && valueNumber && letterUpper) {
        alternative = character.concat(number, newLetter);
    }
    else if (specialCharacter && valueNumber && letterLower) {
        alternative = character.concat(number, letter);
    }
    else if (specialCharacter && letterLower && letterUpper) {
        alternative = character.concat(letter, newLetter);
    }
    else if (valueNumber && letterLower && letterUpper) {
        alternative = number.concat(letter, newLetter);
    }

    else if (specialCharacter && valueNumber) {
        alternative = character.concat(number);

    } else if (specialCharacter && letterLower) {
        alternative = character.concat(letter);

    } else if (specialCharacter && letterUpper) {
        alternative = character.concat(newLetter);
    }
    else if (letterLower && valueNumber) {
        alternative = letter.concat(number);

    } else if (letterLower && letterUpper) {
        alternative = letter.concat(newLetter);

    } else if (valueNumber && letterUpper) {
        alternative = number.concat(newLetter);
    }
    else if (specialCharacter) {
        alternative = character;
    }
    else if (valueNumber) {
        alternative = number;
    }
    else if (letterLower) {
        alternative = letter;
    }
  
    var password = [];

    for (var i = 0; i < imput; i++) {
        var pickChoices = alternative[Math.floor(Math.random() * alternative.length)];
        password.push(pickChoices);
    }
 
    var pass = password.join("");
    UserInput(pass);
    return pass;
}

function UserInput(pass) {
    alert("this is your password  " + pass);
    document.getElementById("password").textContent = pass;
}


