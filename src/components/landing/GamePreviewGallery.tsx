"use client";

import { Users, User, Gamepad2 } from "lucide-react";

interface Game {
    name: string;
    emoji: string;
    category: "Console" | "Arcade" | "PC" | "Handheld";
    multiplayer: boolean;
    comingSoon: boolean;
}

const games: Game[] = [
    { name: "Tekken 3", emoji: "🥋", category: "Console", multiplayer: true, comingSoon: false },
    { name: "God of War", emoji: "⚔️", category: "Console", multiplayer: false, comingSoon: true },
    { name: "SmackDown! Pain", emoji: "🤼", category: "Console", multiplayer: true, comingSoon: false },
    { name: "Dragon Ball Z", emoji: "🐉", category: "Handheld", multiplayer: true, comingSoon: true },
    { name: "GTA: Vice City", emoji: "🌴", category: "PC", multiplayer: false, comingSoon: false },
    { name: "Road Rash", emoji: "🏍️", category: "PC", multiplayer: true, comingSoon: false },
    { name: "Need for Speed: MW", emoji: "🚔", category: "PC", multiplayer: true, comingSoon: true },
    { name: "Counter Strike 1.6", emoji: "🔫", category: "PC", multiplayer: true, comingSoon: true },
    { name: "Contra", emoji: "💂", category: "Arcade", multiplayer: true, comingSoon: false },
    { name: "Metal Slug", emoji: "🦑", category: "Arcade", multiplayer: true, comingSoon: true },
    { name: "Snow Bros", emoji: "⛄", category: "Arcade", multiplayer: true, comingSoon: true },
    { name: "Super Mario", emoji: "🍄", category: "Arcade", multiplayer: false, comingSoon: false },
];

const categoryColors = {
    Console: "bg-blue-500/20 text-blue-400 border-blue-500/50",
    Arcade: "bg-red-500/20 text-red-400 border-red-500/50",
    PC: "bg-emerald-500/20 text-emerald-400 border-emerald-500/50",
    Handheld: "bg-purple-500/20 text-purple-400 border-purple-500/50",
};

const categoryDots = {
    Console: "bg-blue-500",
    Arcade: "bg-red-500",
    PC: "bg-emerald-500",
    Handheld: "bg-purple-500",
};

export default function GamePreviewGallery() {
    return (
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-500/50 text-pink-300 rounded-full px-4 py-2 mb-4">
                        <Gamepad2 className="w-4 h-4" />
                        <span className="text-sm font-medium">Game Collection</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Games You Grew Up Playing
                    </h2>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto">
                        From dusty cyber cafes to living room floors — all your favorites, reimagined in stunning UHD
                    </p>
                </div>

                {/* Category Labels */}
                <div className="flex flex-wrap justify-center gap-6 mb-10">
                    {Object.entries(categoryDots).map(([category, color]) => (
                        <span key={category} className="inline-flex items-center gap-2 text-sm font-medium text-gray-300">
                            <span className={`w-3 h-3 rounded-full ${color}`} />
                            {category}
                        </span>
                    ))}
                </div>

                {/* Games Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {games.map((game) => (
                        <div
                            key={game.name}
                            className="group relative bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:bg-slate-800 hover:border-slate-600 hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            {/* Coming Soon Badge */}
                            {game.comingSoon && (
                                <span className="absolute top-2 right-2 px-2 py-1 text-xs font-medium bg-slate-700 text-gray-400 rounded-full">
                                    Coming Soon
                                </span>
                            )}

                            {/* Game Emoji */}
                            <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {game.emoji}
                            </div>

                            {/* Game Name */}
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                {game.name}
                            </h3>

                            {/* Category & Mode */}
                            <div className="flex flex-wrap justify-center gap-2">
                                <span className={`px-2 py-1 text-xs font-medium border rounded-full ${categoryColors[game.category]}`}>
                                    {game.category}
                                </span>
                                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium border border-slate-600 text-gray-400 rounded-full">
                                    {game.multiplayer ? (
                                        <>
                                            <Users className="w-3 h-3" /> Multi
                                        </>
                                    ) : (
                                        <>
                                            <User className="w-3 h-3" /> Solo
                                        </>
                                    )}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <p className="text-center text-gray-500 mt-12">
                    And many more coming soon! Have a game in mind?{" "}
                    <a href="#suggest" className="text-cyan-400 hover:underline font-medium">
                        Suggest it below →
                    </a>
                </p>
            </div>
        </section>
    );
}
