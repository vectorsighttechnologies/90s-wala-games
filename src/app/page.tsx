'use client';

import HeroSection from "@/components/landing/HeroSection";
import GamePreviewGallery from "@/components/landing/GamePreviewGallery";
import FeatureHighlights from "@/components/landing/FeatureHighlights";
import LeaderboardPreview from "@/components/landing/LeaderboardPreview";
import GameSuggestionForm from "@/components/landing/GameSuggestionForm";
import ValuePropositionBanner from "@/components/landing/ValuePropositionBanner";
import Footer from "@/components/landing/Footer";

export default function Home() {
  // Handler for email waitlist signup
  const handleEmailSubmit = async (email: string, source: string) => {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, source }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Failed to submit');
    }

    return response.json();
  };

  // Handler for game suggestion submission
  const handleSuggestionSubmit = async (gameName: string, email: string) => {
    const response = await fetch('/api/suggestions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ gameName, email }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Failed to submit');
    }

    return response.json();
  };

  return (
    <main className="min-h-screen bg-slate-900">
      <HeroSection onEmailSubmit={handleEmailSubmit} />
      <GamePreviewGallery />
      <FeatureHighlights />
      <LeaderboardPreview />
      <GameSuggestionForm onSuggestionSubmit={handleSuggestionSubmit} />
      <ValuePropositionBanner />
      <Footer />
    </main>
  );
}
