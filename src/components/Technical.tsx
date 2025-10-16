export default function Technical() {
    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <div className="mb-20">
                    <h2 className="text-6xl md:text-8xl font-black text-black leading-none mb-4">
                        TECHNICAL
                    </h2>
                    <div className="w-32 h-2 bg-blue-600"></div>
                </div>

                {/* Tech Stack */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h3 className="text-4xl font-black text-black mb-8">
                            The Stack
                        </h3>
                        <div className="space-y-6">
                            <div className="border-l-4 border-orange-500 pl-6">
                                <h4 className="text-xl font-bold text-black mb-2">
                                    Frontend
                                </h4>
                                <p className="text-gray-700">
                                    React Native 0.79 · Expo 53 · TypeScript ·
                                    React Navigation
                                </p>
                            </div>
                            <div className="border-l-4 border-blue-600 pl-6">
                                <h4 className="text-xl font-bold text-black mb-2">
                                    Mapping
                                </h4>
                                <p className="text-gray-700">
                                    Mapbox GL · Expo Location · Real-time
                                    Clustering Algorithms
                                </p>
                            </div>
                            <div className="border-l-4 border-orange-500 pl-6">
                                <h4 className="text-xl font-bold text-black mb-2">
                                    Backend
                                </h4>
                                <p className="text-gray-700">
                                    Supabase · PostgreSQL · Express.js ·
                                    Real-time Subscriptions
                                </p>
                            </div>
                            <div className="border-l-4 border-blue-600 pl-6">
                                <h4 className="text-xl font-bold text-black mb-2">
                                    Authentication
                                </h4>
                                <p className="text-gray-700">
                                    Spotify OAuth 2.0 · Expo Auth Session ·
                                    Secure Token Storage
                                </p>
                            </div>
                            <div className="border-l-4 border-orange-500 pl-6">
                                <h4 className="text-xl font-bold text-black mb-2">
                                    APIs
                                </h4>
                                <p className="text-gray-700">
                                    Spotify Web API · Real-time Playback
                                    Tracking · User Library Access
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-4xl font-black text-black mb-8">
                            Key Challenges
                        </h3>
                        <div className="space-y-6">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-black text-xl">
                                            1
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-black mb-2">
                                            Real-time Geospatial Data
                                        </h4>
                                        <p className="text-gray-700 text-sm">
                                            Handling thousands of concurrent
                                            users broadcasting location and
                                            listening data required optimized
                                            clustering algorithms and efficient
                                            WebSocket connections.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-black text-xl">
                                            2
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-black mb-2">
                                            Privacy-First Design
                                        </h4>
                                        <p className="text-gray-700 text-sm">
                                            Balancing discoverability with user
                                            privacy meant building granular
                                            controls for location sharing,
                                            listening visibility, and friend
                                            permissions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-black text-xl">
                                            3
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-black mb-2">
                                            Spotify Rate Limits
                                        </h4>
                                        <p className="text-gray-700 text-sm">
                                            Managing API rate limits while
                                            providing real-time updates required
                                            intelligent caching, request
                                            batching, and fallback strategies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Architecture Diagram */}
                <div className="bg-gradient-to-br from-black to-gray-900 text-white p-12 md:p-20 rounded-lg">
                    <h3 className="text-4xl md:text-5xl font-black mb-8">
                        System Architecture
                    </h3>
                    <div className="aspect-video bg-white rounded-lg overflow-hidden">
                        <img
                            src="/images/crescendo-poster.png"
                            alt="Crescendo system architecture poster"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Stats */}
            </div>
        </section>
    );
}
