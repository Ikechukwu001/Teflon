import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const SolarCalculator = () => {
  const [monthlySpend, setMonthlySpend] = useState('');
  const [hoursPerDay, setHoursPerDay] = useState(6);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const monthlyKWH = (monthlySpend / 100).toFixed(1); // Estimate
    const recommendedKVA = Math.ceil((hoursPerDay * monthlyKWH) / 30);
    const estimatedSavings = (monthlySpend * 0.6).toFixed(0); // 60% saved

    setResult({
      estimatedSavings,
      recommendedKVA,
      setup: `${recommendedKVA}kVA inverter, ${recommendedKVA * 2} solar panels, ${recommendedKVA * 200}Ah battery`,
    });
  };

  return (
    <section className="relative max-w-md mx-auto mt-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl px-6 py-10 text-white border border-gray-700">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-green-400 mb-6">
        ⚡ Solar Savings Calculator
      </h2>

      <div className="space-y-6">
        {/* Monthly Spend */}
        <div>
          <label className="block mb-1 font-medium text-green-300 text-sm">
            Monthly Electricity Spend (₦)
          </label>
          <input
            type="number"
            className="w-full text-center text-xl font-mono bg-gray-800 border border-green-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            placeholder="e.g. 30000"
            value={monthlySpend}
            onChange={(e) => setMonthlySpend(e.target.value)}
          />
        </div>

        {/* Hours per day */}
        <div>
          <label className="block mb-1 font-medium text-green-300 text-sm">
            Hours of Light Needed Per Day
          </label>
          <select
            className="w-full text-center bg-gray-800 text-lg border border-green-400 rounded-lg px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            value={hoursPerDay}
            onChange={(e) => setHoursPerDay(Number(e.target.value))}
          >
            {[4, 6, 8, 10, 12, 24].map((h) => (
              <option key={h} value={h}>
                {h} hours
              </option>
            ))}
          </select>
        </div>

        {/* Button */}
        <button
          onClick={handleCalculate}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold text-lg tracking-wide shadow-md transition-all"
        >
          🔍 Calculate
        </button>
      </div>

      {/* Result Box */}
      {result && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10 bg-gray-950 bg-opacity-80 border border-green-400 rounded-xl p-5 space-y-3 text-left shadow-inner"
          >
            <p className="text-green-300 font-mono">
              💰 <strong className="text-white">Monthly Savings:</strong> ₦{result.estimatedSavings}
            </p>
            <p className="text-green-300 font-mono">
              ⚡ <strong className="text-white">Recommended System:</strong> {result.recommendedKVA} kVA
            </p>
            <p className="text-green-300 font-mono">
              🔋 <strong className="text-white">Setup:</strong> {result.setup}
            </p>
          </motion.div>

          {/* Floating WhatsApp CTA Button */}
          <a
            href={`https://wa.me/2347065418938?text=Hi, I'm interested in the ${result.recommendedKVA}kVA solar setup with ${result.setup}. Please give me more info.`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-2xl transition-all backdrop-blur-md"
          >
            <MessageCircle size={20} />
            <span className="font-semibold">Get Setup on WhatsApp</span>
          </a>
        </>
      )}
    </section>
  );
};

export default SolarCalculator;
