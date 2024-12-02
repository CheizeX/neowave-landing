export const formatValue = (value: number): string => {
  if (Math.abs(value) >= 1e9) {
    return (value / 1e9).toFixed(1) + "B";
  }
  if (Math.abs(value) >= 1e6) {
    return (value / 1e6).toFixed(1) + "M";
  }
  if (Math.abs(value) >= 1e3) {
    return (value / 1e3).toFixed(1) + "K";
  }
  return value.toString();
};

export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
};

export const generateDates = (count: number): string[] => {
  const dates: string[] = [];
  // Ajustamos la fecha de inicio para que termine en 2024
  const startDate = new Date("2021-01-01");

  for (let i = 0; i < count; i++) {
    dates.push(startDate.toISOString().slice(0, 10));
    startDate.setMonth(startDate.getMonth() + 1);
  }

  return dates;
};

export const FINANCIAL_DATA = [
  {
    revenue: 391035000000,
    grossProfit: 180683000000,
    operatingIncome: 123216000000,
    netIncome: 93736000000,
  },
  {
    revenue: 383285000000,
    grossProfit: 169148000000,
    operatingIncome: 114301000000,
    netIncome: 96995000000,
  },
  {
    revenue: 394328000000,
    grossProfit: 170782000000,
    operatingIncome: 119437000000,
    netIncome: 99803000000,
  },
  {
    revenue: 365817000000,
    grossProfit: 152836000000,
    operatingIncome: 108949000000,
    netIncome: 94680000000,
  },
  {
    revenue: 274515000000,
    grossProfit: 104956000000,
    operatingIncome: 66288000000,
    netIncome: 57411000000,
  },
  {
    revenue: 260174000000,
    grossProfit: 98392000000,
    operatingIncome: 63930000000,
    netIncome: 55256000000,
  },
  {
    revenue: 265595000000,
    grossProfit: 101839000000,
    operatingIncome: 70898000000,
    netIncome: 59531000000,
  },
  {
    revenue: 229234000000,
    grossProfit: 88186000000,
    operatingIncome: 61344000000,
    netIncome: 48351000000,
  },
  {
    revenue: 215639000000,
    grossProfit: 84263000000,
    operatingIncome: 62567000000,
    netIncome: 45687000000,
  },
  {
    revenue: 233715000000,
    grossProfit: 93626000000,
    operatingIncome: 71230000000,
    netIncome: 53394000000,
  },
  {
    revenue: 182795000000,
    grossProfit: 70537000000,
    operatingIncome: 52503000000,
    netIncome: 39510000000,
  },
  {
    revenue: 170910000000,
    grossProfit: 64304000000,
    operatingIncome: 50479000000,
    netIncome: 37037000000,
  },
  {
    revenue: 156508000000,
    grossProfit: 68662000000,
    operatingIncome: 55241000000,
    netIncome: 41733000000,
  },
  {
    revenue: 108249000000,
    grossProfit: 43818000000,
    operatingIncome: 33790000000,
    netIncome: 25922000000,
  },
  {
    revenue: 65225000000,
    grossProfit: 25684000000,
    operatingIncome: 18385000000,
    netIncome: 14013000000,
  },
  {
    revenue: 36537000000,
    grossProfit: 13140000000,
    operatingIncome: 7658000000,
    netIncome: 5704000000,
  },
  {
    revenue: 32479000000,
    grossProfit: 11145000000,
    operatingIncome: 6275000000,
    netIncome: 4834000000,
  },
  {
    revenue: 24006000000,
    grossProfit: 8154000000,
    operatingIncome: 4409000000,
    netIncome: 3495000000,
  },
  {
    revenue: 19315000000,
    grossProfit: 5598000000,
    operatingIncome: 2453000000,
    netIncome: 1989000000,
  },
  {
    revenue: 13931000000,
    grossProfit: 4043000000,
    operatingIncome: 1650000000,
    netIncome: 1328000000,
  },
  {
    revenue: 8279000000,
    grossProfit: 2259000000,
    operatingIncome: 326000000,
    netIncome: 266000000,
  },
  {
    revenue: 6207000000,
    grossProfit: 1708000000,
    operatingIncome: 89000000,
    netIncome: 69000000,
  },
  {
    revenue: 5742000000,
    grossProfit: 1603000000,
    operatingIncome: 168000000,
    netIncome: 65000000,
  },
  {
    revenue: 5363000000,
    grossProfit: 1235000000,
    operatingIncome: -344000000,
    netIncome: -37000000,
  },
  {
    revenue: 7983000000,
    grossProfit: 2166000000,
    operatingIncome: 836000000,
    netIncome: 786000000,
  },
  {
    revenue: 6134000000,
    grossProfit: 1696000000,
    operatingIncome: 528000000,
    netIncome: 601000000,
  },
  {
    revenue: 5941000000,
    grossProfit: 1479000000,
    operatingIncome: 299000000,
    netIncome: 309000000,
  },
  {
    revenue: 7081000000,
    grossProfit: 1368000000,
    operatingIncome: -778000000,
    netIncome: -1326000000,
  },
  {
    revenue: 9833000000,
    grossProfit: 968000000,
    operatingIncome: -1204000000,
    netIncome: -816000000,
  },
  {
    revenue: 11062000000,
    grossProfit: 2858000000,
    operatingIncome: 684000000,
    netIncome: 424000000,
  },
  {
    revenue: 9188748000,
    grossProfit: 2343833000,
    operatingIncome: 522274000,
    netIncome: 310000000,
  },
  {
    revenue: 7977000000,
    grossProfit: 2894300000,
    operatingIncome: 81100000,
    netIncome: 87000000,
  },
  {
    revenue: 7086500000,
    grossProfit: 3312300000,
    operatingIncome: 805700000,
    netIncome: 530373000,
  },
  {
    revenue: 6308800000,
    grossProfit: 3199100000,
    operatingIncome: 447300000,
    netIncome: 309800000,
  },
  {
    revenue: 5558400000,
    grossProfit: 3154900000,
    operatingIncome: 712000000,
    netIncome: 474900000,
  },
  {
    revenue: 5284000000,
    grossProfit: 2714000000,
    operatingIncome: 634300000,
    netIncome: 454000000,
  },
  {
    revenue: 4071400000,
    grossProfit: 2158200000,
    operatingIncome: 620300000,
    netIncome: 400300000,
  },
  {
    revenue: 2661100000,
    grossProfit: 1435400000,
    operatingIncome: 371500000,
    netIncome: 217500000,
  },
  {
    revenue: 1901900000,
    grossProfit: 1061900000,
    operatingIncome: 273500000,
    netIncome: 154000000,
  },
  {
    revenue: 1918300000,
    grossProfit: 842300000,
    operatingIncome: 147300000,
    netIncome: 61200000,
  },
];
