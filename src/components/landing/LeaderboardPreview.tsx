"use client";

interface LeaderboardEntry {
    rank: number;
    name: string;
    avatar: string;
    score: number;
    streak: number;
}

const mockLeaderboard: LeaderboardEntry[] = [
    { rank: 1, name: "Raj Sharma", avatar: "👨", score: 15420, streak: 12 },
    { rank: 2, name: "Priya Patel", avatar: "👩", score: 14850, streak: 8 },
    { rank: 3, name: "Amit Kumar", avatar: "👦", score: 13200, streak: 15 },
    { rank: 4, name: "Sneha Gupta", avatar: "👧", score: 12100, streak: 5 },
    { rank: 5, name: "Vikram Singh", avatar: "🧔", score: 11500, streak: 7 },
];

const getRankIcon = (rank: number) => {
    switch (rank) {
        case 1: return "👑";
        case 2: return "🥈";
        case 3: return "🥉";
        default: return `#${rank}`;
    }
};

const getRankStyle = (rank: number) => {
    switch (rank) {
        case 1: return "bg-yellow-500/10 border-l-yellow-500";
        case 2: return "bg-gray-500/10 border-l-gray-400";
        case 3: return "bg-orange-500/10 border-l-orange-500";
        default: return "bg-slate-800/50 border-l-slate-600";
    }
};

export default function LeaderboardPreview() {
    return (
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/50 text-yellow-300 rounded-full px-4 py-2 mb-4">
                            <span>🏆</span>
                            <span className="text-sm font-medium">Competitive Gaming</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Challenge Your Friends
                            <br />
                            <span className="text-cyan-400">Climb the Ranks</span>
                        </h2>

                        <p className="text-lg text-gray-400 mb-8">
                            Remember arguing about who was the best at Carrom? Now you can prove it!
                            Our leaderboards track your victories, streaks, and achievements across all games.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-2xl">
                                    👥
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Friend Groups</p>
                                    <p className="text-sm text-gray-500">Create private leaderboards with your squad</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-2xl">
                                    🔥
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Win Streaks</p>
                                    <p className="text-sm text-gray-500">Keep your momentum going for bonus rewards</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-2xl">
                                    🏆
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Seasonal Tournaments</p>
                                    <p className="text-sm text-gray-500">Compete in special events for exclusive prizes</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
                            <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border-b border-slate-700/50 p-4">
                                <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                                    🏆 Weekly Ludo Champions
                                </h3>
                            </div>

                            <div className="divide-y divide-slate-700/50">
                                {mockLeaderboard.map((entry) => (
                                    <div
                                        key={entry.rank}
                                        className={`flex items-center gap-4 p-4 border-l-4 transition-all hover:bg-slate-700/30 ${getRankStyle(entry.rank)}`}
                                    >
                                        <div className="w-8 flex justify-center text-lg">
                                            {getRankIcon(entry.rank)}
                                        </div>

                                        <div className="flex items-center gap-3 flex-1">
                                            <span className="text-2xl">{entry.avatar}</span>
                                            <div>
                                                <p className="font-medium text-white">{entry.name}</p>
                                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                                    🔥 {entry.streak} day streak
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <p className="text-xl font-bold text-white">{entry.score.toLocaleString()}</p>
                                            <p className="text-xs text-gray-500">points</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-center text-sm text-gray-600 mt-4">
                            * Preview of actual leaderboard UI
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
