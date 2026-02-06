"use client";

import { useState } from "react";
import { Lightbulb, Send, Sparkles, Loader2 } from "lucide-react";

interface GameSuggestionFormProps {
    onSuggestionSubmit: (gameName: string, email: string) => Promise<void>;
}

const popularSuggestions = ["Prince of Persia", "NFS Most Wanted", "San Andreas", "Bomberman", "Cricket 07"];

export default function GameSuggestionForm({ onSuggestionSubmit }: GameSuggestionFormProps) {
    const [gameName, setGameName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!gameName.trim()) {
            setMessage({ type: 'error', text: 'Please enter a game name' });
            return;
        }

        if (!email.trim()) {
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
            await onSuggestionSubmit(gameName, email);
            const suggestedGame = gameName;
            setGameName("");
            setEmail("");
            setMessage({ type: 'success', text: `🎮 Thanks for suggesting "${suggestedGame}"! We'll consider it for future updates.` });
        } catch {
            setMessage({ type: 'error', text: 'Oops! Something went wrong. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="suggest" className="py-20 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden">
                        {/* Header */}
                        <div className="text-center p-8 pb-4">
                            <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-4">
                                <Lightbulb className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                What Games Do You Miss?
                            </h2>
                            <p className="text-lg text-gray-400">
                                Tell us which childhood games you want us to bring back!
                            </p>
                        </div>

                        {/* Form */}
                        <div className="p-8 pt-4">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Game Name Input */}
                                <div className="space-y-2">
                                    <label htmlFor="gameName" className="block text-sm font-medium text-white">
                                        Game Name <span className="text-cyan-400">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="gameName"
                                            type="text"
                                            placeholder="e.g., Pitthu, Stapoo, Langdi..."
                                            value={gameName}
                                            onChange={(e) => setGameName(e.target.value)}
                                            className="w-full h-12 px-4 pr-10 rounded-lg bg-slate-900/50 border-2 border-slate-600 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                                        />
                                        <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="space-y-2">
                                    <label htmlFor="suggestionEmail" className="block text-sm font-medium text-white">
                                        Your Email <span className="text-cyan-400">*</span>
                                    </label>
                                    <input
                                        id="suggestionEmail"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full h-12 px-4 rounded-lg bg-slate-900/50 border-2 border-slate-600 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                                    />
                                    <p className="text-xs text-gray-500">
                                        We'll notify you when we add your suggested game!
                                    </p>
                                </div>

                                {/* Message */}
                                {message && (
                                    <p className={`text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                        {message.text}
                                    </p>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Suggestion
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* Popular Suggestions */}
                            <div className="mt-8 pt-6 border-t border-slate-700/50">
                                <p className="text-sm text-gray-500 mb-3">Popular suggestions so far:</p>
                                <div className="flex flex-wrap gap-2">
                                    {popularSuggestions.map((game) => (
                                        <button
                                            key={game}
                                            type="button"
                                            onClick={() => setGameName(game)}
                                            className="px-3 py-1 text-sm bg-slate-700/50 text-gray-300 rounded-full hover:bg-pink-500/30 hover:text-pink-300 transition-colors"
                                        >
                                            {game}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
