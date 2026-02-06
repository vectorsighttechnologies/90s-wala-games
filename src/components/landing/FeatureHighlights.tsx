"use client";

interface Feature {
    icon: string;
    title: string;
    description: string;
    gradient: string;
}

const features: Feature[] = [
    {
        icon: "🖥️",
        title: "UHD Quality",
        description: "Crystal clear graphics, no pixelation — just pure nostalgia in stunning detail",
        gradient: "from-cyan-500 to-blue-500",
    },
    {
        icon: "👥",
        title: "Multiplayer Mode",
        description: "Play with friends and family, anywhere, anytime — just like the old days",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: "🚫",
        title: "No Ads, Ever",
        description: "100% ad-free gaming experience. Focus on fun, not interruptions",
        gradient: "from-red-500 to-orange-500",
    },
    {
        icon: "💰",
        title: "Affordable Plans",
        description: "Low-cost plans designed for everyone. Gaming shouldn't break the bank",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        icon: "🏆",
        title: "Leaderboards",
        description: "Compete with friends and climb the ranks. Prove you're the champion!",
        gradient: "from-yellow-500 to-orange-500",
    },
    {
        icon: "✨",
        title: "Authentic Experience",
        description: "Every detail crafted to bring back those golden childhood memories",
        gradient: "from-pink-500 to-purple-500",
    },
];

export default function FeatureHighlights() {
    return (
        <section className="py-20 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Why You'll Love It
                    </h2>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto">
                        We're building more than games — we're recreating memories
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <span className="text-2xl">{feature.icon}</span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">
                                {feature.title}
                            </h3>

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
