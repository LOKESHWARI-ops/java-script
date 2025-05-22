const eventName = "Music Concert";
const eventDate = "2025-06-15";
let availableSeats = 100;

let eventInfo = `Event: ${eventName}\nDate: ${eventDate}\nAvailable Seats: ${availableSeats}`;
console.log(eventInfo);

availableSeats--;
console.log(`After registration, available seats: ${availableSeats}`);

availableSeats++;
console.log(`After adding a seat, available seats: ${availableSeats}`);
