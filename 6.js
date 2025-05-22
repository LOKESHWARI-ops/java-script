const events = [
    { name: "Community Picnic", date: "June 15, 2025", category: "Outdoor" },
    { name: "Tech Talk", date: "July 20, 2025", category: "Workshop" },
    { name: "Music Fest", date: "August 10, 2025", category: "Music" }
];

events.push({ name: "Workshop on Baking", date: "September 5, 2025", category: "Workshop" });

const musicEvents = events.filter(event => event.category === "Music");

const eventCards = events.map(event => `${event.category} on ${event.name}`);

console.log(musicEvents);
console.log(eventCards);
