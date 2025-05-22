const events = [];

function addEvent(name, date, category, seats) {
    const event = { name, date, category, seats };
    events.push(event);
}

function registerUser(eventName) {
    for (let event of events) {
        if (event.name === eventName && event.seats > 0) {
            event.seats--;
            return `${eventName} registration successful.`;
        }
    }
    return `No available seats for ${eventName}.`;
}

function filterEventsByCategory(category, callback) {
    const filteredEvents = events.filter(event => event.category === category);
    callback(filteredEvents);
}

function createCategoryTracker(category) {
    let totalRegistrations = 0;
    return function() {
        totalRegistrations++;
        return `Total registrations for ${category}: ${totalRegistrations}`;
    };
}

addEvent("Community Picnic", "June 15, 2025", "Outdoor", 50);
addEvent("Tech Talk", "July 20, 2025", "Workshop", 30);
addEvent("Music Fest", "August 10, 2025", "Outdoor", 100);

const outdoorTracker = createCategoryTracker("Outdoor");
registerUser("Community Picnic");
console.log(outdoorTracker());

filterEventsByCategory("Outdoor", function(filteredEvents) {
    console.log(filteredEvents);
});
