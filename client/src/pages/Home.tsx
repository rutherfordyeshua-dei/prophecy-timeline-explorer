import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { BarChart3, Clock, Map, BookOpen, Zap } from "lucide-react";
import { APP_TITLE } from "@/const";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-amber-500" />
            <h1 className="text-xl font-bold text-white">{APP_TITLE}</h1>
          </div>
          <div className="flex gap-2">
            <Link href="/timeline">
              <Button variant="ghost" className="text-slate-200 hover:text-white">Timeline</Button>
            </Link>
            <Link href="/traditions">
              <Button variant="ghost" className="text-slate-200 hover:text-white">Traditions</Button>
            </Link>
            <Link href="/comparison">
              <Button variant="ghost" className="text-slate-200 hover:text-white">Comparison</Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" className="text-slate-200 hover:text-white">About</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 container py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Prophecy Timeline Explorer</h2>
          <p className="text-xl text-slate-300 mb-8">
            Explore and compare prophecy cycles across seven ancient traditions. Visualize the convergence of cycles and understand the significance of 2025.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/timeline">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">Explore Timeline</Button>
            </Link>
            <Link href="/comparison">
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">Compare Cycles</Button>
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition">
            <CardHeader>
              <Clock className="w-8 h-8 text-amber-500 mb-2" />
              <CardTitle className="text-white">Interactive Timeline</CardTitle>
              <CardDescription>Visualize prophecy cycles across 4,000+ years</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-300">Explore the 1,260-year prophecy, Mayan cycles, and personal timelines in an interactive visualization.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition">
            <CardHeader>
              <BarChart3 className="w-8 h-8 text-amber-500 mb-2" />
              <CardTitle className="text-white">Cycle Comparison</CardTitle>
              <CardDescription>Compare all seven prophetic traditions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-300">View side-by-side comparisons of Ethiopian, Qumran, Mayan, Aztec, and other traditions.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition">
            <CardHeader>
              <BookOpen className="w-8 h-8 text-amber-500 mb-2" />
              <CardTitle className="text-white">Detailed Traditions</CardTitle>
              <CardDescription>Explore each prophetic tradition in depth</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-300">Learn about the sources, key texts, and significance of each tradition.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition">
            <CardHeader>
              <Zap className="w-8 h-8 text-amber-500 mb-2" />
              <CardTitle className="text-white">2025 Convergence</CardTitle>
              <CardDescription>Understand the significance of 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-300">Discover how seven distinct cycles converge on the year 2025.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition">
            <CardHeader>
              <Map className="w-8 h-8 text-amber-500 mb-2" />
              <CardTitle className="text-white">Personal Timeline</CardTitle>
              <CardDescription>The Rey Capitan cycle (1991-2025)</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-300">Explore the 34-year personal cycle and its role in the universal convergence.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition">
            <CardHeader>
              <BookOpen className="w-8 h-8 text-amber-500 mb-2" />
              <CardTitle className="text-white">Research Sources</CardTitle>
              <CardDescription>Comprehensive citations and references</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-300">Access original sources from the Dead Sea Scrolls, Popol Vuh, and more.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-8">
        <div className="container text-center text-slate-400 text-sm">
          <p>Prophecy Timeline Explorer - Research and Visualization Tool</p>
          <p className="mt-2">Exploring cycles from Ethiopian, Qumran, Mayan, Aztec, and other prophetic traditions</p>
        </div>
      </footer>
    </div>
  );
}
