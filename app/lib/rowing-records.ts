export const GMS_TIMES_2024_2028 = [
  {
    "id": "m1x",
    "gms_500": 89.6,
    "gms_1000": 185.7,
    "gms_2000": 391.0,
    "gms_6000": 1092.8
  },
  {
    "id": "m2x",
    "gms_500": 82.5,
    "gms_1000": 171.0,
    "gms_2000": 360.0,
    "gms_6000": 1006.1
  },
  {
    "id": "m4x",
    "gms_500": 76.1,
    "gms_1000": 157.7,
    "gms_2000": 332.0,
    "gms_6000": 927.9
  },
  {
    "id": "m2-",
    "gms_500": 85.3,
    "gms_1000": 176.7,
    "gms_2000": 372.0,
    "gms_6000": 1039.7
  },
  {
    "id": "m4-",
    "gms_500": 77.7,
    "gms_1000": 161.0,
    "gms_2000": 339.0,
    "gms_6000": 947.5
  },
  {
    "id": "m8+",
    "gms_500": 73.1,
    "gms_1000": 151.5,
    "gms_2000": 319.0,
    "gms_6000": 891.6
  },
  {
    "id": "w1x",
    "gms_500": 98.1,
    "gms_1000": 203.3,
    "gms_2000": 428.0,
    "gms_6000": 1196.2
  },
  {
    "id": "w2x",
    "gms_500": 91.0,
    "gms_1000": 188.6,
    "gms_2000": 397.0,
    "gms_6000": 1109.6
  },
  {
    "id": "w4x",
    "gms_500": 83.9,
    "gms_1000": 173.9,
    "gms_2000": 366.0,
    "gms_6000": 1022.9
  },
  {
    "id": "w2-",
    "gms_500": 93.5,
    "gms_1000": 193.8,
    "gms_2000": 408.0,
    "gms_6000": 1140.7
  },
  {
    "id": "w4-",
    "gms_500": 85.7,
    "gms_1000": 177.7,
    "gms_2000": 374.0,
    "gms_6000": 1045.3
  },
  {
    "id": "w8+",
    "gms_500": 80.9,
    "gms_1000": 167.7,
    "gms_2000": 353.0,
    "gms_6000": 986.6
  }
] as const;

export type GmsReference = (typeof GMS_TIMES_2024_2028)[number];
export type GmsReferenceId = GmsReference["id"];

export const ROWING_RECORDS = [
  {
    "id": "men-1x-open",
    "label": "Men-Single Sculls",
    "year": 2017,
    "holder": {
      "nation": "New Zealand",
      "individuals": ["Robbie Manson"]
    },
    "time": "6:30.74",
    "seconds": 390.74
  },
  {
    "id": "men-2x-open",
    "label": "Men-Double Sculls",
    "year": 2014,
    "holder": {
      "nation": "Croatia",
      "individuals": ["Martin Sinković", "Valent Sinković"]
    },
    "time": "5:59.72",
    "seconds": 359.72
  },
  {
    "id": "men-2--open",
    "label": "Men-Coxless Pair",
    "year": 2012,
    "holder": {
      "nation": "New Zealand",
      "individuals": ["Hamish Bond", "Eric Murray"]
    },
    "time": "6:08.50",
    "seconds": 368.50
  },
  {
    "id": "men-4x-open",
    "label": "Men-Quadruple Sculls",
    "year": 2021,
    "holder": {
      "nation": "Netherlands",
      "individuals": ["Dirk Uittenbogaard", "Abe Wiersma", "Tone Wieten", "Koen Metsemakers"]
    },
    "time": "5:32.03",
    "seconds": 332.03
  },
  {
    "id": "men-4--open",
    "label": "Men-Coxless Four",
    "year": 2012,
    "holder": {
      "nation": "Great Britain",
      "individuals": ["Alex Gregory", "Pete Reed", "Tom James", "Andrew Triggs Hodge"]
    },
    "time": "5:37.86",
    "seconds": 337.86
  },
  {
    "id": "men-8+-open",
    "label": "Men-Eight",
    "year": 2017,
    "holder": {
      "nation": "Germany",
      "individuals": ["Johannes Weißenfeld", "Felix Wimberger", "Max Planer", "Torben Johannesen", "Jakob Schneider", "Malte Jakschik", "Richard Schmidt", "Hannes Ocik", "Martin Sauer"]
    },
    "time": "5:18.68",
    "seconds": 318.68
  },
  {
    "id": "men-1x-lightweight",
    "label": "Men-Lightweight Single Sculls",
    "year": 2024,
    "holder": {
      "nation": "Italy",
      "individuals": ["Niels Torre"]
    },
    "time": "6:39.56",
    "seconds": 399.56
  },
  {
    "id": "men-2x-lightweight",
    "label": "Men-Lightweight Double Sculls",
    "year": 2021,
    "holder": {
      "nation": "Ireland",
      "individuals": ["Fintan McCarthy", "Paul O'Donovan"]
    },
    "time": "6:05.33",
    "seconds": 365.33
  },
  {
    "id": "men-2--lightweight",
    "label": "Men-Lightweight Coxless Pair",
    "year": 2014,
    "holder": {
      "nation": "Switzerland",
      "individuals": ["Simon Niepmann", "Lucas Tramèr"]
    },
    "time": "6:22.91",
    "seconds": 382.91
  },
  {
    "id": "men-4--lightweight",
    "label": "Men-Lightweight Coxless Four",
    "year": 2014,
    "holder": {
      "nation": "Denmark",
      "individuals": ["Kasper Winther Jørgensen", "Jacob Larsen", "Jacob Barsøe", "Morten Jørgensen"]
    },
    "time": "5:43.16",
    "seconds": 343.16
  },
  {
    "id": "women-1x-open",
    "label": "Women-Single Sculls",
    "year": 2002,
    "holder": {
      "nation": "Bulgaria",
      "individuals": ["Rumyana Neykova"]
    },
    "time": "7:07.71",
    "seconds": 427.71
  },
  {
    "id": "women-2x-open",
    "label": "Women-Double Sculls",
    "year": 2014,
    "holder": {
      "nation": "Australia",
      "individuals": ["Olympia Aldersey", "Sally Kehoe"]
    },
    "time": "6:37.31",
    "seconds": 397.31
  },
  {
    "id": "women-2--open",
    "label": "Women-Coxless Pair",
    "year": 2023,
    "holder": {
      "nation": "Australia",
      "individuals": ["Annabelle McIntyre", "Jessica Morrison"]
    },
    "time": "6:47.11",
    "seconds": 407.11
  },
  {
    "id": "women-4x-open",
    "label": "Women-Quadruple Sculls",
    "year": 2021,
    "holder": {
      "nation": "China",
      "individuals": ["Chen Yunxia", "Zhang Ling", "Lü Yang", "Cui Xiaotong"]
    },
    "time": "6:05.13",
    "seconds": 365.13
  },
  {
    "id": "women-4--open",
    "label": "Women-Coxless Four",
    "year": 2014,
    "holder": {
      "nation": "New Zealand",
      "individuals": ["Grace Prendergast", "Kayla Pratt", "Kerri Gowler", "Kelsey Bevan"]
    },
    "time": "6:14.36",
    "seconds": 374.36
  },
  {
    "id": "women-8+-open",
    "label": "Women-Eight",
    "year": 2021,
    "holder": {
      "nation": "Romania",
      "individuals": ["Magdalena Rusu", "Viviana Bejinariu", "Georgiana Dedu", "Maria Tivodariu", "Ioana Vrinceanu", "Amalia Beres", "Madalina Beres", "Denisa Tilvescu", "Daniela Druncea"]
    },
    "time": "5:52.99",
    "seconds": 352.99
  },
  {
    "id": "women-1x-lightweight",
    "label": "Women-Lightweight Single Sculls",
    "year": 2022,
    "holder": {
      "nation": "Great Britain",
      "individuals": ["Imogen Grant"]
    },
    "time": "7:23.36",
    "seconds": 443.36
  },
  {
    "id": "women-2x-lightweight",
    "label": "Women-Lightweight Double Sculls",
    "year": 2023,
    "holder": {
      "nation": "Great Britain",
      "individuals": ["Emily Craig", "Imogen Grant"]
    },
    "time": "6:40.47",
    "seconds": 400.47
  },
  {
    "id": "women-2--lightweight",
    "label": "Women-Lightweight Coxless Pair",
    "year": 2024,
    "holder": {
      "nation": "Poland",
      "individuals": ["Jessika Sobocinska", "Katarzyna Wełna"]
    },
    "time": "7:17.02",
    "seconds": 437.02
  },
  {
    "id": "women-4x-lightweight",
    "label": "Women-Lightweight Quadruple Sculls",
    "year": 2014,
    "holder": {
      "nation": "Netherlands",
      "individuals": ["Mirte Kraaijkamp", "Elisabeth Woerner", "Maaike Head", "Ilse Paulis"]
    },
    "time": "6:15.95",
    "seconds": 375.95
  },
  {
    "id": "men-erg-open",
    "label": "Men-Indoor",
    "year": 2026,
    "holder": {
      "nation": "Netherlands",
      "individuals": ["Simon van Dorp"]
    },
    "time": "5:33.4",
    "seconds": 333.4
  },
  {
    "id": "men-erg-lightweight",
    "label": "Men-Indoor-Lightweight",
    "year": 2013,
    "holder": {
      "nation": "Denmark",
      "individuals": ["Henrik Stephansen"]
    },
    "time": "5:56.7",
    "seconds": 356.7
  },
  {
    "id": "women-erg-open",
    "label": "Women-Indoor",
    "year": 2021,
    "holder": {
      "nation": "USA",
      "individuals": ["Brooke Mooney"]
    },
    "time": "6:21.1",
    "seconds": 381.1
  },
  {
    "id": "women-erg-lightweight",
    "label": "Women-Indoor-Lightweight",
    "year": 2019,
    "holder": {
      "nation": "Canada",
      "individuals": ["Jennifer Casson"]
    },
    "time": "6:53.8",
    "seconds": 413.8
  }
] as const;

const GMS_RECORD_ID_BY_ROWING_RECORD_ID = {
  "men-1x-open": "m1x",
  "men-2x-open": "m2x",
  "men-4x-open": "m4x",
  "men-2--open": "m2-",
  "men-4--open": "m4-",
  "men-8+-open": "m8+",
  "women-1x-open": "w1x",
  "women-2x-open": "w2x",
  "women-4x-open": "w4x",
  "women-2--open": "w2-",
  "women-4--open": "w4-",
  "women-8+-open": "w8+",
} as const satisfies Partial<{ [key in RowingRecordId]: GmsReferenceId }>;

export type RowingRecord = (typeof ROWING_RECORDS)[number];
export type RowingRecordId = RowingRecord["id"];
export type Record = RowingRecord;

export function getRecordById(id: RowingRecordId) {
  return ROWING_RECORDS.find((entry) => entry.id === id) ?? null;
}

export function getGmsReferenceByRecordId(id: RowingRecordId) {
  if (!(id in GMS_RECORD_ID_BY_ROWING_RECORD_ID)) {
    return null;
  }

  const gmsReferenceId =
    GMS_RECORD_ID_BY_ROWING_RECORD_ID[
      id as keyof typeof GMS_RECORD_ID_BY_ROWING_RECORD_ID
    ];

  return GMS_TIMES_2024_2028.find((entry) => entry.id === gmsReferenceId) ?? null;
}

export function getGmsReferenceById(id: GmsReferenceId) {
  return GMS_TIMES_2024_2028.find((entry) => entry.id === id) ?? null;
}

export function getSplitFromSeconds(seconds: number) {
  return seconds / 4;
}