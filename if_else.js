var age = 22;
var ticketPrice = 0;

if (age <= 12) {
	var ticketPrice = 5;
} else if (age >= 12 && age <= 25) {
var ticketPrice = 8;
} else if (age >= 25 && age <= 60) {
	var ticketPrice = 12;
} else {
	var ticketPrice = 8;
}

console.log(ticketPrice);
