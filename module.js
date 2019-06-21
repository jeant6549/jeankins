/**
 * Calculate the age in years of a person.
 * 
 * @param {Person} p A person object implementing a birth Date parameter 
 * @return {number} The age in years of p.
 */

function calculate_age(p) {
    if (typeof p != "object") {
        throw "Parameter should be a nobject!";
    }
    if (typeof p.birth == "undefined") {
        throw "No birth attribute"
    }
    if (!(p.birth  instanceof Date)){
        throw "Non"
    }
    let thisYear = new Date().getFullYear();
    let personYear = p.birth.getFullYear();
    let age = thisYear - personYear;
    return age;
}

var bertignac  = {
    name: "Louis Bertignax",
    birth: new Date(1954, 01, 23)
}

QUnit.test("Standard usage", function(assert){
    let thisYear = 65;
    assert.equal(calculate_age(bertignac), thisYear, "Correct age");
    assert.equal(calculate_age({birth: new Date(1954, 01, 23)}), thisYear, "Correct age");
});

QUnit.test("Wrong type parameter", function(assert){
    assert.throws(function() {calculate_age(1872)}, "Parameter should be an object");
    assert.throws(function() {calculate_age("Something")}, "Parameter should be an object");
});

QUnit.test("Parameter without birth attribute", function(assert){
    assert.throws(function() {calculate_age({})}, "Parameter should have a birth attribute");
    assert.throws(function() {calculate_age({name: 'Jimmy Hendrix'})}, "Parameter should have a birth date");
});

QUnit.test("Bad date", function(assert){
    assert.throws(function() {calculate_age({birth: 'Non pas bon'})}, "Parameter should have a birth date");
});