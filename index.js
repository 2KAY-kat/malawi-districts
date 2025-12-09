const districts = require("./data/districts.json");

function getDistricts() {
    return districts;
}

function getDistrictsSorted() {
    return [...districts].sort((a, b) => a.localeCompare(b));
}

module.exports = {
    getDistricts, 
    getDistrictsSorted
};