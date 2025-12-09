const { districts, regions } = require("./data/districts");

function getDistricts() {
    return districts;
}

function getDistrictsSorted() {
    return [...districts].sort((a, b) => a.localeCompare(b));
}

function getDistrictsByRegion(region) {
    if (!region) return null;
    const key = region.toLowerCase();
    return regions[key] || null;
}

module.exports = {
    districts,
    regions,
    getDistricts, 
    getDistrictsSorted,
    getDistrictsByRegion
};