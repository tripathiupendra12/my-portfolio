import React from "react";

export const ProblemSolving = () => {
  const stats = {
    totalSolved: 200,
    easySolved: 90,
    mediumSolved: 94,
    hardSolved: 16,
  };

  const total = stats.totalSolved;
  const easy = stats.easySolved;
  const medium = stats.mediumSolved;
  const hard = stats.hardSolved;

  return (
    <div
      id="Problem Solving"
      className="flex flex-col items-center justify-center mt-16 px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Problem <span className="text-primary">Solver</span>
      </h2>

      <div className="w-full max-w-4xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-semibold text-white">
            🚀 LeetCode Journey
          </h3>

          <span className="text-green-400 text-sm font-medium">
            ● Active Coder
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard title="Total" value={total} />
          <StatCard title="Easy" value={easy} color="text-green-400" />
          <StatCard title="Medium" value={medium} color="text-yellow-400" />
          <StatCard title="Hard" value={hard} color="text-red-400" />
        </div>

        {/* Progress */}
        <div className="space-y-5">
          <Progress
            label="Easy"
            value={easy}
            total={total}
            color="bg-green-400"
          />

          <Progress
            label="Medium"
            value={medium}
            total={total}
            color="bg-yellow-400"
          />

          <Progress
            label="Hard"
            value={hard}
            total={total}
            color="bg-red-400"
          />
        </div>

        {/* Badges */}
        <div className="mt-8">
          <h3 className="text-white font-semibold mb-4 text-lg">
            🏆 Achievements
          </h3>

          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-3 rounded-xl bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 font-medium">
              🔥 100 Days Consistency Badge
            </div>

            <div className="px-4 py-3 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-300 font-medium">
              ⚡ 50 Days Badge
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <a
            href="https://leetcode.com/u/Upendra_Tripathi12/"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 rounded-xl bg-orange-400 text-black font-semibold hover:bg-orange-300 transition duration-300"
          >
            View Full LeetCode Profile →
          </a>
        </div>
      </div>
    </div>
  );
};

function StatCard({ title, value, color = "text-white" }) {
  return (
    <div className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center hover:scale-105 transition">
      <p className="text-sm text-gray-300 mb-2">{title}</p>
      <h3 className={`text-2xl font-bold ${color}`}>
        {value}
      </h3>
    </div>
  );
}

function Progress({ label, value, total, color }) {
  const percent =
    total > 0 ? ((value / total) * 100).toFixed(1) : 0;

  return (
    <div>
      <div className="flex justify-between text-sm text-gray-300 mb-2">
        <span>{label}</span>
        <span>
          {value} ({percent}%)
        </span>
      </div>

      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className={`${color} h-3 rounded-full transition-all duration-1000`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}