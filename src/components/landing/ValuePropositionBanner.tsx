"use client";

import { Ban, IndianRupee, Monitor, Users } from "lucide-react";

const propositions = [
    { icon: <Ban className="w-5 h-5" />, text: "No Ads, Ever" },
    { icon: <IndianRupee className="w-5 h-5" />, text: "Affordable Plans" },
    { icon: <Monitor className="w-5 h-5" />, text: "Childhood in UHD" },
    { icon: <Users className="w-5 h-5" />, text: "Play with Friends" },
];

export default function ValuePropositionBanner() {
    return (
        <section className="py-12 bg-black/60 border-t border-b border-cyan-500/20 relative overflow-hidden">
            {/* Decorative glows */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {propositions.map((prop, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/20 transition-all">
                                <div className="text-pink-400 group-hover:text-cyan-400 transition-colors">
                                    {prop.icon}
                                </div>
                            </div>
                            <span className="font-semibold text-lg md:text-xl tracking-wider uppercase">
                                {prop.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
