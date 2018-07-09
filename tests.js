function assertEquals(actual, expected, message) {
    if (expected !== actual) {
        throw "Test failed: " + message;
    }
}

function runTests() {
    daysUntilMondayFromSundayReturns1();
    daysUntilMondayFromMondayReturns0();
    daysUntilMondayFromTuesdayReturns6();
    weeksFrom0ToDesiredAmount50At50AWeekReturns1();
    weeksFrom0ToDesiredAmount0At1AWeekReturns0();
    weeksFrom50ToDesiredAmount125At50AWeekReturns2();
}

function weeksFrom0ToDesiredAmount50At50AWeekReturns1() {
    assertEquals(weeksUntilDesiredAmount(50, 0, 50), 1, "weeksUntilDesiredAmount from 0 to 50 at 50/week returns 1");
}

function weeksFrom0ToDesiredAmount0At1AWeekReturns0() {
    assertEquals(weeksUntilDesiredAmount(0, 0, 1), 0, "weeksUntilDesiredAmount from 0 to 0 at 1/week returns 0");
}

function weeksFrom50ToDesiredAmount125At50AWeekReturns2() {
    assertEquals(weeksUntilDesiredAmount(125, 50, 50), 2, "weeksUntilDesiredAmount from 50 to 125 at 50/week returns 2");
}

function daysUntilMondayFromSundayReturns1() {
    assertEquals(daysUntil(1, 0), 1, "daysUntil monday from sunday returns 1");
}

function daysUntilMondayFromMondayReturns0() {
    assertEquals(daysUntil(1, 1), 0, "daysUntil monday from monday returns 0");
}

function daysUntilMondayFromTuesdayReturns6() {
    assertEquals(daysUntil(1, 2), 6, "daysUntil mondays from tuesday returns 6");
}

runTests();