import React, { useState } from 'react';
import { Sparkles, Bot, MessageSquare } from 'lucide-react';
import Button from './components/Button';
import TextArea from './components/TextArea';
import ResponseCard from './components/ResponseCard';
import SentimentBadge from './components/SentimentBadge';


const API_URL = import.meta.env.VITE_API_URL

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
      alert("Error connecting to server. Make sure backend is running!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 flex flex-col items-center py-12 px-4 sm:px-6">

      <div className="text-center mb-10">
        <div className="flex justify-center mb-4">
          <div className="bg-dark-800 p-3 rounded-2xl border border-dark-700 shadow-xl shadow-brand-500/10">
            <Bot size={40} className="text-brand-500" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
          Review<span className="text-brand-500">AI</span> Architect
        </h1>
        <p className="text-slate-400 max-w-md mx-auto">
          Turn customer feedback into professional responses in seconds using Gemini 1.5 AI.
        </p>
      </div>

      <main className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="space-y-6">
          <div className="bg-dark-800/50 p-6 rounded-2xl border border-dark-700 shadow-lg">
            <TextArea
              value={review}
              onChange={setReview}
              placeholder="Example: The product is great but shipping took too long and the box was damaged..."
            />
            <div className="mt-6">
              <Button onClick={handleAnalyze} loading={loading}>
                <Sparkles size={20} />
                Generate Analysis & Replies
              </Button>
            </div>
          </div>

          <div className="bg-dark-800/30 p-4 rounded-xl border border-dark-700/50">
            <h4 className="text-sm font-semibold text-slate-400 mb-2 flex items-center gap-2">
              <MessageSquare size={16} /> Pro Tip
            </h4>
            <p className="text-xs text-slate-500">
              Paste reviews directly from Amazon, TrustPilot, or Google. The AI detects sentiment and context automatically.
            </p>
          </div>
        </div>


        <div className="space-y-6">
          {!result && !loading && (
            <div className="h-full flex flex-col items-center justify-center text-slate-600 border-2 border-dashed border-dark-700 rounded-2xl p-10 min-h-[400px]">
              <Sparkles size={48} className="mb-4 opacity-20" />
              <p>Ready to analyze...</p>
            </div>
          )}

          {result && (
            <div className="animate-fade-in space-y-6">


              <div className="flex justify-between items-center bg-dark-800 p-4 rounded-xl border border-dark-700">
                <span className="text-slate-400 text-sm">Detected Sentiment:</span>
                <SentimentBadge sentiment={result.sentiment} />
              </div>


              <div className="bg-dark-800 p-4 rounded-xl border border-dark-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-3">Key Takeaways</p>
                <ul className="space-y-2">
                  {result.key_points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-brand-500 mt-1">•</span> {point}
                    </li>
                  ))}
                </ul>
              </div>


              <div className="space-y-4">
                <p className="text-xs font-bold text-slate-500 uppercase">Drafted Responses</p>
                {Object.entries(result.responses).map(([tone, text]) => (
                  <ResponseCard key={tone} title={tone} content={text} />
                ))}
              </div>

            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;