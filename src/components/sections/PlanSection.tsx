import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Accurately generating October 2026 (Starts on Thursday, 31 days, perfectly fits 35 cells / 5 weeks)
const MOCK_CALENDAR_DATA = Array.from({ length: 35 }).map((_, i) => {
  const dayNum = i - 3 > 0 && i - 3 <= 31 ? i - 3 : null;
  const events = [];
  
  if (dayNum === 4) events.push({ type: 'Instagram', color: 'bg-pink-500' });
  if (dayNum === 12) {
    events.push({ type: 'Youtube', color: 'bg-red-500' });
    events.push({ type: 'Linkedin', color: 'bg-blue-500' });
  }
  if (dayNum === 15) events.push({ type: 'Instagram', color: 'bg-pink-500' });
  if (dayNum === 22) events.push({ type: 'Linkedin', color: 'bg-blue-500' });
  if (dayNum === 28) events.push({ type: 'Youtube', color: 'bg-red-500' });

  return { day: dayNum, events };
});

export function PlanSection() {
  return (
    <div className="p-10 min-h-full flex flex-col gap-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-between items-end border-b border-white/10 pb-6"
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium tracking-widest uppercase mb-2">
            <CalendarIcon className="w-3 h-3" /> Spatial Calendar
          </div>
          <h2 className="text-4xl font-light text-white tracking-tight">October 2026</h2>
          <p className="text-white/40 text-lg">Omnichannel distribution schedule</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all border border-white/10">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all border border-white/10">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center gap-2 font-medium">
            <Plus className="w-4 h-4" /> New Post
          </button>
        </div>
      </motion.div>

      {/* Calendar Grid */}
      <div className="flex-1 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-3xl overflow-hidden flex flex-col p-6 shadow-inner relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] pointer-events-none" />
        
        {/* Days Header */}
        <div className="grid grid-cols-7 gap-4 mb-4">
          {DAYS.map((day) => (
            <div key={day} className="text-center text-xs font-bold uppercase tracking-widest text-white/30 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Body */}
        <div className="flex-1 grid grid-cols-7 gap-3">
          {MOCK_CALENDAR_DATA.map((cell, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.01, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className={`
                relative p-4 rounded-2xl flex flex-col items-end border transition-all duration-300
                ${cell.day ? 'bg-white/[0.02] border-white/10 hover:border-white/30 hover:bg-white/[0.04] cursor-pointer' : 'bg-transparent border-transparent opacity-0 pointer-events-none select-none'}
              `}
            >
              {cell.day && (
                <>
                  <span className={`text-lg font-light ${cell.day === 12 ? 'text-indigo-400 font-bold' : 'text-white/60'}`}>
                    {cell.day}
                  </span>
                  
                  {/* Today Indicator */}
                  {cell.day === 12 && (
                    <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,1)]" />
                  )}

                  {/* Events */}
                  <div className="mt-auto w-full flex flex-col gap-1 pt-4">
                    {cell.events.map((evt, idx) => (
                      <div key={idx} className={`h-1.5 w-full rounded-full ${evt.color} opacity-80`} />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
