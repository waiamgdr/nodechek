var generator = require('generate-password');
// Function to generate a random password
var password = generator.generate({
	length: 10,
	numbers: true,
    uppercase: false,
    symbols:false,
});

// Console.log the generated password
console.log(password);