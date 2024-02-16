//en: English language code (Global)
//de: German language code (Germany)
//ar: Arabic language code (UAE)
//ms: Malay language code (Singapore)

const parameters = [
  {
    name: "Temperature",
    lowerBound: 0,
    upperBound: 45,
    en: {
      lowMessage: "Temperature is too low",
      highMessage: "Temperature is too high",
      warningLowMessage:
        "Warning: Temperature is approaching lower limit (0°C)",
      warningHighMessage:
        "Warning: Temperature is approaching upper limit (45°C)",
    },
    de: {
      lowMessage: "Temperatur ist zu niedrig",
      highMessage: "Temperatur ist zu hoch",
      warningLowMessage: "Warnung: Temperatur nähert sich unterer Grenze (0°C)",
      warningHighMessage:
        "Warnung: Temperatur nähert sich oberer Grenze (45°C)",
    },
    ar: {
      lowMessage: "درجة الحرارة منخفضة جدًا",
      highMessage: "درجة الحرارة مرتفعة جدًا",
      warningLowMessage:
        "تحذير: درجة الحرارة تقترب من الحد الأدنى (0 درجة مئوية)",
      warningHighMessage:
        "تحذير: درجة الحرارة تقترب من الحد الأعلى (45 درجة مئوية)",
    },
    ms: {
      lowMessage: "Suhu terlalu rendah",
      highMessage: "Suhu terlalu tinggi",
      warningLowMessage: "Amaran: Suhu mendekati had rendah (0°C)",
      warningHighMessage: "Amaran: Suhu mendekati had atas (45°C)",
    },
  },
  {
    name: "State of Charge",
    lowerBound: 20,
    upperBound: 80,
    en: {
      lowMessage: "State of Charge is too low",
      highMessage: "State of charge is too high",
      warningLowMessage:
        "Warning: State of Charge is approaching discharge (20%)",
      warningHighMessage:
        "Warning: State of Charge is approaching charge-peak (80%)",
    },
    de: {
      lowMessage: "Ladezustand ist zu niedrig",
      highMessage: "Ladezustand ist zu hoch",
      warningLowMessage:
        "Warnung: Der Ladezustand nähert sich der Entladung (20 %)",
      warningHighMessage:
        "Warnung: Der Ladezustand nähert sich dem Ladehöchststand (80 %)",
    },
    ar: {
      lowMessage: "حالة الشحن منخفضة جدًا",
      highMessage: "حالة الشحن مرتفعة جدًا",
      warningLowMessage: "تحذير: حالة الشحن تقترب من التفريغ (20٪)",
      warningHighMessage: "تحذير: حالة الشحن تقترب من ذروة الشحن (80٪)",
    },
    ms: {
      lowMessage: "Keadaan cas terlalu rendah",
      highMessage: "Keadaan cas terlalu tinggi",
      warningLowMessage: "Amaran: Keadaan cas mendekati pengecasan (20%)",
      warningHighMessage: "Amaran: Keadaan cas mendekati puncak cas (80%)",
    },
  },
  {
    name: "Charge Rate",
    lowerBound: null, //because chargeRate has no lower bound
    upperBound: 0.8,
    en: {
      highMessage: "Charge rate is too high",
      warningHighMessage:
        "Warning: Charge Rate is approaching charge-peak (0.8C)",
    },
    de: {
      highMessage: "Der Ladestrom ist zu hoch",
      warningHighMessage:
        "Warnung: Laderate nähert sich dem Ladehöchstwert (0,8C)",
    },
    ar: {
      highMessage: "معدل الشحن مرتفع جدًا",
      warningHighMessage: "تحذير: معدل الشحن يقترب من ذروة الشحن (0.8C)",
    },
    ms: {
      highMessage: "Kadar cas terlalu tinggi",
      warningHighMessage: "Amaran: Kadar cas mendekati puncak cas (0.8C)",
    },
  },
];

module.exports = { parameters };
