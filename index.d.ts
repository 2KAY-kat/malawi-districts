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

export const all: District[];

export function getDistricts(): District[];
export function getCapital(): District | undefined;
export function getByPovertyLevel(level: 'low' | 'medium' | 'high'): District[];
export function getTotalPopulation(region?: string): number;
export function getNeighbors(name: string): string[];
export function search(query: string): District[];
