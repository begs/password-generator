let passwordLength = 15;
let passwordEl1 = document.getElementById("password-el-1");
let passwordEl2 = document.getElementById("password-el-2");
let passwordEl3 = document.getElementById("password-el-3");
let passwordEl4 = document.getElementById("password-el-4");

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
	passwordEl1.innerText = generatePassword();
	passwordEl2.innerText = generatePassword();
	passwordEl3.innerText = generatePassword();
	passwordEl4.innerText = generatePassword();
}
