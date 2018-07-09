function $(element) {
    return element.includes('#') ? document.getElementById(element.replace("#", "")) : document.getElementsByClassName(element.replace(".", ""))[0];
}

function calculate() {
    if (!document.getElementsByTagName("form")[0].checkValidity()) return;

    let currentAmount = Number($("#currentAmount").value);
    let desiredAmount = Number($("#desiredAmount").value);
    let amountPerWeek = Number($("#amountPerWeek").value);

    let currentDate = new Date();
    let dateEarned = currentDate;
    // Number relating to the day of the week, with 0 being sunday
    // and 6 being saturday
    let dayPaid = Number($("#dayPaid").value);

    let weeks = weeksUntilDesiredAmount(desiredAmount, currentAmount, amountPerWeek);

    // Determine when the next payday will be by forwarding the dateEarned by
    // 'weeks' amount of days and then subtracting the days until the next pay day would
    // occur
    dateEarned.setDate(
        (dateEarned.getDate() + 7*weeks) + daysUntil(dayPaid, currentDate.getDay()
    ));

    $(".date").innerText = `You will earn $${desiredAmount} on ${dateEarned.toDateString()}`;
}
// Calculate how many more weeks are required to earn desired amount
function weeksUntilDesiredAmount(desiredAmount, currentAmount, amountPerWeek) {
    if (amountPerWeek <= 0) throw "amountPerWeek must be greater than 0";

    // currentAmount + x * amountPerWeek = desiredAmount
    // x * amountPerWeek = desiredAmount - currentAmount
    // x = desiredAmount - currentAmount / amountPerWeek
    return Math.ceil(
        (desiredAmount - currentAmount) / amountPerWeek
    );
}

// Calculates the days until a given day from a specified day
// e.g. how many days from Tuesday until Saturday
// Parameters are both numbers indicating day of week, with 0 being sunday and
// 6 being saturday
function daysUntil(targetDay, currentDay) {
    // In the event the target day is a a cycle away (e.g. days from tuesday until monday)
    // add 7 to targetDay to mimic not being a cycle away
    targetDay += (targetDay < currentDay) ? 7 : 0;

    return targetDay-currentDay;
}