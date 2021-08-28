// function that returns the current day of the week
function dayName(date) {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                        "Thursday", "Friday", "Saturday"];
    return daysOfTheWeek[date.getDay()];
}

function greeting() {
    let now = new Date();
    alert(`Hello, world! Happy ${dayName(now)}.`);
}

greeting();