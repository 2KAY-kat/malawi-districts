const districts = require("./data/districts.json");

/**
 * Returns the full dataset of districts.
 * @returns {Array<Object>} Array of district objects.
 */
function getDistricts() {
    return districts;
}

/**
 * Returns the district object where isCapital is true.
 * @returns {Object|undefined} The capital district or undefined.
 */
function getCapital() {
    return districts.find((d) => d.isCapital === true);
}

/**
 * Filters districts by poverty level.
 * @param {'low'|'medium'|'high'} level
 * @returns {Array<Object>} Matching districts.
 */
function getByPovertyLevel(level) {
    if (!level) return [];
    const normalized = level.toLowerCase();

    return districts.filter((d) => {
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
        ? districts.filter((d) => d.region.toLowerCase() === region.toLowerCase())
        : districts;

    return target.reduce((sum, d) => sum + (d.population || 0), 0);
}

/**
 * Returns the neighbor list for a district name.
 * @param {string} name
 * @returns {Array<string>} Neighboring district names.
 */
function getNeighbors(name) {
    if (!name) return [];
    const match = districts.find((d) => d.name.toLowerCase() === name.toLowerCase());
    return match ? match.neighbors || [] : [];
}

/**
 * Fuzzy search districts by name or region.
 * @param {string} query
 * @returns {Array<Object>} Matching district objects.
 */
function search(query) {
    if (!query) return [];
    const q = query.toLowerCase();
    return districts.filter(
        (d) =>
            d.name.toLowerCase().includes(q) ||
            d.region.toLowerCase().includes(q)
    );
}

module.exports = {
    all: districts,
    getDistricts,
    getCapital,
    getByPovertyLevel,
    getTotalPopulation,
    getNeighbors,
    search
};
