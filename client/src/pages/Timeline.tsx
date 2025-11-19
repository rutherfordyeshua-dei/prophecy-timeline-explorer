import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Clock, ChevronLeft } from "lucide-react";
import { timelineEvents, prophecyCycles } from "@/lib/prophecyData";

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<typeof timelineEvents[0] | null>(null);
  const [zoomLevel, setZoomLevel] = useState(100);

  // Sort events by year
  const sortedEvents = [...timelineEvents].sort((a, b) => a.year - b.year);

  // Calculate timeline scale
  const minYear = Math.min(...sortedEvents.map(e => e.year));
  const maxYear = Math.max(...sortedEvents.map(e => e.year));
  const yearRange = maxYear - minYear;

  const getEventPosition = (year: number) => {
    return ((year - minYear) / yearRange) * 100;
  };

  const getTraditionColor = (tradition: string) => {
    const colors: { [key: string]: string } = {
      "Ethiopian": "bg-amber-600",
      "Qumran": "bg-purple-600",
      "Christian": "bg-red-600",
      "Jewish": "bg-blue-600",
      "Historicist": "bg-green-600",
      "Mayan": "bg-emerald-600",
      "Aztec": "bg-orange-600",
      "Personal": "bg-pink-600",
      "Futurist": "bg-indigo-600",
      "All": "bg-yellow-600",
      "Proposed": "bg-cyan-600"
    };
    return colors[tradition] || "bg-slate-600";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="text-slate-200 hover:text-white">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-amber-500" />
            <h1 className="text-xl font-bold text-white">Interactive Timeline</h1>
          </div>
          <div className="w-32"></div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="flex-1 container py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Prophecy Cycles Timeline</h2>
          <p className="text-slate-300">Explore major prophetic events from {minYear} to {maxYear} A.D.</p>
        </div>

        {/* Zoom Controls */}
        <div className="mb-6 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setZoomLevel(Math.max(50, zoomLevel - 10))}
            className="border-amber-600 text-amber-600 hover:bg-amber-600/10"
          >
            Zoom Out
          </Button>
          <span className="text-sm text-slate-400 py-2 px-4">{zoomLevel}%</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setZoomLevel(Math.min(200, zoomLevel + 10))}
            className="border-amber-600 text-amber-600 hover:bg-amber-600/10"
          >
            Zoom In
          </Button>
        </div>

        {/* Timeline Visualization */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-white">Historical Timeline</CardTitle>
            <CardDescription>Major events in prophecy cycles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto pb-4">
              <div className="relative h-96" style={{ minWidth: `${zoomLevel}%` }}>
                {/* Timeline axis */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 via-amber-500 to-slate-600"></div>

                {/* Events */}
                {sortedEvents.map((event, idx) => {
                  const position = getEventPosition(event.year);
                  return (
                    <div
                      key={idx}
                      className="absolute cursor-pointer group"
                      style={{
                        left: `${position}%`,
                        top: idx % 2 === 0 ? "20px" : "200px",
                        transform: "translateX(-50%)"
                      }}
                      onClick={() => setSelectedEvent(event)}
                    >
                      {/* Event marker */}
                      <div className={`w-3 h-3 rounded-full ${getTraditionColor(event.tradition)} border-2 border-slate-800 mx-auto mb-2 group-hover:scale-150 transition`}></div>

                      {/* Event label */}
                      <div className="text-xs text-slate-300 text-center whitespace-nowrap opacity-0 group-hover:opacity-100 transition bg-slate-900/90 p-2 rounded border border-slate-700 -ml-12 w-28">
                        <div className="font-bold text-amber-400">{event.year}</div>
                        <div>{event.event}</div>
                      </div>

                      {/* Connector line */}
                      <div className="absolute left-1/2 w-0.5 bg-slate-600 group-hover:bg-amber-500 transition" style={{
                        height: idx % 2 === 0 ? "160px" : "-160px",
                        top: idx % 2 === 0 ? "12px" : "-160px"
                      }} />
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Event Details */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {selectedEvent ? (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-4 h-4 rounded-full ${getTraditionColor(selectedEvent.tradition)}`}></div>
                    <CardTitle className="text-white">{selectedEvent.event}</CardTitle>
                  </div>
                  <CardDescription>Year {selectedEvent.year} • {selectedEvent.tradition}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">{selectedEvent.significance}</p>

                  {/* Find related prophecy cycle */}
                  {prophecyCycles.find(c => c.startYear === selectedEvent.year || c.endYear === selectedEvent.year) && (
                    <div className="bg-slate-900/50 p-4 rounded border border-slate-700">
                      <h4 className="font-bold text-amber-400 mb-2">Related Prophecy Cycle</h4>
                      {prophecyCycles
                        .filter(c => c.startYear === selectedEvent.year || c.endYear === selectedEvent.year)
                        .map(cycle => (
                          <div key={cycle.id} className="text-sm text-slate-300">
                            <p className="font-semibold text-white">{cycle.name}</p>
                            <p>{cycle.description}</p>
                            <p className="mt-2 italic text-slate-400">"{cycle.keyProphecy}"</p>
                          </div>
                        ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <p className="text-slate-400 text-center">Click on a timeline event to see details</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Legend */}
          <Card className="bg-slate-800/50 border-slate-700 h-fit">
            <CardHeader>
              <CardTitle className="text-white text-lg">Traditions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[
                  { name: "Ethiopian", color: "bg-amber-600" },
                  { name: "Qumran", color: "bg-purple-600" },
                  { name: "Christian", color: "bg-red-600" },
                  { name: "Jewish", color: "bg-blue-600" },
                  { name: "Historicist", color: "bg-green-600" },
                  { name: "Mayan", color: "bg-emerald-600" },
                  { name: "Aztec", color: "bg-orange-600" },
                  { name: "Personal", color: "bg-pink-600" }
                ].map(item => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-sm text-slate-300">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
