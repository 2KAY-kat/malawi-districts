const districtObjects = require("./data/districts.json");
const { districts: districtNames, regions } = require("./data/districts.js");

/**
 * Returns a list of district names (legacy API).
 * @returns {string[]}
 */
function getDistricts() {
    return [...districtNames];
}

/**
 * Returns a list of district names sorted alphabetically (legacy API).
 * @returns {string[]}
 */
function getDistrictsSorted() {
    return [...districtNames];
}

/**
 * Returns an array of district names for a given region (legacy API).
 * @param {string} region
 * @returns {string[]|null}
 */
function getDistrictsByRegion(region) {
    if (!region) return null;
    const key = region.toString().toLowerCase();
    return regions[key] ? [...regions[key]] : null;
}

/**
 * Returns the full dataset of district objects.
 * @returns {Array<Object>} Array of district objects.
 */
function getDistrictObjects() {
    return [...districtObjects];
}

/**
 * Returns the district object where isCapital is true.
 * @returns {Object|undefined} The capital district or undefined.
 */
function getCapital() {
    return districtObjects.find((d) => d.isCapital === true);
}

/**
 * Filters districts by poverty level.
 * @param {'low'|'medium'|'high'} level
 * @returns {Array<Object>} Matching districts.
 */
function getByPovertyLevel(level) {
    if (!level) return [];
    const normalized = level.toString().toLowerCase();

    return districtObjects.filter((d) => {
        if (normalized === "low") return d.poverty < 30;
        if (normalized === "medium") return d.poverty >= 30 && d.poverty <= 60;
        if (normalized === "high") return d.poverty > 60;
        return false;
    });
}

/**
 * Returns the total population for a region or the whole country.
 * @param {string} [region] - Optional region name (Northern, Central, Southern)
 * @returns {number} Population sum.
 */
function getTotalPopulation(region = null) {
    const target = region
        ? districtObjects.filter((d) => d.region.toLowerCase() === region.toLowerCase())
        : districtObjects;

    return target.reduce((sum, d) => sum + (d.population || 0), 0);
}

/**
 * Returns the neighbor list for a district name.
 * @param {string} name
 * @returns {Array<string>} Neighboring district names.
 */
function getNeighbors(name) {
    if (!name) return [];
    const match = districtObjects.find((d) => d.name.toLowerCase() === name.toLowerCase());
    return match ? match.neighbors || [] : [];
}

/**
 * Fuzzy search districts by name or region.
 * @param {string} query
 * @returns {Array<Object>} Matching district objects.
 */
function search(query) {
    if (!query) return [];
    const q = query.toString().toLowerCase();
    return districtObjects.filter(
        (d) =>
            d.name.toLowerCase().includes(q) ||
            d.region.toLowerCase().includes(q)
    );
}

module.exports = {
    // Legacy APIs (name-only)
    districts: [...districtNames],
    regions: { ...regions },
    getDistricts,
    getDistrictsSorted,
    getDistrictsByRegion,

    // New dataset APIs
    all: districtObjects,
    getDistrictObjects,
    getCapital,
    getByPovertyLevel,
    getTotalPopulation,
    getNeighbors,
    search
};
