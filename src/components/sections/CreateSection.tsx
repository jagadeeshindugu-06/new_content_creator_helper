import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, Lightbulb, Hash, Image as ImageIcon, Video, Sparkles, Download, RefreshCw, Palette, Film, Play } from 'lucide-react';

const IMAGE_STYLES = ['Photorealistic', 'Digital Art', 'Oil Painting', 'Anime', 'Minimalist', '3D Render', 'Cyberpunk', 'Watercolor'];
const ASPECT_RATIOS = ['1:1', '16:9', '9:16', '4:5'];
const VIDEO_STYLES = ['Cinematic', 'Documentary', 'Animated', 'Social Media', 'Tutorial'];

export function CreateSection() {
  const [activeMode, setActiveMode] = useState<'text' | 'image' | 'video'>('text');
  const [imagePrompt, setImagePrompt] = useState('');
  const [videoPrompt, setVideoPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState(IMAGE_STYLES[0]);
  const [selectedRatio, setSelectedRatio] = useState(ASPECT_RATIOS[0]);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleImageGenerate = () => {
    if (!imagePrompt.trim()) return;
    setIsGenerating(true);
    
    // Simulate image generation
    setTimeout(() => {
      const newImages = [
        `https://picsum.photos/seed/${Date.now()}/800/800`,
        `https://picsum.photos/seed/${Date.now() + 1}/800/800`,
        `https://picsum.photos/seed/${Date.now() + 2}/800/800`,
        `https://picsum.photos/seed/${Date.now() + 3}/800/800`
      ];
      setGeneratedImages(newImages);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="p-12 space-y-8">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-black text-white mb-3 tracking-tight">
          AI Creative Studio
        </h1>
        <p className="text-white/50 text-lg">
          Harness artificial intelligence to generate compelling content at scale
        </p>
      </motion.div>

      {/* Mode Selector */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex gap-3"
      >
        <button
          onClick={() => setActiveMode('text')}
          className={`px-6 py-3 rounded-2xl flex items-center gap-2 transition-all duration-300 ${
            activeMode === 'text' 
              ? 'bg-indigo-500/20 border-2 border-indigo-400/50 text-white shadow-lg shadow-indigo-500/20' 
              : 'bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10'
          }`}
        >
          <Lightbulb className="w-5 h-5" />
          <span className="font-semibold">Text Content</span>
        </button>
        <button
          onClick={() => setActiveMode('image')}
          className={`px-6 py-3 rounded-2xl flex items-center gap-2 transition-all duration-300 ${
            activeMode === 'image' 
              ? 'bg-pink-500/20 border-2 border-pink-400/50 text-white shadow-lg shadow-pink-500/20' 
              : 'bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10'
          }`}
        >
          <ImageIcon className="w-5 h-5" />
          <span className="font-semibold">Image Generation</span>
        </button>
        <button
          onClick={() => setActiveMode('video')}
          className={`px-6 py-3 rounded-2xl flex items-center gap-2 transition-all duration-300 ${
            activeMode === 'video' 
              ? 'bg-purple-500/20 border-2 border-purple-400/50 text-white shadow-lg shadow-purple-500/20' 
              : 'bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10'
          }`}
        >
          <Video className="w-5 h-5" />
          <span className="font-semibold">Video Generation</span>
        </button>
      </motion.div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        {activeMode === 'text' && (
          <motion.div
            key="text"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* AI Toolkit Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Content Ideas Card */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Lightbulb className="w-12 h-12 text-indigo-400 mb-4 relative z-10" />
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Idea Generator</h3>
                <p className="text-white/60 mb-6 relative z-10">Discover trending topics and content angles for your niche</p>
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm font-medium transition-all duration-300 border border-white/20 relative z-10">
                  Generate Ideas
                </button>
              </div>

              {/* Caption Synthesis Card */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Wand2 className="w-12 h-12 text-pink-400 mb-4 relative z-10" />
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Caption Writer</h3>
                <p className="text-white/60 mb-6 relative z-10">Generate viral hooks and captions that drive engagement</p>
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm font-medium transition-all duration-300 border border-white/20 relative z-10">
                  Write Caption
                </button>
              </div>

              {/* Hashtag Engine Card */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Hash className="w-12 h-12 text-cyan-400 mb-4 relative z-10" />
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Hashtag Engine</h3>
                <p className="text-white/60 mb-6 relative z-10">Smart hashtag recommendations optimized for reach</p>
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm font-medium transition-all duration-300 border border-white/20 relative z-10">
                  Find Hashtags
                </button>
              </div>

            </div>

            {/* AI Intelligence Prompt */}
            <div className="relative">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/20 backdrop-blur-2xl shadow-[0_0_50px_rgba(99,102,241,0.15)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <label className="block text-white/70 text-sm font-medium mb-3 tracking-wide uppercase">
                    AI Content Synthesis
                  </label>
                  <div className="flex gap-4">
                    <input 
                      type="text"
                      placeholder="Describe the content you want to create..."
                      className="flex-1 px-6 py-4 bg-black/30 border border-white/20 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                    />
                    <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-2xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-indigo-500/50">
                      Generate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeMode === 'image' && (
          <motion.div
            key="image"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Image Generation Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Generation Controls */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Prompt Input */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 border border-white/10 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-pink-400" />
                    <h3 className="text-xl font-bold text-white">Image Prompt</h3>
                  </div>
                  <textarea
                    value={imagePrompt}
                    onChange={(e) => setImagePrompt(e.target.value)}
                    placeholder="Describe the image you want to generate... (e.g., 'A futuristic cityscape at sunset with flying cars')"
                    className="w-full h-32 px-6 py-4 bg-black/30 border border-white/20 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-pink-400/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Style Selection */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Palette className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold text-white">Art Style</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {IMAGE_STYLES.map((style) => (
                      <button
                        key={style}
                        onClick={() => setSelectedStyle(style)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          selectedStyle === style
                            ? 'bg-purple-500/30 border-2 border-purple-400/50 text-white shadow-lg'
                            : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Aspect Ratio */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-white/10 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <ImageIcon className="w-6 h-6 text-indigo-400" />
                    <h3 className="text-xl font-bold text-white">Aspect Ratio</h3>
                  </div>
                  <div className="flex gap-3">
                    {ASPECT_RATIOS.map((ratio) => (
                      <button
                        key={ratio}
                        onClick={() => setSelectedRatio(ratio)}
                        className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          selectedRatio === ratio
                            ? 'bg-indigo-500/30 border-2 border-indigo-400/50 text-white shadow-lg'
                            : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {ratio}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Generation Summary & Action */}
              <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/20 backdrop-blur-2xl">
                  <h3 className="text-lg font-bold text-white mb-6">Generation Settings</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-sm">Style:</span>
                      <span className="text-white font-medium">{selectedStyle}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-sm">Ratio:</span>
                      <span className="text-white font-medium">{selectedRatio}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-sm">Quality:</span>
                      <span className="text-white font-medium">High</span>
                    </div>
                  </div>
                  <button
                    onClick={handleImageGenerate}
                    disabled={!imagePrompt.trim() || isGenerating}
                    className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 rounded-2xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-pink-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Generate Images
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* Generated Images Gallery */}
            {generatedImages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/20 backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Generated Images</h3>
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm font-medium transition-all duration-300 border border-white/20 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4" />
                    Regenerate
                  </button>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {generatedImages.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-white/10"
                    >
                      <img src={img} alt={`Generated ${idx + 1}`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        <button className="p-3 bg-white/20 backdrop-blur-xl rounded-full hover:bg-white/30 transition-all">
                          <Download className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

          </motion.div>
        )}

        {activeMode === 'video' && (
          <motion.div
            key="video"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Video Generation Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Video Prompt */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-white/10 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Film className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Video Prompt</h3>
                </div>
                <textarea
                  value={videoPrompt}
                  onChange={(e) => setVideoPrompt(e.target.value)}
                  placeholder="Describe the video you want to create... (e.g., '30-second product demo with smooth transitions')"
                  className="w-full h-40 px-6 py-4 bg-black/30 border border-white/20 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* Video Settings */}
              <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Play className="w-6 h-6 text-indigo-400" />
                    <h3 className="text-xl font-bold text-white">Video Style</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {VIDEO_STYLES.map((style) => (
                      <button
                        key={style}
                        className="px-4 py-3 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/20 backdrop-blur-2xl">
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 rounded-2xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2">
                    <Video className="w-5 h-5" />
                    Generate Video
                  </button>
                </div>
              </div>

            </div>

            {/* Video Preview Placeholder */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/20 backdrop-blur-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Video Preview</h3>
              <div className="aspect-video rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Video className="w-16 h-16 text-white/20 mx-auto" />
                  <p className="text-white/40">Generated video will appear here</p>
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
