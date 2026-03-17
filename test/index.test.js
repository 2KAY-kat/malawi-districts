import { describe, it, expect } from "vitest";
import malawi from "../index.js";

describe("Malawi Districts Package", () => {

    it("returns the capital district", () => {
        const capital = malawi.getCapital();
        expect(capital).toBeDefined();
        expect(capital.name).toBe("Lilongwe City");
    });

    it("calculates regional population", () => {
        const centralPop = malawi.getTotalPopulation("Central");
        expect(centralPop).toBeGreaterThan(7_000_000);
    });

    it("filters by poverty level", () => {
        const lowPoverty = malawi.getByPovertyLevel("low");
        expect(lowPoverty.some((d) => d.name === "Blantyre City")).toBe(true);
    });

    it("searches districts by name", () => {
        const results = malawi.search("Mangochi");
        expect(results.length).toBeGreaterThan(0);
        expect(results[0].population).toBe(1148611);
    });

    it("returns neighbors for a district", () => {
        const neighbors = malawi.getNeighbors("Mchinji");
        expect(neighbors).toContain("Kasungu");
    });
});