import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Eye, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const METRICS = [
  { icon: Eye, title: 'Total Impressions', val: '48.2M', trend: '12.4%', up: true },
  { icon: Users, title: 'Audience Growth', val: '+124K', trend: '8.1%', up: true },
  { icon: TrendingUp, title: 'Engagement Rate', val: '14.2%', trend: '1.2%', up: false },
];

export function AnalyzeSection() {
  return (
    <div className="p-10 min-h-full flex flex-col gap-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4 border-b border-white/10 pb-6"
      >
        <div className="p-3 bg-fuchsia-500/20 rounded-xl border border-fuchsia-500/30">
          <BarChart3 className="w-6 h-6 text-fuchsia-400" />
        </div>
        <div>
          <h2 className="text-3xl font-light text-white tracking-tight">Performance Matrix</h2>
          <p className="text-white/40 text-lg">Deep dive into cross-platform volumetric analytics.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {METRICS.map((metric, i) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.6, type: 'spring' }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 blur-3xl group-hover:bg-fuchsia-500/20 transition-colors duration-500" />
            
            <div className="flex justify-between items-start mb-6">
              <metric.icon className="w-8 h-8 text-fuchsia-400 opacity-80" />
              <span className={`flex items-center gap-1 text-sm font-bold tracking-wide ${metric.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                {metric.up ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {metric.trend}
              </span>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-white/40 font-medium uppercase tracking-widest text-xs">{metric.title}</h3>
              <p className="text-4xl font-light text-white tracking-tighter">{metric.val}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Volumetric Graph Area Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="flex-1 relative rounded-3xl bg-black/40 border border-white/10 overflow-hidden min-h-[400px] flex items-end p-8 gap-4"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent pointer-events-none" />
        
        {/* Floating Bars Simulation */}
        {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: `${h}%`, opacity: 1 }}
            transition={{ delay: 0.8 + i * 0.1, duration: 1, type: 'spring' }}
            className="flex-1 rounded-t-xl bg-gradient-to-t from-fuchsia-500/20 to-fuchsia-400/80 border border-white/10 relative group hover:from-fuchsia-400 hover:to-fuchsia-300 transition-colors"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black px-3 py-1 rounded-lg text-sm font-bold shadow-xl">
              {h}k
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
