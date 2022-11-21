// //Dichiarata variabile sui chilometri che si vogliono percorrere
// const userKmetres = parseInt(prompt("Inserisci i chilomentri da percorrere per il tuo viaggio."));
// console.log(userKmetres + "km");
// document.getElementById('user-km').innerHTML = (userKmetres + ' km');

// // Dichiarata variabile sull'età dell'utente
// const userAge = parseInt(prompt("Inserisci la tua età."));
// console.log(userAge + "anni");
// document.getElementById('user-age').innerHTML = (userAge + ' anni');

// //Dichiarazione variabili per il prezzo al km
// let ticketPrice = userKmetres * 0.21;


// if ((userAge > 0) && (userAge < 18)){
//     ticketPrice = (ticketPrice - ((ticketPrice * 20 ) / 100))
//     document.getElementById('ticket-price-under').innerHTML = (ticketPrice.toFixed(2) + '&euro;');
//     console.log('Il prezzo del ticket scontato per minorenni è ' + ticketPrice + 'euro');

// } else if (userAge >= 65){
//     ticketPrice = (ticketPrice - ((ticketPrice * 40 ) / 100))
//     document.getElementById('ticket-price-over').innerHTML = (ticketPrice.toFixed(2) + '&euro;');
//     console.log('Il prezzo del ticket scontato per maggiorenni è ' + ticketPrice + 'euro');
    
// } else {
//     document.getElementById("ticket-price").innerHTML = (ticketPrice.toFixed(2) + '&euro;');
//     console.log('Il prezzo del ticket è ' + ticketPrice + 'euro');
// }


//Dichiarata variabile sui chilometri che si vogliono percorrere
const userKmetres = parseInt(prompt("Inserisci i chilomentri da percorrere per il tuo viaggio."));
console.log(userKmetres + "km");
document.getElementById('user-km').innerHTML = (userKmetres + ' km');

if (userKmetres > 0){
    const userAge = parseInt(prompt("Inserisci la tua età."));
    console.log(userAge + "anni");
    document.getElementById('user-age').innerHTML = (userAge + ' anni');

    let ticketPrice = userKmetres * 0.21;

    if ((userAge > 0) && (userAge < 120)) {
        if (userAge < 18){
            ticketPrice = (ticketPrice - ((ticketPrice * 20 ) / 100))
            document.getElementById('ticket-price-under').innerHTML = (ticketPrice.toFixed(2) + '&euro;');
            console.log('Il prezzo del ticket scontato per minorenni è ' + ticketPrice + 'euro');
        } else if (userAge >= 65){
            ticketPrice = (ticketPrice - ((ticketPrice * 40 ) / 100))
            document.getElementById('ticket-price-over').innerHTML = (ticketPrice.toFixed(2) + '&euro;');
            console.log('Il prezzo del ticket scontato per maggiorenni è ' + ticketPrice + 'euro');
        } else {
            document.getElementById("ticket-price").innerHTML = (ticketPrice.toFixed(2) + '&euro;');
            console.log('Il prezzo del ticket è ' + ticketPrice + 'euro');
        }
    } else {
        alert("ERRORE! I dati inseriti non sono corretti!");
        console.error("Errore");
        document.getElementById('user-km').innerHTML = ('err');
        document.getElementById('user-age').innerHTML = (' err');
    }
} else {
    alert("ERRORE! I dati inseriti non sono corretti!");
    console.error("Errore");
    document.getElementById('user-km').innerHTML = ('err');
    document.getElementById('user-age').innerHTML = ('err');
}
