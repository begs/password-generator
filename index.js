const passwordLength = 15;
const numPasswords = 4;
const passwordEls = document.querySelectorAll('.password')

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!#$&^*";


// Generate password by populating an array with all possible characters and traversing with a random number
function generatePassword() {
	let randomPassword = "";
	let characters = lowercaseChars + uppercaseChars + numbers + symbols;
	characters = characters.split('');

	for (let i = 0; i < passwordLength; i++) {
		let randomNumber = Math.floor( Math.random() * (characters.length - 1) +1);
		randomPassword += characters[randomNumber];
	}
return randomPassword;
}

// Button listener triggered -> assign all passwordEls with password from generatePassword function
function generateButtonClicked() {
	for (i = 0; i < numPasswords; i++) {
		passwordEls[i].textContent = generatePassword();
	}
}
