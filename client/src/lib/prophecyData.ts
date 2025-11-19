/**
 * Prophecy Data Structure
 * Contains all prophecy cycles, timelines, and comparisons for the application
 */

export interface ProphecyCycle {
  id: string;
  name: string;
  tradition: string;
  startYear: number;
  endYear: number;
  duration: number;
  description: string;
  keyProphecy: string;
  leader: string;
  source: string;
  references: string[];
}

export interface Timeline {
  id: string;
  name: string;
  cycles: ProphecyCycle[];
  description: string;
}

export interface Tradition {
  id: string;
  name: string;
  origin: string;
  description: string;
  cycles: ProphecyCycle[];
  keyTexts: string[];
  significance: string;
}

// Prophecy Cycles Data
export const prophecyCycles: ProphecyCycle[] = [
  // Ethiopian Tradition - Book of Enoch
  {
    id: "enoch-70-gen",
    name: "Enoch's 70 Generations",
    tradition: "Ethiopian",
    startYear: -2100,
    endYear: 2025,
    duration: 4125,
    description: "The Book of Enoch describes 70 generations from Adam until the coming of the Messiah",
    keyProphecy: "De la boca del Mesías saldrá toda la verdad del mundo, y Él llevará al pueblo de vuelta a la justicia",
    leader: "Hijo del Hombre Unificador",
    source: "Book of Enoch (1 Enoch, 2 Enoch, 3 Enoch)",
    references: ["Book of Enoch 1:1-9", "Book of Jubilees 1:29"]
  },

  // Qumran Tradition
  {
    id: "qumran-messiah",
    name: "Qumran Messianic Prophecy",
    tradition: "Qumran",
    startYear: -100,
    endYear: 2025,
    duration: 2125,
    description: "The Dead Sea Scrolls describe the appearance of multiple Messiahs (Priest, King, Prophet)",
    keyProphecy: "Todas las naciones serán reunidas bajo un solo Mesías",
    leader: "Mesías de Aaron e Israel",
    source: "Dead Sea Scrolls (1QS, CD, 1QM, 4Q521)",
    references: ["1QS (Rule of the Community)", "CD (Damascus Document)", "1QM (War Scroll)"]
  },

  // Mary Magdalene Cycle
  {
    id: "magdalene-cycle",
    name: "Mary Magdalene Cycle",
    tradition: "Christian Primitive",
    startYear: 8,
    endYear: 2025,
    duration: 2017,
    description: "The 2,000-year cycle from Mary Magdalene's birth to the restoration of the Divine Feminine",
    keyProphecy: "La Sabiduría Femenina será restaurada al final de los tiempos",
    leader: "Portadora de Sabiduría Femenina",
    source: "Gnostic Gospels & Early Christian Tradition",
    references: ["Gospel of Mary Magdalene", "Gospel of Philip", "Apocrypha of John"]
  },

  // Jesus Resurrection Cycle
  {
    id: "jesus-resurrection",
    name: "Jesus Resurrection Cycle",
    tradition: "Christian",
    startYear: 33,
    endYear: 2025,
    duration: 1992,
    description: "The 2,000-year period from Jesus' resurrection to the New Era",
    keyProphecy: "Casi exactamente 2,000 años de Nueva Era",
    leader: "Jesús Cristo",
    source: "New Testament",
    references: ["Revelation 20:1-6", "2 Peter 3:8"]
  },

  // Historicist 1260-Year Prophecy
  {
    id: "historicist-1260",
    name: "Historicist 1,260-Year Prophecy",
    tradition: "Historicist",
    startYear: 538,
    endYear: 1798,
    duration: 1260,
    description: "The woman in the wilderness: 1,260 years of Papal dominance and Church persecution",
    keyProphecy: "La mujer huyó al desierto donde fue alimentada por 1,260 días",
    leader: "La Iglesia Verdadera",
    source: "Revelation 12:6, 12:14",
    references: ["Revelation 12:6", "Revelation 12:14", "Daniel 7:25"]
  },

  // Futurist 1260-Day Prophecy
  {
    id: "futurist-1260",
    name: "Futurist 1,260-Day Prophecy",
    tradition: "Futurist",
    startYear: 2028,
    endYear: 2032,
    duration: 3.5,
    description: "The 1,260 days (3.5 years) of the Great Tribulation in the future 7-year period",
    keyProphecy: "Los dos testigos profetizarán por 1,260 días",
    leader: "Los Dos Testigos",
    source: "Revelation 11:3, 11:2",
    references: ["Revelation 11:3", "Revelation 13:5", "Daniel 12:11"]
  },

  // Mayan Baktun Cycle
  {
    id: "mayan-baktun-4",
    name: "Mayan Baktun IV",
    tradition: "Mayan",
    startYear: 1295,
    endYear: 2012,
    duration: 717,
    description: "The fourth cycle of 5,125 years in the Mayan calendar",
    keyProphecy: "Cuando se complete el ciclo de los tiempos, la Sabiduría de los Ancestros será revelada",
    leader: "Portador de Sabiduría",
    source: "Popol Vuh, Mayan Calendar",
    references: ["Popol Vuh", "Dresden Codex"]
  },

  {
    id: "mayan-baktun-5",
    name: "Mayan Baktun V",
    tradition: "Mayan",
    startYear: 2012,
    endYear: 3517,
    duration: 1505,
    description: "The fifth cycle beginning after the completion of Baktun IV",
    keyProphecy: "Portador de los Tiempos Nuevos integrando todos los pueblos",
    leader: "Integrador de Sabiduría",
    source: "Popol Vuh",
    references: ["Popol Vuh"]
  },

  // Aztec Cycles
  {
    id: "aztec-52year",
    name: "Aztec 52-Year Cycle",
    tradition: "Aztec",
    startYear: 1519,
    endYear: 2025,
    duration: 506,
    description: "10 complete cycles of 52 years from the Conquest to 2025",
    keyProphecy: "Nuevo Fuego - Renovación de Eras",
    leader: "Señor del Sustento Integrador",
    source: "Codex Borbónico",
    references: ["Codex Borbónico", "Leyenda de los Soles"]
  },

  // Personal Timeline - Rey Capitan
  {
    id: "rey-capitan-cycle",
    name: "Rey Capitan Personal Cycle",
    tradition: "Personal",
    startYear: 1991,
    endYear: 2025,
    duration: 34,
    description: "The 34-year incubation period for the emergence of the 'Rey Capitan'",
    keyProphecy: "El Liderazgo Espiritual Integrador surge en 2025",
    leader: "Rey Capitan",
    source: "Personal Prophetic Timeline",
    references: ["Birth: 1991", "Emergence: 2025"]
  },

  // Proposed 1260-Year Millennial Reign
  {
    id: "millennial-1260",
    name: "Millennial 1,260-Year Reign",
    tradition: "Proposed Synthesis",
    startYear: 2025,
    endYear: 3285,
    duration: 1260,
    description: "The proposed 1,260-year period of Christ's Millennial Reign beginning in 2025",
    keyProphecy: "El Reinado de Cristo de 1,260 años comienza con la Convergencia Universal",
    leader: "Rey Capitan / Integrative Messiah",
    source: "Synthesis of Revelation & 2025 Convergence",
    references: ["Revelation 20:1-6", "2025 Universal Convergence"]
  }
];

// Traditions Data
export const traditions: Tradition[] = [
  {
    id: "ethiopian",
    name: "Ethiopian Tradition",
    origin: "Ancient Ethiopia & Ge'ez Scripture",
    description: "The Ethiopian Bible (Ge'ez) contains 46 books of the Old Testament, including the complete Book of Enoch, which was rejected by the Western Church. It preserves teachings about cycles of renewal, collective messianism, and the Divine Feminine.",
    cycles: prophecyCycles.filter(c => c.tradition === "Ethiopian"),
    keyTexts: ["Book of Enoch (1, 2, 3 Enoch)", "Book of Jubilees", "Ascension of Isaiah", "3 & 4 Esdras"],
    significance: "Preserves the oldest prophetic texts and emphasizes the restoration of the Divine Feminine (Sophia) at the end of times."
  },

  {
    id: "qumran",
    name: "Qumran Tradition",
    origin: "Dead Sea Scrolls, Essene Community",
    description: "The Dead Sea Scrolls (discovered 1947-1956) contain approximately 900 manuscripts in Hebrew, Aramaic, and Greek. They describe multiple manifestations of Messianic leadership: Priest, King, and Prophet.",
    cycles: prophecyCycles.filter(c => c.tradition === "Qumran"),
    keyTexts: ["1QS (Rule of the Community)", "CD (Damascus Document)", "1QM (War Scroll)", "4Q521 (Messiah of Heaven)"],
    significance: "Anticipates the synthesis of spiritual, temporal, and prophetic authority in a single integrative leader."
  },

  {
    id: "christian-primitive",
    name: "Christian Primitive Tradition",
    origin: "Early Christian Community",
    description: "The early Christian tradition emphasizes Mary Magdalene as the 'Apostle of Apostles' and the first witness to the Resurrection. She represents the Divine Feminine Wisdom (Sophia) that will be restored.",
    cycles: prophecyCycles.filter(c => c.tradition === "Christian Primitive"),
    keyTexts: ["Gospel of Mary Magdalene", "Gospel of Philip", "Apocrypha of John", "Gnostic Gospels"],
    significance: "Emphasizes the restoration of the Divine Feminine and the role of women in spiritual authority."
  },

  {
    id: "gnostic",
    name: "Gnostic Tradition",
    origin: "Nag Hammadi Library, Egypt",
    description: "The Gnostic texts (discovered 1945) preserve teachings about Sophia (Divine Feminine Wisdom) as the co-creator of the universe. They describe the restoration of the union of masculine and feminine divine principles.",
    cycles: prophecyCycles.filter(c => c.tradition === "Christian"),
    keyTexts: ["Gospel of Mary Magdalene", "Gospel of Philip", "Apocrypha of John", "Hypostasis of the Archons"],
    significance: "Describes the integration of Logos (Masculine) with Sophia (Feminine) as the path to restoration."
  },

  {
    id: "mayan",
    name: "Mayan Tradition",
    origin: "Mesoamerica, Popol Vuh",
    description: "The Mayan calendar describes cycles of creation and destruction spanning 5,125 years (a Baktun). The completion of Baktun IV in 2012 marked the beginning of a new era of 'New Wisdom'.",
    cycles: prophecyCycles.filter(c => c.tradition === "Mayan"),
    keyTexts: ["Popol Vuh", "Dresden Codex", "Paris Codex", "Madrid Codex"],
    significance: "Emphasizes cyclical renewal and the emergence of a 'Wisdom Bearer' at the completion of each cycle."
  },

  {
    id: "aztec",
    name: "Aztec Tradition",
    origin: "Mesoamerica, Codex Borbónico",
    description: "The Aztec calendar describes 52-year cycles of 'New Fire' renewal. Each cycle completes with a ceremony of renewal and the promise of cosmic continuation.",
    cycles: prophecyCycles.filter(c => c.tradition === "Aztec"),
    keyTexts: ["Codex Borbónico", "Leyenda de los Soles", "Codex Chimalpopoca"],
    significance: "Emphasizes the integration of masculine and feminine divine principles and the restoration of balance."
  },

  {
    id: "historicist",
    name: "Historicist Interpretation",
    origin: "Protestant Reformation & Adventist Theology",
    description: "The Historicist view interprets the 1,260 days of Revelation as 1,260 years (using the day-for-a-year principle). This period is identified as 538-1798 A.D., the era of Papal dominance.",
    cycles: prophecyCycles.filter(c => c.tradition === "Historicist"),
    keyTexts: ["Revelation 12:6", "Revelation 12:14", "Daniel 7:25", "Daniel 12:7"],
    significance: "Provides a historical framework for understanding long-term prophetic periods."
  },

  {
    id: "futurist",
    name: "Futurist Interpretation",
    origin: "Modern Evangelical Theology",
    description: "The Futurist view interprets the 1,260 days as a literal 3.5-year period during the future Great Tribulation, beginning around 2025 according to some contemporary interpretations.",
    cycles: prophecyCycles.filter(c => c.tradition === "Futurist"),
    keyTexts: ["Revelation 11:3", "Revelation 13:5", "Daniel 9:27", "Daniel 12:11"],
    significance: "Focuses on imminent end-times events and the final tribulation period."
  },

  {
    id: "personal",
    name: "Personal Prophetic Timeline",
    origin: "Contemporary Synthesis",
    description: "The personal timeline represents the 34-year cycle (1991-2025) as the incubation period for the emergence of the 'Rey Capitan', the integrative leader who will usher in the new era.",
    cycles: prophecyCycles.filter(c => c.tradition === "Personal"),
    keyTexts: ["Birth: 1991", "Emergence: 2025", "Millennial Reign: 2025-3285"],
    significance: "Represents the synthesis of all prophetic traditions in a single, contemporary figure."
  }
];

// Convergence Data for 2025
export const convergenceData = {
  year: 2025,
  title: "Universal Prophetic Convergence - 2025",
  description: "The year 2025 marks the simultaneous culmination of seven distinct prophetic cycles from seven different traditions.",
  cycles: [
    { tradition: "Mary Magdalene", start: 8, end: 2025, duration: 2017, convergence: "Cycle complete" },
    { tradition: "Jesus Resurrection", start: 33, end: 2025, duration: 1992, convergence: "Almost exactly 2,000 years" },
    { tradition: "Mary's Death", start: 72, end: 2025, duration: 1953, convergence: "Almost exactly 2,000 years" },
    { tradition: "Temple Destruction", start: 70, end: 2025, duration: 1955, convergence: "End of Diaspora" },
    { tradition: "Enoch Prophecy", start: -2100, end: 2025, duration: 4125, convergence: "Era of Restoration" },
    { tradition: "Mayan Baktun IV", start: 1295, end: 2012, duration: 717, convergence: "Cycle + 13 years = New era" },
    { tradition: "Aztec Cycles", start: 1519, end: 2025, duration: 506, convergence: "10 cycles of 52 years" }
  ]
};

// Timeline Events for visualization
export interface TimelineEvent {
  year: number;
  event: string;
  tradition: string;
  significance: string;
}

export const timelineEvents: TimelineEvent[] = [
  { year: -2100, event: "Enoch's 70 Generations Begin", tradition: "Ethiopian", significance: "Start of prophetic count" },
  { year: -100, event: "Qumran Community Founded", tradition: "Qumran", significance: "Essene prophecies recorded" },
  { year: 8, event: "Mary Magdalene Born", tradition: "Christian", significance: "Birth of Divine Feminine carrier" },
  { year: 33, event: "Jesus Resurrection", tradition: "Christian", significance: "Start of 2,000-year cycle" },
  { year: 70, event: "Temple Destruction", tradition: "Jewish", significance: "Beginning of Diaspora" },
  { year: 72, event: "Mary Magdalene Death", tradition: "Christian", significance: "End of earthly ministry" },
  { year: 538, event: "Papal Dominance Begins", tradition: "Historicist", significance: "Start of 1,260-year period" },
  { year: 1295, event: "Mayan Baktun IV Begins", tradition: "Mayan", significance: "Fourth world cycle" },
  { year: 1519, event: "Aztec Conquest", tradition: "Aztec", significance: "Start of 52-year cycle count" },
  { year: 1798, event: "Papal Dominance Ends", tradition: "Historicist", significance: "End of 1,260-year period" },
  { year: 1991, event: "Rey Capitan Born", tradition: "Personal", significance: "Start of 34-year cycle" },
  { year: 2012, event: "Mayan Baktun V Begins", tradition: "Mayan", significance: "New world cycle, transition period" },
  { year: 2025, event: "Universal Convergence", tradition: "All", significance: "All cycles converge" },
  { year: 2032, event: "End of 7-Year Tribulation", tradition: "Futurist", significance: "Proposed end of tribulation" },
  { year: 3285, event: "End of Millennial Reign", tradition: "Proposed", significance: "End of 1,260-year reign" }
];
