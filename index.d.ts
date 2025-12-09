/**
 * Array of all districts in Malawi.
 */
export const districts: string[];

/**
 * Object containing districts grouped by region.
 */
export const regions: {
    northern: string[];
    central: string[];
    southern: string[];
    [key: string]: string[];
};

/**
 * Returns the constant array of all districts in Malawi.
 * @returns Array of district names.
 */
export function getDistricts(): string[];

/**
 * Returns a new array of districts sorted alphabetically.
 * @returns Sorted array of district names.
 */
export function getDistrictsSorted(): string[];

/**
 * Returns an array of districts for a given region.
 * @param region - The region name (Northern, Central, Southern).
 * @returns Array of districts or null if region not found.
 */
export function getDistrictsByRegion(region: string): string[] | null;
