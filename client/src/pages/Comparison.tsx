import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, BarChart3 } from "lucide-react";
import { prophecyCycles } from "@/lib/prophecyData";

export default function Comparison() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedTraditions, setSelectedTraditions] = useState<string[]>([
    "Ethiopian",
    "Qumran",
    "Christian",
    "Mayan",
    "Aztec",
    "Personal"
  ]);

  const traditions = Array.from(new Set(prophecyCycles.map(c => c.tradition)));

  const toggleTradition = (tradition: string) => {
    setSelectedTraditions(prev =>
      prev.includes(tradition)
        ? prev.filter(t => t !== tradition)
        : [...prev, tradition]
    );
  };

  // Filter cycles based on selected traditions
  const filteredCycles = prophecyCycles.filter(c => selectedTraditions.includes(c.tradition));

  // Prepare data for chart
  const chartData = filteredCycles.map(cycle => ({
    name: cycle.name,
    tradition: cycle.tradition,
    duration: cycle.duration,
    startYear: cycle.startYear,
    endYear: cycle.endYear
  }));

  const getTraditionColor = (tradition: string) => {
    const colors: { [key: string]: string } = {
      "Ethiopian": "rgba(217, 119, 6, 0.8)",
      "Qumran": "rgba(147, 51, 234, 0.8)",
      "Christian": "rgba(220, 38, 38, 0.8)",
      "Jewish": "rgba(37, 99, 235, 0.8)",
      "Historicist": "rgba(34, 197, 94, 0.8)",
      "Mayan": "rgba(5, 150, 105, 0.8)",
      "Aztec": "rgba(234, 88, 12, 0.8)",
      "Personal": "rgba(236, 72, 153, 0.8)",
      "Futurist": "rgba(79, 70, 229, 0.8)",
      "Proposed": "rgba(6, 182, 212, 0.8)"
    };
    return colors[tradition] || "rgba(100, 116, 139, 0.8)";
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
            <BarChart3 className="w-6 h-6 text-amber-500" />
            <h1 className="text-xl font-bold text-white">Cycle Comparison</h1>
          </div>
          <div className="w-32"></div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="flex-1 container py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Prophecy Cycle Comparison</h2>
          <p className="text-slate-300">Compare the duration and characteristics of cycles across different traditions</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters */}
          <Card className="bg-slate-800/50 border-slate-700 h-fit lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-white text-lg">Filter Traditions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {traditions.map(tradition => (
                  <label key={tradition} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedTraditions.includes(tradition)}
                      onChange={() => toggleTradition(tradition)}
                      className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-amber-600 cursor-pointer"
                    />
                    <span className="text-sm text-slate-300">{tradition}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Charts */}
          <div className="lg:col-span-3 space-y-6">
            {/* Duration Chart */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Cycle Duration Comparison</CardTitle>
                <CardDescription>Duration in years for each prophecy cycle</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <div className="space-y-4">
                    {chartData.map((cycle, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-32 text-sm text-slate-300 truncate">{cycle.name}</div>
                        <div className="flex-1 bg-slate-700 rounded-full h-8 overflow-hidden relative">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${Math.min((cycle.duration / 5000) * 100, 100)}%`,
                              backgroundColor: getTraditionColor(cycle.tradition)
                            }}
                          />
                        </div>
                        <div className="w-20 text-right text-sm font-semibold text-amber-400">
                          {cycle.duration} yrs
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline Range Chart */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Timeline Range</CardTitle>
                <CardDescription>When each cycle occurred or will occur</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {chartData.map((cycle, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-32 text-sm text-slate-300 truncate">{cycle.name}</div>
                      <div className="flex-1 relative h-8 bg-slate-700 rounded">
                        <div className="absolute inset-0 flex items-center px-2 text-xs text-slate-400">
                          <span>{cycle.startYear}</span>
                          <span className="ml-auto">{cycle.endYear}</span>
                        </div>
                        <div
                          className="absolute top-1/2 -translate-y-1/2 h-6 rounded transition-all"
                          style={{
                            left: `${Math.max(0, ((cycle.startYear + 2100) / 5400) * 100)}%`,
                            right: `${Math.max(0, ((5310 - cycle.endYear) / 5400) * 100)}%`,
                            backgroundColor: getTraditionColor(cycle.tradition)
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Detailed Table */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Detailed Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-3 px-4 text-slate-300 font-semibold">Cycle Name</th>
                        <th className="text-left py-3 px-4 text-slate-300 font-semibold">Tradition</th>
                        <th className="text-right py-3 px-4 text-slate-300 font-semibold">Start Year</th>
                        <th className="text-right py-3 px-4 text-slate-300 font-semibold">End Year</th>
                        <th className="text-right py-3 px-4 text-slate-300 font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {chartData.map((cycle, idx) => (
                        <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition">
                          <td className="py-3 px-4 text-slate-300">{cycle.name}</td>
                          <td className="py-3 px-4">
                            <span className="inline-block px-2 py-1 rounded text-xs font-semibold text-white" style={{
                              backgroundColor: getTraditionColor(cycle.tradition)
                            }}>
                              {cycle.tradition}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right text-slate-300">{cycle.startYear}</td>
                          <td className="py-3 px-4 text-right text-slate-300">{cycle.endYear}</td>
                          <td className="py-3 px-4 text-right font-semibold text-amber-400">{cycle.duration} years</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400 mb-2">
                      {chartData.length}
                    </div>
                    <div className="text-sm text-slate-400">Cycles Selected</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400 mb-2">
                      {Math.max(...chartData.map(c => c.duration)).toLocaleString()}
                    </div>
                    <div className="text-sm text-slate-400">Longest Duration</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400 mb-2">
                      {Math.round(chartData.reduce((sum, c) => sum + c.duration, 0) / chartData.length)}
                    </div>
                    <div className="text-sm text-slate-400">Average Duration</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
