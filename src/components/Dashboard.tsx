import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Calendar, 
  Sparkles, 
  Share2, 
  BarChart3,
  Quote
} from 'lucide-react';
import { OverviewSection } from './sections/OverviewSection';
import { PlanSection } from './sections/PlanSection';
import { CreateSection } from './sections/CreateSection';
import { AutomateSection } from './sections/AutomateSection';
import { AnalyzeSection } from './sections/AnalyzeSection';

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'plan', label: 'Calendar', icon: Calendar },
  { id: 'create', label: 'Create', icon: Sparkles },
  { id: 'automate', label: 'Automate', icon: Share2 },
  { id: 'analyze', label: 'Analyze', icon: BarChart3 },
];

const QUOTES = [
  { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
  { text: "Just do it.", author: "Phil Knight" },
  { text: "Have no fear of perfection—you'll never reach it.", author: "Salvador Dali" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" }
];

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full h-full gap-6 pointer-events-none">
      
      {/* Left Sidebar Navigation (Option A Style) */}
      <motion.nav 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-20 h-full flex flex-col items-center gap-3 p-4 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_10px_60px_rgba(0,0,0,0.5)] pointer-events-auto"
      >
        <div className="flex-1 w-full flex flex-col items-center gap-3 mt-4">
          {NAV_ITEMS.map((item, idx) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              onClick={() => setActiveTab(item.id)}
              className={`relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group
                ${activeTab === item.id 
                  ? 'bg-white/10 border border-white/20 text-white shadow-lg' 
                  : 'text-white/30 hover:text-white hover:bg-white/5'
                }`}
            >
              {activeTab === item.id && (
                <motion.div 
                  layoutId="active-indicator"
                  className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 rounded-2xl"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon className="w-6 h-6 z-10" />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-2 bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                <span className="text-xs text-white font-medium">{item.label}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Main Content Area */}
      <main className="flex-1 h-full w-full relative pointer-events-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full bg-black/20 border border-white/10 rounded-3xl backdrop-blur-3xl overflow-y-auto custom-scrollbar relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {activeTab === 'overview' && <OverviewSection />}
            {activeTab === 'plan' && <PlanSection />}
            {activeTab === 'create' && <CreateSection />}
            {activeTab === 'automate' && <AutomateSection />}
            {activeTab === 'analyze' && <AnalyzeSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Motivational Quote Floating Widget */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-28 z-50 pointer-events-auto max-w-md"
      >
        <div className="p-6 rounded-3xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <Quote className="w-7 h-7 text-white/20 mb-4" />
          <AnimatePresence mode="wait">
            <motion.div
              key={quoteIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="space-y-3 relative z-10"
            >
              <p className="text-white/90 text-base font-medium leading-relaxed italic">
                "{QUOTES[quoteIndex].text}"
              </p>
              <p className="text-xs text-white/40 tracking-widest uppercase">
                — {QUOTES[quoteIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
