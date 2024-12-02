interface Observation {
  date: string;
  value: string;
  name: string;
  __typename: string;
  gdpGrowth: string;
  unemploymentRate: string;
}

export const generateMacroData = (
  country: string,
  startYear: number,
  endYear: number
): Observation[] => {
  const data: Observation[] = [];
  const startDate = new Date(`${startYear}-01-01`);
  const endDate = new Date(`${endYear}-12-31`);
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    let value: string;
    let gdpGrowth: string;
    let unemploymentRate: string;
    switch (country) {
      case "Argentina":
        value = (0 + Math.random() * 7).toFixed(1);
        gdpGrowth = (-2 + Math.random() * 4).toFixed(1);
        unemploymentRate = (5 + Math.random() * 10).toFixed(1);
        break;
      case "Venezuela":
        value = (1 + Math.random() * 8).toFixed(1);
        gdpGrowth = (-10 + Math.random() * 20).toFixed(1);
        unemploymentRate = (10 + Math.random() * 20).toFixed(1);
        break;
      case "Spain":
        value = (0 + Math.random() * 5).toFixed(1);
        gdpGrowth = (-1 + Math.random() * 3).toFixed(1);
        unemploymentRate = (5 + Math.random() * 10).toFixed(1);
        break;
      case "USA":
        value = (0 + Math.random() * 5).toFixed(1);
        gdpGrowth = (-1 + Math.random() * 3).toFixed(1);
        unemploymentRate = (3 + Math.random() * 5).toFixed(1);
        break;
      case "England":
        value = (0 + Math.random() * 5).toFixed(1);
        gdpGrowth = (-1 + Math.random() * 3).toFixed(1);
        unemploymentRate = (3 + Math.random() * 5).toFixed(1);
        break;
      case "Japan":
        value = (-1 + Math.random() * 2).toFixed(1);
        gdpGrowth = (-1 + Math.random() * 2).toFixed(1);
        unemploymentRate = (2 + Math.random() * 3).toFixed(1);
        break;
      default:
        value = (0).toFixed(1);
        gdpGrowth = (0).toFixed(1);
        unemploymentRate = (0).toFixed(1);
    }
    data.push({
      date: currentDate.toISOString().split("T")[0],
      value,
      name: country,
      __typename: "Observation",

      gdpGrowth,
      unemploymentRate,
    });
    currentDate.setMonth(currentDate.getMonth() + 1);
  }
  return data;
};

export const MACRO_DATA = [
  ...generateMacroData("Spain", 2023, 2024),
  ...generateMacroData("Argentina", 2023, 2024),
  ...generateMacroData("USA", 2023, 2024),
  ...generateMacroData("Japan", 2023, 2024),
];

// Collect all unique dates and sort them
export const ALL_DATES = Array.from(
  new Set(MACRO_DATA.map((obs) => obs.date))
).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
