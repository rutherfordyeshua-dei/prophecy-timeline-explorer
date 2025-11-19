import { describe, it, expect } from "vitest";
import {
  prophecyCycles,
  traditions,
  convergenceData,
  timelineEvents,
  ProphecyCycle,
  Tradition
} from "@/lib/prophecyData";

describe("Prophecy Data Structure", () => {
  describe("Prophecy Cycles", () => {
    it("should have at least 10 prophecy cycles", () => {
      expect(prophecyCycles.length).toBeGreaterThanOrEqual(10);
    });

    it("should have required fields for each cycle", () => {
      prophecyCycles.forEach((cycle: ProphecyCycle) => {
        expect(cycle).toHaveProperty("id");
        expect(cycle).toHaveProperty("name");
        expect(cycle).toHaveProperty("tradition");
        expect(cycle).toHaveProperty("startYear");
        expect(cycle).toHaveProperty("endYear");
        expect(cycle).toHaveProperty("duration");
        expect(cycle).toHaveProperty("description");
        expect(cycle).toHaveProperty("keyProphecy");
        expect(cycle).toHaveProperty("leader");
        expect(cycle).toHaveProperty("source");
        expect(cycle).toHaveProperty("references");
      });
    });

    it("should have valid year ranges", () => {
      prophecyCycles.forEach((cycle: ProphecyCycle) => {
        expect(cycle.startYear).toBeLessThanOrEqual(cycle.endYear);
        expect(cycle.duration).toBeGreaterThan(0);
      });
    });

    it("should have specific key cycles", () => {
      const cycleIds = prophecyCycles.map(c => c.id);
      expect(cycleIds).toContain("enoch-70-gen");
      expect(cycleIds).toContain("qumran-messiah");
      expect(cycleIds).toContain("magdalene-cycle");
      expect(cycleIds).toContain("historicist-1260");
      expect(cycleIds).toContain("mayan-baktun-4");
      expect(cycleIds).toContain("aztec-52year");
      expect(cycleIds).toContain("rey-capitan-cycle");
      expect(cycleIds).toContain("millennial-1260");
    });

    it("should have the 1260-year Millennial Reign cycle", () => {
      const millennialCycle = prophecyCycles.find(c => c.id === "millennial-1260");
      expect(millennialCycle).toBeDefined();
      expect(millennialCycle?.startYear).toBe(2025);
      expect(millennialCycle?.endYear).toBe(3285);
      expect(millennialCycle?.duration).toBe(1260);
    });

    it("should have the Rey Capitan personal cycle", () => {
      const reyCycle = prophecyCycles.find(c => c.id === "rey-capitan-cycle");
      expect(reyCycle).toBeDefined();
      expect(reyCycle?.startYear).toBe(1991);
      expect(reyCycle?.endYear).toBe(2025);
      expect(reyCycle?.duration).toBe(34);
    });

    it("should have the Historicist 1260-year period", () => {
      const historicistCycle = prophecyCycles.find(c => c.id === "historicist-1260");
      expect(historicistCycle).toBeDefined();
      expect(historicistCycle?.startYear).toBe(538);
      expect(historicistCycle?.endYear).toBe(1798);
      expect(historicistCycle?.duration).toBe(1260);
    });
  });

  describe("Traditions", () => {
    it("should have at least 8 traditions", () => {
      expect(traditions.length).toBeGreaterThanOrEqual(8);
    });

    it("should have required fields for each tradition", () => {
      traditions.forEach((tradition: Tradition) => {
        expect(tradition).toHaveProperty("id");
        expect(tradition).toHaveProperty("name");
        expect(tradition).toHaveProperty("origin");
        expect(tradition).toHaveProperty("description");
        expect(tradition).toHaveProperty("cycles");
        expect(tradition).toHaveProperty("keyTexts");
        expect(tradition).toHaveProperty("significance");
      });
    });

    it("should have specific key traditions", () => {
      const traditionIds = traditions.map(t => t.id);
      expect(traditionIds).toContain("ethiopian");
      expect(traditionIds).toContain("qumran");
      expect(traditionIds).toContain("christian-primitive");
      expect(traditionIds).toContain("mayan");
      expect(traditionIds).toContain("aztec");
      expect(traditionIds).toContain("historicist");
      expect(traditionIds).toContain("futurist");
      expect(traditionIds).toContain("personal");
    });

    it("should have cycles associated with each tradition", () => {
      traditions.forEach((tradition: Tradition) => {
        expect(tradition.cycles.length).toBeGreaterThan(0);
      });
    });

    it("should have key texts for each tradition", () => {
      traditions.forEach((tradition: Tradition) => {
        expect(tradition.keyTexts.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Convergence Data", () => {
    it("should have convergence year of 2025", () => {
      expect(convergenceData.year).toBe(2025);
    });

    it("should have 7 converging cycles", () => {
      expect(convergenceData.cycles.length).toBe(7);
    });

    it("should have required fields for each convergence cycle", () => {
      convergenceData.cycles.forEach(cycle => {
        expect(cycle).toHaveProperty("tradition");
        expect(cycle).toHaveProperty("start");
        expect(cycle).toHaveProperty("end");
        expect(cycle).toHaveProperty("duration");
        expect(cycle).toHaveProperty("convergence");
      });
    });

    it("should all converge in 2025", () => {
      convergenceData.cycles.forEach(cycle => {
        expect(cycle.end).toBe(2025);
      });
    });
  });

  describe("Timeline Events", () => {
    it("should have at least 10 timeline events", () => {
      expect(timelineEvents.length).toBeGreaterThanOrEqual(10);
    });

    it("should have required fields for each event", () => {
      timelineEvents.forEach(event => {
        expect(event).toHaveProperty("year");
        expect(event).toHaveProperty("event");
        expect(event).toHaveProperty("tradition");
        expect(event).toHaveProperty("significance");
      });
    });

    it("should include key historical events", () => {
      const eventYears = timelineEvents.map(e => e.year);
      expect(eventYears).toContain(1991); // Rey Capitan birth
      expect(eventYears).toContain(2025); // Universal Convergence
      expect(eventYears).toContain(2012); // Mayan Baktun V
      expect(eventYears).toContain(1798); // End of Papal dominance
      expect(eventYears).toContain(538);  // Start of Papal dominance
    });

    it("should be sorted chronologically", () => {
      const sortedEvents = [...timelineEvents].sort((a, b) => a.year - b.year);
      expect(timelineEvents).toEqual(sortedEvents);
    });
  });

  describe("Data Consistency", () => {
    it("should have no duplicate cycle IDs", () => {
      const ids = prophecyCycles.map(c => c.id);
      const uniqueIds = new Set(ids);
      expect(ids.length).toBe(uniqueIds.size);
    });

    it("should have no duplicate tradition IDs", () => {
      const ids = traditions.map(t => t.id);
      const uniqueIds = new Set(ids);
      expect(ids.length).toBe(uniqueIds.size);
    });

    it("should have all tradition cycles reference existing cycles", () => {
      const cycleIds = new Set(prophecyCycles.map(c => c.id));
      traditions.forEach(tradition => {
        tradition.cycles.forEach(cycle => {
          expect(cycleIds.has(cycle.id)).toBe(true);
        });
      });
    });

    it("should have all cycles belong to a tradition", () => {
      const traditionNames = new Set(traditions.map(t => t.name));
      prophecyCycles.forEach(cycle => {
        expect(Array.from(traditionNames)).toContain(cycle.tradition);
      });
    });
  });

  describe("Specific Prophecy Interpretations", () => {
    it("should correctly represent the 1260-year Historicist period", () => {
      const historicist = prophecyCycles.find(c => c.id === "historicist-1260");
      expect(historicist?.startYear).toBe(538);
      expect(historicist?.endYear).toBe(1798);
      expect(historicist?.duration).toBe(1260);
      expect(historicist?.description).toContain("Papal dominance");
    });

    it("should correctly represent the Mayan cycles", () => {
      const baktun4 = prophecyCycles.find(c => c.id === "mayan-baktun-4");
      const baktun5 = prophecyCycles.find(c => c.id === "mayan-baktun-5");
      
      expect(baktun4?.endYear).toBe(2012);
      expect(baktun5?.startYear).toBe(2012);
      expect(baktun4?.duration).toBe(717);
      expect(baktun5?.duration).toBe(1505);
    });

    it("should correctly represent the Rey Capitan cycle", () => {
      const reyCycle = prophecyCycles.find(c => c.id === "rey-capitan-cycle");
      expect(reyCycle?.startYear).toBe(1991);
      expect(reyCycle?.endYear).toBe(2025);
      expect(reyCycle?.duration).toBe(34);
      expect(reyCycle?.leader).toBe("Rey Capitan");
    });

    it("should correctly represent the 2025 convergence", () => {
      const convergingCycles = prophecyCycles.filter(c =>
        c.endYear === 2025 || c.startYear === 2025
      );
      expect(convergingCycles.length).toBeGreaterThanOrEqual(7);
    });
  });
});
