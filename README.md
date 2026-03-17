# Malawi Districts

A geospatial + socio-economic dataset of Malawi districts, including GPS centroids, poverty metrics, population totals (2018 PHC census), and neighbor relationships.

## Installation

```bash
npm install malawi-districts
```
## Quick Start

```js
const malawi = require('malawi-districts');

// full dataset
const all = malawi.all;

// capital district
const capital = malawi.getCapital();

// districts by poverty tier
const highPoverty = malawi.getByPovertyLevel('high');

// population totals
const southernPop = malawi.getTotalPopulation('Southern');

// neighbors for a district
const neighbors = malawi.getNeighbors('Blantyre City');

// fuzzy search by name or region
const search = malawi.search('Mangochi');
```

## Legacy v1 API (Name‑only Lists)

To keep backwards compatibility with v1, this package still provides a simple list of district names (no extra metadata).

```js
const { getDistricts, getDistrictsSorted, getDistrictsByRegion } = require('malawi-districts');

console.log(getDistricts().length);
console.log(getDistrictsByRegion('Central'));
```

You can also import the raw name list and region groups:

```js
const { districts, regions } = require('malawi-districts');
console.log(districts.length, Object.keys(regions));
```

## New Features (v2.0.0)

- **Geospatial**: `lat` / `lng` centroid coordinates for each district.
- **Socio-economic**: `poverty` (MPI %) and `population` (2018 PHC Census) fields.
- **Administrative classification**: `type` (`City` / `District`) and `class` (`Urban` / `Rural`).
- **Neighbor relationships**: `neighbors` lists adjacent districts.
- **New query helpers**:
  - `getCapital()` — returns the capital district object.
  - `getByPovertyLevel('low'|'medium'|'high')` — poverty-tier filtering.
  - `getTotalPopulation(region?)` — population sums by region or nationwide.
  - `getNeighbors(name)` — returns the border districts for a given district.
  - `search(query)` — fuzzy search by district name or region.

## API

### `malawi.all`

All districts as an array of objects.

### `malawi.getCapital()`

Returns the district object where `isCapital === true`.

### `malawi.getByPovertyLevel(level)`

- `low`: poverty < 30%
- `medium`: 30%–60%
- `high`: > 60%

### `malawi.getTotalPopulation(region)`

Returns total population for a region (`Northern`, `Central`, `Southern`) or the entire country when no region is provided.

### Migration Notes (v1 → v2)

- `getDistricts()` now returns a list of names (like v1). Use `malawi.all` or `getDistrictObjects()` for full objects.
- In v2, `districts` are objects with `lat`, `lng`, `poverty`, `population`, etc.

## Data Sources

Data in this package is compiled from the following sources:

- **NSO Malawi** – Multidimensional Poverty Index (MPI) and socio-economic data.
- **2018 Population and Housing Census (PHC)** – population totals.
- **UN OCHA** – centroid coordinates (latitude/longitude) from Malawi administrative boundary datasets.

## License

MIT

---