const { expect } = require("chai");
const { batteryIsOk, language } = require("../src/bms-monitor");
const { parameters } = require("../src/utils/batteryParameters");

describe("Battery Monitor", function () {
  const testCases = [
    // temperature and soc are too low
    //1
    {
      values: [-10, 10, -0.1],
      expected: false,
      expectedMessage: {
        en: "Temperature is too low. State of Charge is too low.",
        de: "Temperatur ist zu niedrig. Ladezustand ist zu niedrig.",
        ar: "درجة الحرارة منخفضة جدًا. حالة الشحن منخفضة جدًا.",
        ms: "Suhu terlalu rendah. Keadaan cas terlalu rendah.",
      },
    },
    //2
    {
      values: [-10, 10, 0.7],
      expected: false,
      expectedMessage: {
        en: "Temperature is too low. State of Charge is too low.",
        de: "Temperatur ist zu niedrig. Ladezustand ist zu niedrig.",
        ar: "درجة الحرارة منخفضة جدًا. حالة الشحن منخفضة جدًا.",
        ms: "Suhu terlalu rendah. Keadaan cas terlalu rendah.",
      },
    },
    // 3
    {
      values: [-10, 10, 0.9],
      expected: false,
      expectedMessage: {
        en: "Temperature is too low. State of Charge is too low. Charge rate is too high.",
        de: "Temperatur ist zu niedrig. Ladezustand ist zu niedrig. Der Ladestrom ist zu hoch.",
        ar: "درجة الحرارة منخفضة جدًا. حالة الشحن منخفضة جدًا. معدل الشحن مرتفع جدًا.",
        ms: "Suhu terlalu rendah. Keadaan cas terlalu rendah. Kadar cas terlalu tinggi.",
      },
    }, //charge rate is high
    // 4
    //temperature is too low
    {
      values: [-10, 40, -0.1],
      expected: false,
      expectedMessage: {
        en: "Temperature is too low.",
        de: "Temperatur ist zu niedrig.",
        ar: "درجة الحرارة منخفضة جدًا.",
        ms: "Suhu terlalu rendah.",
      },
    },
    //5
    {
      values: [-10, 40, 0.7],
      expected: false,
      expectedMessage: {
        en: "Temperature is too low.",
        de: "Temperatur ist zu niedrig.",
        ar: "درجة الحرارة منخفضة جدًا.",
        ms: "Suhu terlalu rendah.",
      },
    },
    //6
    {
      values: [-10, 40, 0.9],
      expected: false,
      expectedMessage: {
        en: "Temperature is too low. Charge rate is too high.",
        de: "Temperatur ist zu niedrig. Der Ladestrom ist zu hoch.",
        ar: "درجة الحرارة منخفضة جدًا. معدل الشحن مرتفع جدًا.",
        ms: "Suhu terlalu rendah. Kadar cas terlalu tinggi.",
      },
    }, //charge rate is high
    //7
    //temperature is too low, soc is too high
    {
      values: [-10, 85, -0.1],
      expected: false,
      expectedMessage: {
        en: "Temperature is too low. State of charge is too high.",
        de: "Temperatur ist zu niedrig. Ladezustand ist zu hoch.",
        ar: "درجة الحرارة منخفضة جدًا. حالة الشحن مرتفعة جدًا.",
        ms: "Suhu terlalu rendah. Keadaan cas terlalu tinggi.",
      },
    },
    //8
    {
      values: [-10, 85, 0.7],
      expected: false,
      expectedMessage: {
        en: "Temperature is too low. State of charge is too high.",
        de: "Temperatur ist zu niedrig. Ladezustand ist zu hoch.",
        ar: "درجة الحرارة منخفضة جدًا. حالة الشحن مرتفعة جدًا.",
        ms: "Suhu terlalu rendah. Keadaan cas terlalu tinggi.",
      },
    },
    //9
    {
      values: [-10, 85, 0.9],
      expected: false,
      expectedMessage: {
        en: "Temperature is too low. State of charge is too high. Charge rate is too high.",
        de: "Temperatur ist zu niedrig. Ladezustand ist zu hoch. Der Ladestrom ist zu hoch.",
        ar: "درجة الحرارة منخفضة جدًا. حالة الشحن مرتفعة جدًا. معدل الشحن مرتفع جدًا.",
        ms: "Suhu terlalu rendah. Keadaan cas terlalu tinggi. Kadar cas terlalu tinggi.",
      },
    }, //charge rate is high
    //10
    //soc is too low
    {
      values: [30, 10, -0.1],
      expected: false,
      expectedMessage: {
        en: "State of Charge is too low.",
        de: "Ladezustand ist zu niedrig.",
        ar: "حالة الشحن منخفضة جدًا.",
        ms: "Keadaan cas terlalu rendah.",
      },
    },
    //11
    {
      values: [30, 10, 0.7],
      expected: false,
      expectedMessage: {
        en: "State of Charge is too low.",
        de: "Ladezustand ist zu niedrig.",
        ar: "حالة الشحن منخفضة جدًا.",
        ms: "Keadaan cas terlalu rendah.",
      },
    },
    //12
    {
      values: [30, 10, 0.9],
      expected: false,
      expectedMessage: {
        en: "State of Charge is too low. Charge rate is too high.",
        de: "Ladezustand ist zu niedrig. Der Ladestrom ist zu hoch.",
        ar: "حالة الشحن منخفضة جدًا. معدل الشحن مرتفع جدًا.",
        ms: "Keadaan cas terlalu rendah. Kadar cas terlalu tinggi.",
      },
    }, //charge rate is high
    //13
    // all parameters in range
    {
      values: [30, 40, -0.1],
      expected: true,
      expectedMessage: {
        en: "All parameters are within range.",
        de: "Alle Parameter sind im Rahmen.",
        ar: "جميع المعلمات ضمن النطاق.",
        ms: "Semua parameter berada dalam julat.",
      },
    },
    //14
    {
      values: [30, 40, 0.7],
      expected: true,
      expectedMessage: {
        en: "All parameters are within range.",
        de: "Alle Parameter sind im Rahmen.",
        ar: "جميع المعلمات ضمن النطاق.",
        ms: "Semua parameter berada dalam julat.",
      },
    },
    //15
    {
      values: [30, 40, 0.9],
      expected: false,
      expectedMessage: {
        en: "Charge rate is too high.",
        de: "Der Ladestrom ist zu hoch.",
        ar: "معدل الشحن مرتفع جدًا.",
        ms: "Kadar cas terlalu tinggi.",
      },
    }, //charge rate is high
    //16
    //soc is too high
    {
      values: [30, 85, -0.1],
      expected: false,
      expectedMessage: {
        en: "State of charge is too high.",
        de: "Ladezustand ist zu hoch.",
        ar: "حالة الشحن مرتفعة جدًا.",
        ms: "Keadaan cas terlalu tinggi.",
      },
    },
    //17
    {
      values: [30, 85, 0.7],
      expected: false,
      expectedMessage: {
        en: "State of charge is too high.",
        de: "Ladezustand ist zu hoch.",
        ar: "حالة الشحن مرتفعة جدًا.",
        ms: "Keadaan cas terlalu tinggi.",
      },
    },
    //18
    {
      values: [30, 85, 0.9],
      expected: false,
      expectedMessage: {
        en: "State of charge is too high. Charge rate is too high.",
        de: "Ladezustand ist zu hoch. Der Ladestrom ist zu hoch.",
        ar: "حالة الشحن مرتفعة جدًا. معدل الشحن مرتفع جدًا.",
        ms: "Keadaan cas terlalu tinggi. Kadar cas terlalu tinggi.",
      },
    }, //charge rate is high
    //19
    //temperature is too high, soc is too low
    {
      values: [50, 10, -0.1],
      expected: false,
      expectedMessage: {
        en: "Temperature is too high. State of Charge is too low.",
        de: "Temperatur ist zu hoch. Ladezustand ist zu niedrig.",
        ar: "درجة الحرارة مرتفعة جدًا. حالة الشحن منخفضة جدًا.",
        ms: "Suhu terlalu tinggi. Keadaan cas terlalu rendah.",
      },
    },
    //20
    {
      values: [50, 10, 0.7],
      expected: false,
      expectedMessage: {
        en: "Temperature is too high. State of Charge is too low.",
        de: "Temperatur ist zu hoch. Ladezustand ist zu niedrig.",
        ar: "درجة الحرارة مرتفعة جدًا. حالة الشحن منخفضة جدًا.",
        ms: "Suhu terlalu tinggi. Keadaan cas terlalu rendah.",
      },
    },
    //21
    {
      values: [50, 10, 0.9],
      expected: false,
      expectedMessage: {
        en: "Temperature is too high. State of Charge is too low. Charge rate is too high.",
        de: "Temperatur ist zu hoch. Ladezustand ist zu niedrig. Der Ladestrom ist zu hoch.",
        ar: "درجة الحرارة مرتفعة جدًا. حالة الشحن منخفضة جدًا. معدل الشحن مرتفع جدًا.",
        ms: "Suhu terlalu tinggi. Keadaan cas terlalu rendah. Kadar cas terlalu tinggi.",
      },
    }, //charge rate is high
    //22
    //temperature is too hifh
    {
      values: [50, 50, -0.1],
      expected: false,
      expectedMessage: {
        en: "Temperature is too high.",
        de: "Temperatur ist zu hoch.",
        ar: "درجة الحرارة مرتفعة جدًا.",
        ms: "Suhu terlalu tinggi.",
      },
    },
    //23
    {
      values: [50, 50, 0.7],
      expected: false,
      expectedMessage: {
        en: "Temperature is too high.",
        de: "Temperatur ist zu hoch.",
        ar: "درجة الحرارة مرتفعة جدًا.",
        ms: "Suhu terlalu tinggi.",
      },
    },
    //24
    {
      values: [50, 50, 0.9],
      expected: false,
      expectedMessage: {
        en: "Temperature is too high. Charge rate is too high.",
        de: "Temperatur ist zu hoch. Der Ladestrom ist zu hoch.",
        ar: "درجة الحرارة مرتفعة جدًا. معدل الشحن مرتفع جدًا.",
        ms: "Suhu terlalu tinggi. Kadar cas terlalu tinggi.",
      },
    }, //charge rate is high
    //25
    //temperature and soc are too high
    {
      values: [50, 85, -0.1],
      expected: false,
      expectedMessage: {
        en: "Temperature is too high. State of charge is too high.",
        de: "Temperatur ist zu hoch. Ladezustand ist zu hoch.",
        ar: "درجة الحرارة مرتفعة جدًا. حالة الشحن مرتفعة جدًا.",
        ms: "Suhu terlalu tinggi. Keadaan cas terlalu tinggi.",
      },
    },
    //26
    {
      values: [50, 85, 0.7],
      expected: false,
      expectedMessage: {
        en: "Temperature is too high. State of charge is too high.",
        de: "Temperatur ist zu hoch. Ladezustand ist zu hoch.",
        ar: "درجة الحرارة مرتفعة جدًا. حالة الشحن مرتفعة جدًا.",
        ms: "Suhu terlalu tinggi. Keadaan cas terlalu tinggi.",
      },
    },
    //27
    {
      values: [50, 85, 0.9],
      expected: false,
      expectedMessage: {
        en: "Temperature is too high. State of charge is too high. Charge rate is too high.",
        de: "Temperatur ist zu hoch. Ladezustand ist zu hoch. Der Ladestrom ist zu hoch.",
        ar: "درجة الحرارة مرتفعة جدًا. حالة الشحن مرتفعة جدًا. معدل الشحن مرتفع جدًا.",
        ms: "Suhu terlalu tinggi. Keadaan cas terlalu tinggi. Kadar cas terlalu tinggi.",
      },
    }, //charge rate is high

    //warning tests

    //28
    // for approaching low(temperature, soc)
    {
      values: [2, 24, 0.76],
      expected: false,
      expectedMessage: {
        en: "Warning: Charge Rate is approaching charge-peak (0.8C).",
        de: "Warnung: Laderate nähert sich dem Ladehöchstwert (0,8C).",
        ar: "تحذير: معدل الشحن يقترب من ذروة الشحن (0.8C).",
        ms: "Amaran: Kadar cas mendekati puncak cas (0.8C).",
      },
    },
    //29
    {
      values: [2, 25, 0.76],
      expected: false,
      expectedMessage: {
        en: "Warning: Charge Rate is approaching charge-peak (0.8C).",
        de: "Warnung: Laderate nähert sich dem Ladehöchstwert (0,8C).",
        ar: "تحذير: معدل الشحن يقترب من ذروة الشحن (0.8C).",
        ms: "Amaran: Kadar cas mendekati puncak cas (0.8C).",
      },
    },
    //30
    {
      values: [10, 24, 0.76],
      expected: false,
      expectedMessage: {
        en: "Warning: Charge Rate is approaching charge-peak (0.8C).",
        de: "Warnung: Laderate nähert sich dem Ladehöchstwert (0,8C).",
        ar: "تحذير: معدل الشحن يقترب من ذروة الشحن (0.8C).",
        ms: "Amaran: Kadar cas mendekati puncak cas (0.8C).",
      },
    },
    //31
    //for approching high
    {
      values: [43, 76, 0.76],
      expected: false,
      expectedMessage: {
        en: "Warning: Temperature is approaching upper limit (45°C). Warning: State of Charge is approaching charge-peak (80%). Warning: Charge Rate is approaching charge-peak (0.8C).",
        de: "Warnung: Temperatur nähert sich oberer Grenze (45°C). Warnung: Der Ladezustand nähert sich dem Ladehöchststand (80 %). Warnung: Laderate nähert sich dem Ladehöchstwert (0,8C).",
        ar: "تحذير: درجة الحرارة تقترب من الحد الأعلى (45 درجة مئوية). تحذير: حالة الشحن تقترب من ذروة الشحن (80٪). تحذير: معدل الشحن يقترب من ذروة الشحن (0.8C).",
        ms: "Amaran: Suhu mendekati had atas (45°C). Amaran: Keadaan cas mendekati puncak cas (80%). Amaran: Kadar cas mendekati puncak cas (0.8C).",
      },
    },
    //32
    {
      values: [43, 76, 0.7],
      expected: false,
      expectedMessage: {
        en: "Warning: Temperature is approaching upper limit (45°C). Warning: State of Charge is approaching charge-peak (80%).",
        de: "Warnung: Temperatur nähert sich oberer Grenze (45°C). Warnung: Der Ladezustand nähert sich dem Ladehöchststand (80 %).",
        ar: "تحذير: درجة الحرارة تقترب من الحد الأعلى (45 درجة مئوية). تحذير: حالة الشحن تقترب من ذروة الشحن (80٪).",
        ms: "Amaran: Suhu mendekati had atas (45°C). Amaran: Keadaan cas mendekati puncak cas (80%).",
      },
    },
    //33
    {
      values: [43, 25, 0.76],
      expected: false,
      expectedMessage: {
        en: "Warning: Temperature is approaching upper limit (45°C). Warning: Charge Rate is approaching charge-peak (0.8C).",
        de: "Warnung: Temperatur nähert sich oberer Grenze (45°C). Warnung: Laderate nähert sich dem Ladehöchstwert (0,8C).",
        ar: "تحذير: درجة الحرارة تقترب من الحد الأعلى (45 درجة مئوية). تحذير: معدل الشحن يقترب من ذروة الشحن (0.8C).",
        ms: "Amaran: Suhu mendekati had atas (45°C). Amaran: Kadar cas mendekati puncak cas (0.8C).",
      },
    },
    //34
    {
      values: [43, 25, 0.7],
      expected: false,
      expectedMessage: {
        en: "Warning: Temperature is approaching upper limit (45°C).",
        de: "Warnung: Temperatur nähert sich oberer Grenze (45°C).",
        ar: "تحذير: درجة الحرارة تقترب من الحد الأعلى (45 درجة مئوية).",
        ms: "Amaran: Suhu mendekati had atas (45°C).",
      },
    },
    //35
    {
      values: [10, 76, 0.76],
      expected: false,
      expectedMessage: {
        en: "Warning: State of Charge is approaching charge-peak (80%). Warning: Charge Rate is approaching charge-peak (0.8C).",
        de: "Warnung: Der Ladezustand nähert sich dem Ladehöchststand (80 %). Warnung: Laderate nähert sich dem Ladehöchstwert (0,8C).",
        ar: "تحذير: حالة الشحن تقترب من ذروة الشحن (80٪). تحذير: معدل الشحن يقترب من ذروة الشحن (0.8C).",
        ms: "Amaran: Keadaan cas mendekati puncak cas (80%). Amaran: Kadar cas mendekati puncak cas (0.8C).",
      },
    },
    //36
    {
      values: [10, 76, 0.7],
      expected: false,
      expectedMessage: {
        en: "Warning: State of Charge is approaching charge-peak (80%).",
        de: "Warnung: Der Ladezustand nähert sich dem Ladehöchststand (80 %).",
        ar: "تحذير: حالة الشحن تقترب من ذروة الشحن (80٪).",
        ms: "Amaran: Keadaan cas mendekati puncak cas (80%).",
      },
    },
  ];

  testCases.forEach((testCase, index) => {
    it(`should return ${testCase.expected} for test case ${
      index + 1
    }`, function () {
      let batteryCheckStatus = batteryIsOk(
        parameters.map((parameter, i) => ({
          ...parameter,
          value: testCase.values[i],
        }))
      );
      expect(batteryCheckStatus.isOk).to.equal(testCase.expected);
      expect(batteryCheckStatus.statusMessage.trim()).to.equal(
        testCase.expectedMessage[language].trim()
      ); //to test whether statusMessage language, message are correct
      console.log(
        `Test case ${index + 1}: ${batteryCheckStatus.statusMessage}`
      );
    });
  });
});
