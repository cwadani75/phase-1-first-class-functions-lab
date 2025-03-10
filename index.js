// Returns the first two drivers from an array
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);

// Returns the last two drivers from an array
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

// Array storing the two driver selection functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function to create a fare multiplier
const createFareMultiplier = (multiplier) => (fare) => fare * multiplier;

// Doubles the fare
const fareDoubler = createFareMultiplier(2);

// Triples the fare
const fareTripler = createFareMultiplier(3);

// Function to select different drivers based on a passed function
const selectDifferentDrivers = (arrayOfDrivers, driverFunction) => driverFunction(arrayOfDrivers);

// Export functions for testing (if using Node.js)
module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
};
