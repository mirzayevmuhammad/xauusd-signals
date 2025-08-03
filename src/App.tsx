import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import {
  Zap,
  CheckCircle,
  BarChart,
  Users,
  Target,
  MessageSquare,
} from "lucide-react";

export default function App() {
  return (
    <div className="relative h-screen w-full flex flex-col bg-[#1A2B4D] text-white overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6 z-20">
        <div className="flex items-center space-x-2">
          <Zap className="h-8 w-8 text-yellow-400" />
          <span className="text-2xl font-bold">XAUUSD Signals</span>
        </div>
        <a
          href="https://t.me/mrzyvl7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
            <CheckCircle className="h-4 w-4" />
            FREE TO JOIN
          </Button>
        </a>
      </header>

      {/* Main Content Area */}
      <main className="relative z-20 flex flex-col items-center justify-center text-center flex-grow p-4 sm:p-6 lg:p-8 space-y-8">
        {/* Badge */}
        <div className="bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
          #1 XAUUSD Signals
        </div>

        {/* Main Title */}
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white drop-shadow-lg">
          Premium <span className="text-yellow-400">XAUUSD</span> Trading
          Signals
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-base md:text-lg">
          Join 15,000+ traders • 85% Win Rate • Real-time alerts
        </p>

        {/* Statistics */}
        <div className="flex  flex-row justify-center gap-8 md:gap-16 text-center">
          <div>
            <p className="text-3xl font-bold text-yellow-400">15K+</p>
            <p className="text-gray-400 text-sm">Members</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-emerald-400">85%</p>
            <p className="text-gray-400 text-sm">Win Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-400">24/7</p>
            <p className="text-gray-400 text-sm">Support</p>
          </div>
        </div>

        {/* Latest Signal Card */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm text-white w-full max-w-sm mx-auto p-4">
          <CardContent className="flex flex-col gap-2 p-0">
            <div className="flex justify-between items-center text-sm font-semibold text-gray-300">
              <span>Latest Signal</span>
              <span className="bg-emerald-500 text-white px-2 py-0.5 rounded-full flex items-center gap-1">
                PROFIT <CheckCircle className="h-3 w-3" />
              </span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold">
              <span>XAUUSD SELL</span>
              <span>2,045.50</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>Profit:</span>
              <span className="text-emerald-400 font-semibold">+730 pips</span>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Features */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-12 text-center text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-yellow-400" />
            <span>High Accuracy</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart className="h-5 w-5 text-blue-400" />
            <span>Technical Analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-400" />
            <span>Active Community</span>
          </div>
        </div>

        {/* Main CTA Button */}
        <a
          href="https://t.me/mrzyvl7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <CheckCircle className="h-5 w-5 mr-2" /> Join Telegram Channel FREE
          </Button>
        </a>

        {/* Additional Info */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-1">
            <CheckCircle className="h-4 w-4 text-emerald-400" />
            <span>Free to Join</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="h-4 w-4 text-emerald-400" />
            <span>No Hidden Fees</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="top-[-3%] relative z-20 py-4 text-center text-gray-500 text-xs bg-[#1A2B4D] w-full border-t border-gray-800">
        &copy; 2025 XAUUSD Signals • Trading involves risk.
      </footer>

      {/* Admin Account Button (New) */}
      <a href="https://t.me/mrzyvl7" target="_blank" rel="noopener noreferrer">
        <Button className="fixed bottom-4 right-4 z-30 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110">
          <MessageSquare className="h-6 w-6" />
        </Button>
      </a>

      {/* Background Image (standard img tag) */}

    </div>
  );
}

{
  /*
  git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mirzayevmuhammad/xauusd-signals.git
git push -u origin main
  */
}
