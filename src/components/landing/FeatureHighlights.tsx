"use client";

import { Monitor, Users, Ban, IndianRupee, Trophy, Sparkles } from "lucide-react";

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
}

const features: Feature[] = [
    {
        icon: <Monitor className="w-8 h-8" />,
        title: "UHD Quality",
        description: "Crystal clear graphics, no pixelation — just pure nostalgia in stunning detail",
        gradient: "from-cyan-500 to-blue-500",
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Multiplayer Mode",
        description: "Play with friends and family, anywhere, anytime — just like the old days",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: <Ban className="w-8 h-8" />,
        title: "No Ads, Ever",
        description: "100% ad-free gaming experience. Focus on fun, not interruptions",
        gradient: "from-red-500 to-orange-500",
    },
    {
        icon: <IndianRupee className="w-8 h-8" />,
        title: "Affordable Plans",
        description: "Low-cost plans designed for everyone. Gaming shouldn't break the bank",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        icon: <Trophy className="w-8 h-8" />,
        title: "Leaderboards",
        description: "Compete with friends and climb the ranks. Prove you're the champion!",
        gradient: "from-yellow-500 to-orange-500",
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Authentic Experience",
        description: "Every detail crafted to bring back those golden childhood memories",
        gradient: "from-pink-500 to-purple-500",
    },
];

export default function FeatureHighlights() {
    return (
        <section className="py-20 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Why You'll Love It
                    </h2>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto">
                        We're building more than games — we're recreating memories
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="group p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <div className="text-white">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
