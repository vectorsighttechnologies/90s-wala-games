"use client";

import { useState } from "react";

interface HeroSectionProps {
    onEmailSubmit: (email: string, source: string) => Promise<void>;
}

export default function HeroSection({ onEmailSubmit }: HeroSectionProps) {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            setMessage({ type: 'error', text: 'Please enter your email' });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage({ type: 'error', text: 'Please enter a valid email address' });
            return;
        }

        setIsSubmitting(true);
        setMessage(null);

        try {
            await onEmailSubmit(email, "hero");
            setEmail("");
            setMessage({ type: 'success', text: "🎉 You're on the list! We'll notify you when we launch." });
        } catch {
            setMessage({ type: 'error', text: 'Oops! Something went wrong. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 text-6xl animate-bounce opacity-40">🕹️</div>
                <div className="absolute top-40 right-20 text-5xl animate-pulse opacity-30">👾</div>
                <div className="absolute bottom-40 left-20 text-4xl animate-bounce opacity-30" style={{ animationDelay: "0.5s" }}>🎮</div>
                <div className="absolute bottom-20 right-10 text-5xl animate-spin opacity-40" style={{ animationDuration: "3s" }}>💿</div>
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="container mx-auto px-4 py-20 text-center relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 rounded-full px-4 py-2 mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                    <span>✨</span>
                    <span className="text-sm font-medium tracking-wider">SYSTEM ONLINE // LAUNCHING SOON</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent block mb-2">
                        90s WALA
                    </span>
                    <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent text-5xl md:text-7xl lg:text-8xl">
                        GAMES!
                    </span>
                </h1>

                {/* Tagline */}
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                    Relive the glory days of{" "}
                    <span className="font-semibold text-cyan-400">Tekken 3</span>,{" "}
                    <span className="font-semibold text-pink-400">Vice City</span>,{" "}
                    <span className="font-semibold text-orange-400">Contra</span> & more — play them online now!
                </p>

                {/* Email Signup Form */}
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email to join the waitlist"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 h-12 px-4 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm transition-all"
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="h-12 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? "⏳" : "🎮"} {isSubmitting ? "Joining..." : "Join Waitlist"}
                        </button>
                    </div>

                    {message && (
                        <p className={`mt-3 text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                            {message.text}
                        </p>
                    )}

                    <p className="text-xs text-gray-500 mt-3">
                        No spam, ever. We'll only email you about the launch.
                    </p>
                </form>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-8 mt-16">
                    <div className="text-center">
                        <p className="text-4xl font-bold text-cyan-400">12+</p>
                        <p className="text-sm text-gray-400">Classic Games</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold text-pink-400">UHD</p>
                        <p className="text-sm text-gray-400">Crystal Clear</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold text-orange-400">4+</p>
                        <p className="text-sm text-gray-400">Players Online</p>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
        </section>
    );
}
