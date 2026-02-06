"use client";

import { Gamepad2 } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-16 bg-black/80 border-t border-pink-500/10 relative overflow-hidden">
            {/* Subtle glow background */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 blur-[120px] rounded-full -mb-48 -mr-24" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                    {/* Logo & Tagline */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 group">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-500/60 transition-all">
                                <Gamepad2 className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                                <p className="font-bold text-2xl text-white tracking-tight">90s WALA GAMES</p>
                                <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">Relive the 8-bit magic</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 max-w-xs mt-2 leading-relaxed">
                            Experience your favorite childhood games reimagined with modern tech and competitive leaderboards.
                        </p>
                    </div>

                    {/* Center: Launching Soon */}
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-6 py-3 rounded-full font-bold text-xl animate-pulse tracking-widest">
                            🚀 LAUNCHING SOON
                        </div>
                        <p className="text-xs text-gray-600 uppercase tracking-widest">Join the evolution</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col items-end gap-6">
                        <div className="flex items-center gap-4">
                            {[
                                { icon: "𝕏", label: "Twitter" },
                                { icon: "📸", label: "Instagram" },
                                { icon: "💬", label: "Discord" }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href="#"
                                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all group"
                                    aria-label={social.label}
                                >
                                    <span className="text-xl group-hover:scale-110 transition-transform">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-12 border-t border-white/5" />

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
                    <div className="flex gap-8 text-gray-600 uppercase tracking-widest text-[10px]">
                        <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Contact Us</a>
                    </div>
                    <p className="text-gray-600 text-[10px] uppercase tracking-widest italic">
                        © {currentYear} 90s WALA GAMES. MADE WITH ❤️ IN INDIA.
                    </p>
                </div>
            </div>
        </footer>
    );
}
