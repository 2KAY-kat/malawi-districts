# Malawi Districts

A light weight utility that provides a whole list of all districts in Malawi.
Useful in forms, dropdowns, validations and any location stuff that calls and needs Malawi's districts in it

## Instalation

``` bash
npm install malawi-districts
```
## Usage

``` js

const { getdistricts } = 
require("malawi-districts");

console.log(getdistricts());

```

Output:

``` json

[
    "Balaka", "Blantyre", "Chikwawa", ...
]

```

## The API 

getDistricts();

returns an array of districts in Malawi.

``` js 
const districts = getDistricts();
```

getDistrictsSorted();

returns an array of districts sorted alphabetically.

``` js
const sortedDistricts = getDistrictsSorted();
```

getDistrictsByRegion(region);

returns an array of districts in a specific region (Northern, Central, Southern).

``` js
const southernDistricts = getDistrictsByRegion("Southern");
```

## Data Source

District list is based on the official administrative divisions of Malawi.

## License
MIT

---

If you want:

- More sections (Contributing / Changelog / Typescript),
- Or "why this package exists" section...

Just say the word and I'll add and refine the package.

---