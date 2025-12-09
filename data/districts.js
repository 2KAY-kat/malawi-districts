const districts = [
    "Balaka",
    "Blantyre",
    "Chikwawa",
    "Chiradzulu",
    "Chitipa",
    "Dedza",
    "Dowa",
    "Karonga",
    "Kasungu",
    "Likoma",
    "Lilongwe",
    "Machinga",
    "Mangochi",
    "Mchinji",
    "Mulanje",
    "Mwanza",
    "Mzimba",
    "Neno",
    "Nkhata Bay",
    "Nkhotakota",
    "Nsanje",
    "Ntcheu",
    "Ntchisi",
    "Phalombe",
    "Rumphi",
    "Salima",
    "Thyolo",
    "Zomba"
].sort();

const regions = {
    northern: [
        "Chitipa",
        "Karonga",
        "Likoma",
        "Mzimba",
        "Nkhata Bay",
        "Rumphi"
    ].sort(),

    central: [
        "Dedza",
        "Dowa",
        "Kasungu",
        "Lilongwe",
        "Mchinji",
        "Nkhotakota",
        "Ntcheu",
        "Ntchisi",
        "Salima"
    ].sort(),

    southern: [
        "Balaka",
        "Blantyre",
        "Chikwawa",
        "Chiradzulu",
        "Machinga",
        "Mangochi",
        "Mulanje",
        "Mwanza",
        "Neno",
        "Nsanje",
        "Phalombe",
        "Thyolo",
        "Zomba"
    ].sort()
};

module.exports = { districts, regions };