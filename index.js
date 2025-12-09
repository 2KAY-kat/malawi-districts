const { districts, regions } = require("./data/districts");

/**
 * Returns the constant array of all districts in Malawi.
 * @returns {string[]} Array of district names.
 */
function getDistricts() {
    return districts;
}

/**
 * Returns a new array of districts sorted alphabetically.
 * @returns {string[]} Sorted array of district names.
 */
function getDistrictsSorted() {
    return [...districts].sort((a, b) => a.localeCompare(b));
}

/**
 * Returns an array of districts for a given region.
 * @param {string} region - The region name (Northern, Central, Southern).
 * @returns {string[]|null} Array of districts or null if region not found.
 */
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