const plant = [
  {
    name: "Bayam",
    condition: [
      {
        plantCondition: "Kurang Air",
        firstHarvest: [22, 23],
        secondHarvest: [],
      },
      {
        plantCondition: "Cukup Air",
        firstHarvest: [19, 20],
        secondHarvest: [],
      },
      {
        plantCondition: "Air Berlebih",
        firstHarvest: [23, 24],
        secondHarvest: [],
      },
    ],
  },
  {
    name: "Kangkung",
    condition: [
      {
        plantCondition: "Kurang Air",
        firstHarvest: [22, 23],
        secondHarvest: [],
      },
      {
        plantCondition: "Cukup Air",
        firstHarvest: [19, 20],
        secondHarvest: [],
      },
      {
        plantCondition: "Air Berlebih",
        firstHarvest: [23, 24],
        secondHarvest: [],
      },
    ],
  },
  {
    name: "Kemangi",
    condition: [
      {
        plantCondition: "Kurang Air",
        firstHarvest: [44, 45],
        secondHarvest: [53, 54],
      },
      {
        plantCondition: "Cukup Air",
        firstHarvest: [39, 40],
        secondHarvest: [51, 52],
      },
      {
        plantCondition: "Air Berlebih",
        firstHarvest: [46, 47],
        secondHarvest: [55, 56],
      },
    ],
  },
];

function formatDateToIndonesian(date) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("id-ID", options);
}

function calculateHarvestDate(startDate, days) {
  let harvestDate = new Date(startDate);
  harvestDate.setDate(harvestDate.getDate() + days);
  return formatDateToIndonesian(harvestDate);
}

export { plant, formatDateToIndonesian, calculateHarvestDate };
