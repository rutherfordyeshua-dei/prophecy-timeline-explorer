import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, Info } from "lucide-react";
import { convergenceData } from "@/lib/prophecyData";

export default function About() {
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
            <Info className="w-6 h-6 text-amber-500" />
            <h1 className="text-xl font-bold text-white">About This Research</h1>
          </div>
          <div className="w-32"></div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-3xl text-white">Prophecy Timeline Explorer</CardTitle>
              <CardDescription>A comprehensive research tool for exploring prophetic cycles</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4">
                This application is designed to help researchers, scholars, and enthusiasts explore and understand the complex relationships between different prophetic traditions and their cycles. It integrates data from seven distinct ancient traditions, spanning over 4,000 years of history.
              </p>
              <p className="text-slate-300">
                The tool provides interactive visualizations, detailed comparisons, and comprehensive research materials to support the study of prophecy cycles and their convergence.
              </p>
            </CardContent>
          </Card>

          {/* 2025 Convergence */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">The 2025 Convergence</CardTitle>
              <CardDescription>Seven cycles converging on a single year</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-6">
                The year {convergenceData.year} is unique in human history because it marks the simultaneous culmination of {convergenceData.cycles.length} distinct prophetic cycles from {convergenceData.cycles.length} different traditions.
              </p>

              <div className="space-y-4">
                {convergenceData.cycles.map((cycle, idx) => (
                  <div key={idx} className="bg-slate-900/50 p-4 rounded border border-slate-700">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h4 className="font-semibold text-amber-400">{cycle.tradition}</h4>
                        <p className="text-sm text-slate-400">{cycle.start} - {cycle.end}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-amber-400">{cycle.duration}</div>
                        <div className="text-xs text-slate-400">years</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300">{cycle.convergence}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Traditions Overview */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Prophetic Traditions Included</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-amber-400 mb-2">Ethiopian Tradition</h4>
                  <p className="text-sm text-slate-300">The Ethiopian Bible (Ge'ez) contains 46 books and preserves the complete Book of Enoch, emphasizing cycles of renewal and the Divine Feminine.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-400 mb-2">Qumran Tradition</h4>
                  <p className="text-sm text-slate-300">The Dead Sea Scrolls describe multiple manifestations of Messianic leadership: Priest, King, and Prophet, anticipating integrated spiritual authority.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-400 mb-2">Christian Primitive Tradition</h4>
                  <p className="text-sm text-slate-300">Emphasizes Mary Magdalene as the 'Apostle of Apostles' and the first witness to the Resurrection, representing the Divine Feminine Wisdom.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-400 mb-2">Gnostic Tradition</h4>
                  <p className="text-sm text-slate-300">The Nag Hammadi texts describe Sophia (Divine Feminine Wisdom) as the co-creator of the universe and the path to restoration.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-400 mb-2">Mayan Tradition</h4>
                  <p className="text-sm text-slate-300">The Mayan calendar describes cycles of creation and destruction spanning 5,125 years (a Baktun), with 2012 marking the beginning of a new era.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-400 mb-2">Aztec Tradition</h4>
                  <p className="text-sm text-slate-300">The Aztec calendar describes 52-year cycles of 'New Fire' renewal, emphasizing the integration of masculine and feminine divine principles.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-400 mb-2">Personal Timeline (Rey Capitan)</h4>
                  <p className="text-sm text-slate-300">A 34-year cycle (1991-2025) representing the incubation period for the emergence of integrative spiritual leadership.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Methodology */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Research Methodology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4">
                This research integrates multiple prophetic traditions and applies comparative analysis to identify patterns, cycles, and convergence points. The methodology includes:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-amber-500 flex-shrink-0">•</span>
                  <span>Analysis of original source texts from Ethiopian, Qumran, Mayan, Aztec, and Gnostic traditions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-500 flex-shrink-0">•</span>
                  <span>Application of the day-for-a-year principle to interpret prophetic time periods</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-500 flex-shrink-0">•</span>
                  <span>Correlation of cycles across different traditions to identify convergence points</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-500 flex-shrink-0">•</span>
                  <span>Historical verification of prophetic events and their alignment with recorded history</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-500 flex-shrink-0">•</span>
                  <span>Synthesis of personal timelines with broader prophetic cycles</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Sources */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Primary Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-amber-400">Biblical & Religious Texts</p>
                  <p className="text-sm text-slate-300">Book of Enoch, Dead Sea Scrolls, Nag Hammadi Library, Gospel of Mary Magdalene, Popol Vuh, Codex Borbónico</p>
                </div>

                <div>
                  <p className="font-semibold text-amber-400">Academic Sources</p>
                  <p className="text-sm text-slate-300">Adventist Biblical Research, scholarly interpretations of prophetic texts, historical records of major events</p>
                </div>

                <div>
                  <p className="font-semibold text-amber-400">Prophetic Traditions</p>
                  <p className="text-sm text-slate-300">Historicist, Futurist, Preterist, and Idealist interpretations of biblical prophecy</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="bg-slate-800/50 border-slate-700 border-amber-600/30">
            <CardHeader>
              <CardTitle className="text-white">Important Note</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-300">
                This research tool is designed for educational and exploratory purposes. The interpretations and correlations presented represent one perspective on prophetic cycles and should be considered alongside other scholarly and theological viewpoints. Users are encouraged to conduct their own research and form their own conclusions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-8 mt-12">
        <div className="container text-center text-slate-400 text-sm">
          <p>Prophecy Timeline Explorer - Research and Visualization Tool</p>
          <p className="mt-2">Exploring cycles from Ethiopian, Qumran, Mayan, Aztec, and other prophetic traditions</p>
        </div>
      </footer>
    </div>
  );
}
