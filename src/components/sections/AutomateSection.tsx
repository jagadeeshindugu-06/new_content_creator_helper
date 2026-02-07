import { motion } from 'framer-motion';
import { Share2, Video, FileText, Smartphone } from 'lucide-react';

const WORKFLOW = [
  { step: 'Ingest', icon: Video, label: 'Master File', color: 'text-indigo-400', bg: 'bg-indigo-400/20' },
  { step: 'Process', icon: FileText, label: 'AI Transcription', color: 'text-emerald-400', bg: 'bg-emerald-400/20' },
  { step: 'Distribute', icon: Smartphone, label: 'Omnichannel Post', color: 'text-fuchsia-400', bg: 'bg-fuchsia-400/20' },
];

export function AutomateSection() {
  return (
    <div className="p-10 min-h-full flex flex-col gap-12">
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4 border-b border-white/10 pb-6"
      >
        <div className="p-3 bg-indigo-500/20 rounded-xl border border-indigo-500/30">
          <Share2 className="w-6 h-6 text-indigo-400" />
        </div>
        <div>
          <h2 className="text-3xl font-light text-white tracking-tight">Distribution Engine</h2>
          <p className="text-white/40 text-lg">Cross-platform synchronization and logic flows.</p>
        </div>
      </motion.div>

      {/* Main Graph Area */}
      <div className="flex-1 relative bg-black/40 rounded-3xl border border-white/5 overflow-hidden flex flex-col items-center justify-center p-12 backdrop-blur-3xl shadow-inner">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="flex items-center gap-12 relative z-10 w-full max-w-4xl justify-between">
          {WORKFLOW.map((node, i) => (
            <motion.div
              key={node.step}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.6, type: 'spring' }}
              className="flex flex-col items-center gap-6 relative group"
            >
              {/* Connecting Line */}
              {i < WORKFLOW.length - 1 && (
                <div className="absolute left-[calc(100%+3rem)] top-10 w-[calc(100%+2rem)] h-[2px] bg-white/10 overflow-hidden hidden md:block z-0">
                  <motion.div 
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent shadow-[0_0_10px_rgba(99,102,241,0.8)]"
                  />
                </div>
              )}

              {/* Node Icon */}
              <div className={`w-24 h-24 rounded-3xl ${node.bg} flex items-center justify-center backdrop-blur-md border border-white/10 ring-4 ring-black/50 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500 z-10`}>
                <node.icon className={`w-10 h-10 ${node.color}`} />
              </div>

              {/* Node Label */}
              <div className="text-center space-y-2 z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-white/30">{node.step}</span>
                <h3 className="text-xl font-medium text-white tracking-wide">{node.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Status Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-24 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3 relative z-10"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-emerald-300 font-medium tracking-wide">Flow Active & Monitoring</span>
        </motion.div>
      </div>
    </div>
  );
}
