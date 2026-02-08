import React, { useState } from 'react';
import { Bot, Zap, LayoutDashboard, Terminal } from 'lucide-react';
import Button from './components/Button';
import TextArea from './components/TextArea';
import ResponseCard from './components/ResponseCard';
import SentimentBadge from './components/SentimentBadge';


const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [review, setReview] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!review.trim()) return;
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review_text: review }),
      });

      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setResult(data);
    } catch (error) {
      alert("Error: Backend is offline or API key is missing.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 overflow-hidden">

      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>

      <header className="relative z-10 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary-400 mb-6 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
          System Online v1.0
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-4 tracking-tight">
          Review<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Master</span> AI
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
          Transform raw feedback into strategic responses using enterprise-grade artificial intelligence.
        </p>
      </header>


      <main className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-dark-900/50 backdrop-blur-2xl border border-white/10 p-1 rounded-3xl shadow-2xl">
            <div className="bg-dark-950/80 rounded-[20px] p-6 border border-white/5">
              <div className="flex items-center gap-3 mb-6 text-slate-300">
                <Terminal size={20} className="text-primary-500" />
                <h2 className="font-bold tracking-wide text-sm uppercase">Input Console</h2>
              </div>

              <TextArea
                value={review}
                onChange={setReview}
                placeholder="Paste customer review here..."
              />

              <div className="mt-8">
                <Button onClick={handleAnalyze} loading={loading}>
                  <Zap size={20} className={loading ? "hidden" : "fill-current"} />
                  {loading ? "Analyzing..." : "Initialize Analysis"}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          {!result && !loading && (
            <div className="h-full min-h-[500px] flex flex-col items-center justify-center bg-white/5 border border-white/10 border-dashed rounded-3xl text-slate-500 p-12 text-center backdrop-blur-sm">
              <div className="bg-dark-800 p-4 rounded-full mb-6">
                <LayoutDashboard size={40} className="text-slate-600 opacity-50" />
              </div>
              <h3 className="text-xl font-bold text-slate-400 mb-2">Awaiting Data</h3>
              <p className="max-w-xs text-sm">Enter a review in the console to generate sentiment analysis and response strategies.</p>
            </div>
          )}

          {result && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-dark-900/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center justify-between">
                  <span className="text-sm text-slate-400 font-medium">Sentiment Score</span>
                  <SentimentBadge sentiment={result.sentiment} />
                </div>
                <div className="bg-dark-900/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl">
                  <span className="text-sm text-slate-400 font-medium block mb-2">Key Signals Detected</span>
                  <div className="flex flex-wrap gap-2">
                    {result.key_points.slice(0, 3).map((pt, i) => (
                      <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300 border border-white/5">
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-dark-900/40 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Bot size={16} /> Generated Strategies
                </h3>
                <div className="grid gap-4">
                  {Object.entries(result.responses).map(([tone, text], idx) => (
                    <ResponseCard
                      key={tone}
                      title={tone}
                      content={text}
                      delay={idx * 150}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;