const passwordLength = 15;
const numPasswords = 4;
const passwordEls = document.querySelectorAll('.password')
let passwordString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890()&*!$abcdefghijklmnopqrstuvwxyz"
let passwords = [];

// Generate passwords and store them in an array
function generatePasswords() {
	for (let i = 0; i < numPasswords; i++) {
		let randomPassword = "";
		for (let i = 0; i < passwordLength; i++) {
			let randomNumber = Math.floor( Math.random() * (passwordString.length -1) +1)
			randomPassword += passwordString[randomNumber];
		}
		passwords[i] = randomPassword;
	}
}

// Button listener triggered -> assign all passwordEls with content from password array
function generateButtonClicked() {
	generatePasswords();

	for (i = 0; i<numPasswords; i++) {
		passwordEls[i].textContent = passwords[i];
	}
}
