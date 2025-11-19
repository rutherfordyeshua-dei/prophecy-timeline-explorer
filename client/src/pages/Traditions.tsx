import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, BookOpen } from "lucide-react";
import { traditions, prophecyCycles } from "@/lib/prophecyData";

export default function Traditions() {
  const [selectedTradition, setSelectedTradition] = useState(traditions[0]);

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
            <BookOpen className="w-6 h-6 text-amber-500" />
            <h1 className="text-xl font-bold text-white">Prophetic Traditions</h1>
          </div>
          <div className="w-32"></div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="flex-1 container py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Explore Prophetic Traditions</h2>
          <p className="text-slate-300">Learn about the sources, texts, and significance of each tradition</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Tradition List */}
          <div className="lg:col-span-1 space-y-2">
            {traditions.map(tradition => (
              <button
                key={tradition.id}
                onClick={() => setSelectedTradition(tradition)}
                className={`w-full text-left p-4 rounded-lg border transition ${
                  selectedTradition.id === tradition.id
                    ? "bg-amber-600/20 border-amber-600 text-white"
                    : "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-amber-600/50"
                }`}
              >
                <div className="font-semibold">{tradition.name}</div>
                <div className="text-xs text-slate-400 mt-1">{tradition.cycles.length} cycles</div>
              </button>
            ))}
          </div>

          {/* Tradition Details */}
          <div className="lg:col-span-3 space-y-6">
            {/* Header */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-3xl text-white">{selectedTradition.name}</CardTitle>
                <CardDescription className="text-base">{selectedTradition.origin}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6">{selectedTradition.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-amber-400 mb-3">Key Texts</h4>
                    <ul className="space-y-2">
                      {selectedTradition.keyTexts.map((text, idx) => (
                        <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                          <span className="text-amber-500 mt-1">•</span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-400 mb-3">Significance</h4>
                    <p className="text-sm text-slate-300">{selectedTradition.significance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prophecy Cycles */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Associated Prophecy Cycles</h3>
              <div className="space-y-4">
                {selectedTradition.cycles.map(cycle => (
                  <Card key={cycle.id} className="bg-slate-800/50 border-slate-700 hover:border-amber-600/50 transition">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <CardTitle className="text-white">{cycle.name}</CardTitle>
                          <CardDescription>
                            {cycle.startYear} - {cycle.endYear} ({cycle.duration} years)
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-amber-400">{cycle.duration}</div>
                          <div className="text-xs text-slate-400">years</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 mb-4">{cycle.description}</p>

                      <div className="bg-slate-900/50 p-4 rounded border border-slate-700 mb-4">
                        <p className="text-sm text-slate-400 mb-2">Key Prophecy:</p>
                        <p className="text-slate-300 italic">"{cycle.keyProphecy}"</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-slate-400 mb-1">Expected Leader</p>
                          <p className="text-sm text-amber-400 font-semibold">{cycle.leader}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 mb-1">Source</p>
                          <p className="text-sm text-slate-300">{cycle.source}</p>
                        </div>
                      </div>

                      {cycle.references.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-slate-700">
                          <p className="text-xs text-slate-400 mb-2">References</p>
                          <div className="flex flex-wrap gap-2">
                            {cycle.references.map((ref, idx) => (
                              <span key={idx} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                                {ref}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
