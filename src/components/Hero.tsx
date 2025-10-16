export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-black to-blue-900 opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-8">
          {/* Tag */}
          <div className="inline-block animate-fade-in">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase border-2 border-orange-500 px-4 py-2">
              CS 701 · Spring 2025 · Middlebury College
            </span>
          </div>

          {/* Main title */}
          <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tight animate-fade-in-up delay-200">
            CRESCENDO
          </h1>

          {/* Subtitle */}
          <div className="max-w-3xl animate-fade-in-up delay-300">
            <p className="text-2xl md:text-4xl font-bold text-orange-500 leading-tight">
              Mapping the sonic landscape around you
            </p>
            <p className="text-lg md:text-xl text-gray-300 mt-4 leading-relaxed">
              See what people are listening to in real-time.
            </p>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-8 text-sm text-gray-400 pt-8 border-t border-gray-700 animate-fade-in delay-400">
            <div>
              <span className="block text-white font-bold">Built by</span>
              Anweshan Adhikari, Ayman Khan, Hedaram Solano
            </div>
            <div>
              <span className="block text-white font-bold">Advised by</span>
              Philip Chaplan
            </div>
            <div>
              <span className="block text-white font-bold">Tech Stack</span>
              React Native · Expo · Supabase · Spotify API
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
