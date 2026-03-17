export type District = {
  name: string;
  region: string;
  lat: number;
  lng: number;
  type: 'City' | 'District';
  class: 'Urban' | 'Rural';
  isCapital: boolean;
  poverty: number;
  population: number;
  neighbors: string[];
};

export const districts: string[];
export const regions: {
  northern: string[];
  central: string[];
  southern: string[];
  [key: string]: string[];
};

export const all: District[];

// Legacy (name-only) helpers
export function getDistricts(): string[];
export function getDistrictsSorted(): string[];
export function getDistrictsByRegion(region: string): string[] | null;

// New dataset helpers
export function getDistrictObjects(): District[];
export function getCapital(): District | undefined;
export function getByPovertyLevel(level: 'low' | 'medium' | 'high'): District[];
export function getTotalPopulation(region?: string): number;
export function getNeighbors(name: string): string[];
export function search(query: string): District[];
