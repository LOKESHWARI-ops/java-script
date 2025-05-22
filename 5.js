function Event(name, date, category, seats) {
    this.name = name;
    this.date = date;
    this.category = category;
    this.seats = seats;
}

Event.prototype.checkAvailability = function() {
    return this.seats > 0 ? "Seats available" : "No seats available";
};

const event1 = new Event("Community Picnic", "June 15, 2025", "Outdoor", 50);
const event2 = new Event("Tech Talk", "July 20, 2025", "Workshop", 0);

console.log(Object.entries(event1));
console.log(Object.entries(event2));
console.log(event1.checkAvailability());
console.log(event2.checkAvailability());
