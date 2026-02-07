import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Play, Activity } from 'lucide-react';

const STATS = [
  { label: 'Total Reach', value: '2.4M', trend: '+14%', icon: Users },
  { label: 'Avg Engagement', value: '8.2%', trend: '+2.1%', icon: Activity },
  { label: 'Views (30d)', value: '14.8M', trend: '+24%', icon: Play },
];

export function OverviewSection() {
  return (
    <div className="p-10 min-h-full flex flex-col gap-12">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="space-y-2"
      >
        <h1 className="text-4xl font-light tracking-tight text-white/90">
          Welcome back, <span className="font-semibold text-white">Creator</span>.
        </h1>
        <p className="text-white/40 text-lg">Your digital empire is thriving across all platforms.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex justify-between items-start mb-8">
              <div className="p-3 bg-white/5 rounded-2xl">
                <stat.icon className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="flex items-center gap-1 text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full text-sm font-medium">
                <ArrowUpRight className="w-4 h-4" />
                {stat.trend}
              </div>
            </div>
            <div className="relative z-10 space-y-1">
              <h3 className="text-white/40 font-medium">{stat.label}</h3>
              <p className="text-4xl font-bold tracking-tight text-white">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Graph Placeholder - Cinematic styling */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex-1 relative rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden min-h-[400px] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
        <div className="text-center space-y-4 relative z-10">
          <div className="w-16 h-16 mx-auto rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center animate-pulse">
            <Activity className="w-8 h-8 text-indigo-400" />
          </div>
          <h2 className="text-xl font-medium text-white/60">Live Analytics Engine Running</h2>
          <p className="text-white/30 text-sm">Real-time data ingestion active across 4 connected platforms</p>
        </div>
      </motion.div>
    </div>
  );
}
