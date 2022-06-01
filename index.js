const passwordLength = 15;
const numPasswords = 4;
const passwordEls = document.querySelectorAll('.password')

let passwordString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890()&*!$abcdefghijklmnopqrstuvwxyz"

function generatePassword() {
	let randomPassword = "";
	for (let i = 0; i < passwordLength; i++) {
		let randomNumber = Math.floor( Math.random() * (passwordString.length -1) +1)
		randomPassword += passwordString[randomNumber];
	}
	return randomPassword;
}

function generateButtonClicked() {
	for (i = 0; i<numPasswords; i++) {
		passwordEls[i].textContent = generatePassword();
	}
}
