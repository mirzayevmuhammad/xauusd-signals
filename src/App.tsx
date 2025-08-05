import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import {  BarChart, Users, Target, User } from "lucide-react";

export default function App() {
  return (
    <div className="relative h-[100vh] w-full flex flex-col bg-[#000000] text-white ">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6 z-20 gap-x-7">
        <div className="flex items-center space-x-2">
          <img width={250} height={250} className="" src="logo.svg" alt="" />
        </div>
        <a
          href="https://t.me/midonetrade"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button  className="bg-white hover:bg-black sm:h-10 sm:px-4 sm:py-2  h-7 text-xs  hover:text-white border-2 hover:border-2 border-white text-black  rounded-full sm:text-sm font-semibold   ">
            JOIN TO CHANNEL
          </Button>
        </a>
      </header>

      {/* Main Content Area */}
      <main className="relative z-20 flex flex-col items-center justify-center text-center flex-grow p-4 sm:p-6 lg:p-8 space-y-8">
        {/* Badge */}
        <div className="bg-black text-white border-2 border-white text-md font-bold px-7 py-2 rounded-full mb-4 ">
          #1 THE MIDONE TRADE
        </div>

        {/* Main Title */}
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white drop-shadow-lg">
        THE MIDONE
        </h1>

        {/* Subtitle */}
        <p className="text-white text-base md:text-lg">
          Join 12,000+ traders • 90% Win Rate • Real-time alerts
        </p>

        {/* Statistics */}
        <div className="flex  flex-row justify-center gap-8 md:gap-16 text-center">
          <div>
            <p className="text-3xl font-bold text-white">12K+</p>
            <p className="text-gray-400 text-sm">Members</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">90%</p>
            <p className="text-gray-400 text-sm">Win Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">24/7</p>
            <p className="text-gray-400 text-sm">Support</p>
          </div>
        </div>

        {/* Latest Signal Card */}
        <Card className="bg-transparent border-gray-900 border-2  backdrop-blur-lg text-white w-full max-w-sm mx-auto p-5">
          <CardContent className="flex flex-col gap-2 p-0">
            <div className="flex justify-center items-center text-lg font-bold">
              <span>Weekly Profit</span>
            </div>
            <div className="flex justify-between items-center text-sm text-white">
              <span>Profit:</span>
              <span className="text-white font-semibold">4.000 + pips</span>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Features */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-12 text-center text-gray-300 text-sm">
          <div className="flex items-center gap-2 border-b-2 border-r-2 border-l-2 p-2 rounded-full  box ">
            <Target className="h-5 w-5 text-white " />
            <span>High Accuracy</span>
          </div>
          <div className="flex items-center gap-2 border-b-2 border-r-2 border-l-2 p-2 rounded-full  box ">
            <BarChart className="h-5 w-5 text-white " />
            <span>Technical Analysis</span>
          </div>
          <div className="flex items-center gap-2 border-b-2 border-r-2 border-l-2 p-2 rounded-full box ">
            <Users className="h-5 w-5 text-white " />
            <span>Active Community</span>
          </div>
        </div>

        {/* Main CTA Button */}
        <a
          href="https://t.me/midonezs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className=" box text-white px-5 py-3 border-b-2 border-r-2 border-l-2   text-lg font-bold rounded-full shadow-lg transition-transform transform hover:scale-105">
            <User className="h-5 w-5 mr-2" /> ADMIN
          </Button>
        </a>
      </main>

      {/* Footer */}
      <footer className=" relative z-20 py-7  text-center text-gray-500 text-md   w-full border-t-2 border-gray-800">
        &copy; 2025 THE MIDONE • Trading involves risk.
      </footer>
    </div>
  );
}

{
  /*
git add .
git commit -m "midone"
git push  origin main
  */
}
