const userKmetres = parseInt(prompt("Inserisci i chilomentri da percorrere per il tuo viaggio."));

console.log(userKmetres + "km");

if (isNaN(userKmetres)) {
    alert("I chilometri devono essere espressi in numeri interi.");
    console.error("I chilometri devono essere espressi in numeri interi.");
} else if (userKmetres > 1300) {
    alert("Mi dispiace ma il nostro servizio copre solo il territorio italiano.");
    console.error("Limite chilometri superato.");
}

const userAge = parseInt(prompt("Inserisci la tua età."));

if (isNaN(userAge)) {
    alert("L'età deve essere espressa in numeri interi.")
    console.error("L'età deve essere espressa in numeri interi.")
} else if (userAge > 120) {
    alert("Inserisci un'età plausibile per favore.")
    console.error("L'età non è plausibile.")
}

console.log(userAge + "anni")

let ticketPrice = userKmetres * 0.21;
let ticketUnder
let discountUnder;
let ticketOver;
let discountOver;


if (userAge > 65){
    discountOver = ((ticketPrice * 40) / 100)
    ticketOver = ticketPrice - discountOver
} else if (userAge < 18){
    discountUnder = ((ticketPrice * 20) / 100)
    ticketUnder = ticketPrice - discountUnder
}


if ((userAge > 65) && (userAge <= 120)){
    document.getElementById("ticket-price").innerHTML = (ticketOver.toFixed(2) + '&euro;');
    console.log('Il prezzo del ticket scontato per over 65 è ' + ticketOver + 'euro');
} else if ((userAge < 18) && (userAge > 0)){
    document.getElementById("ticket-price").innerHTML = (ticketUnder.toFixed(2) + '&euro;');
    console.log('Il prezzo del ticket scontato per minorenni è ' + ticketUnder + 'euro');
} else if ((userAge > 18) && (userAge < 65)){
    document.getElementById("ticket-price").innerHTML = (ticketPrice.toFixed(2) + '&euro;');
    console.log('Il prezzo del ticket è ' + ticketPrice + 'euro');
}

if ((userAge > 120) || (userAge < 1)){
    document.getElementById("ticket-price").innerHTML = ("ERRORE!!");
    console.error("Errore");
}