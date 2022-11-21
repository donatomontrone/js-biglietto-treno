//Dichiarata variabile sui chilometri che si vogliono percorrere
const userKmetres = parseInt(prompt("Inserisci i chilomentri da percorrere per il tuo viaggio."));
console.log(userKmetres + "km");

// Dichiarata variabile sull'età dell'utente
const userAge = parseInt(prompt("Inserisci la tua età."));
console.log(userAge + "anni");

//Dichiarazione variabili per il prezzo al km
let ticketPrice = userKmetres * 0.21;


if (userAge < 18){
    let discount = (ticketPrice - ((ticketPrice * 20 ) / 100))
    document.getElementById('ticket-price').innerHTML = (discount.toFixed(2) + '&euro;');

} else if (userAge >= 65){
    let discount = (ticketPrice - ((ticketPrice * 40 ) / 100))
    document.getElementById('ticket-price').innerHTML = (discount.toFixed(2) + '&euro;');
} else {
    document.getElementById("ticket-price").innerHTML = (ticketPrice.toFixed(2) + '&euro;');
}