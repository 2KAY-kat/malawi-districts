import { describe, it, expect } from "vitest";
import { getDistricts, getDistrictsByRegion, getDistrictsSorted } from "../index.js";

describe("Malawi Districts Package", () => {

    it("returns all districts", () => {
        const districts = getDistricts();

        expect(districts.length).toBeGreaterThan(20);
        expect(districts).toContain("Blantyre");
    });

    it("returns sorted districts", () => {
        const sorted = getDistrictsSorted();

        expect(sorted).toEqual([...sorted].sort());
    });

    it("returns districts by region", () => {
        const southern = getDistrictsByRegion("southern");
        expect(southern).toContain("Mulanje");
        expect(southern).toContain("Blantyre");

        const unknown = getDistrictsByRegion("something");
        expect(unknown).toBeNull();
    });

});