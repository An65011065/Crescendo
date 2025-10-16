export default function Journey() {
    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <div className="mb-20">
                    <h2 className="text-6xl md:text-8xl font-black text-black leading-none mb-4">
                        THE JOURNEY
                    </h2>
                    <div className="w-32 h-2 bg-orange-500"></div>
                </div>

                {/* Story Sections */}
                <div className="space-y-32">
                    {/* 1. The Problem */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="space-y-6">
                                <div className="inline-block bg-black text-white px-6 py-2 font-bold text-sm tracking-widest">
                                    01 — THE PROBLEM
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black text-black leading-tight">
                                    Music is all around you.
                                    <br />
                                    <span className="text-orange-500">
                                        We just put it on the map.
                                    </span>
                                </h3>
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    Every physical space has a sonic identity.
                                    Coffee shops, gyms, neighborhoods all have
                                    unique music cultures. But that data is
                                    invisible. We wanted to make it visible,
                                    discoverable, and social.
                                </p>
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    What if you could see what everyone around
                                    you is listening to right now? What if you
                                    could discover the musical demographic of
                                    your favorite cafe or find others nearby who
                                    share your taste?
                                </p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="bg-blue-500 aspect-video rounded-lg overflow-hidden shadow-2xl">
                                <img
                                    src="/images/1.png"
                                    alt="Crescendo map view"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 2. The Team */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                                <img
                                    src="/images/1.jpg"
                                    alt="Team working together"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="space-y-6">
                                <div className="inline-block bg-orange-500 text-white px-6 py-2 font-bold text-sm tracking-widest">
                                    02 — THE TEAM
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black text-black leading-tight">
                                    Three builders.
                                    <br />
                                    <span className="text-blue-600">
                                        Five months.
                                    </span>
                                </h3>
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    After working on many projects together over
                                    four years at Middlebury, we came together
                                    for one last time before we graduate. Our
                                    vision? Replace those "What are you
                                    listening to?" conversations around campus
                                    with something you could just see on a map.
                                </p>
                                <div className="space-y-3 pt-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        <span className="text-lg font-bold">
                                            Anweshan Adhikari '25
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        <span className="text-lg font-bold">
                                            Ayman Khan '25
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        <span className="text-lg font-bold">
                                            Hedaram Solano '25
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. The Build */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-black text-white p-12 rounded-lg">
                            <div className="space-y-8">
                                <div className="inline-block bg-orange-500 text-white px-6 py-2 font-bold text-sm tracking-widest">
                                    03 — THE BUILD
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black leading-tight">
                                    From concept to code
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <div className="text-4xl font-black text-orange-500 mb-2">
                                            01
                                        </div>
                                        <h4 className="text-lg font-bold mb-1">
                                            Geospatial Mapping
                                        </h4>
                                        <p className="text-gray-400 text-sm">
                                            Built real-time location clustering
                                            with Mapbox to show music activity
                                            in your area.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-black text-orange-500 mb-2">
                                            02
                                        </div>
                                        <h4 className="text-lg font-bold mb-1">
                                            Spotify Integration
                                        </h4>
                                        <p className="text-gray-400 text-sm">
                                            Integrated OAuth and real-time
                                            playback tracking to capture what
                                            users are listening to.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-black text-orange-500 mb-2">
                                            03
                                        </div>
                                        <h4 className="text-lg font-bold mb-1">
                                            Social Features
                                        </h4>
                                        <p className="text-gray-400 text-sm">
                                            Designed friend systems,
                                            notifications, and Echo Sessions for
                                            group listening.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center h-full">
                            <div className="w-full max-w-sm aspect-[9/16] rounded-lg overflow-hidden shadow-2xl bg-black">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source
                                        src="/images/crescendo-demo.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                        </div>
                    </div>

                    {/* 4. The Features */}
                    <div>
                        <div className="mb-12">
                            <div className="inline-block bg-blue-600 text-white px-6 py-2 font-bold text-sm tracking-widest mb-6">
                                04 — THE FEATURES
                            </div>
                            <h3 className="text-4xl md:text-6xl font-black text-black leading-tight">
                                Core features that built Crescendo.
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Map View */}
                            <div className="bg-gray-50 p-8 rounded-lg">
                                <div className="aspect-[9/16] bg-white rounded-lg overflow-hidden shadow-lg mb-6">
                                    <img
                                        src="/images/1.png"
                                        alt="Map view showing nearby listeners"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h4 className="text-2xl font-black text-black mb-3">
                                    Map View
                                </h4>
                                <p className="text-gray-700">
                                    See what people around you are listening to
                                    in real-time. Discover the sonic landscape
                                    of your neighborhood.
                                </p>
                            </div>

                            {/* User Profiles */}
                            <div className="bg-gray-50 p-8 rounded-lg">
                                <div className="aspect-[9/16] bg-white rounded-lg overflow-hidden shadow-lg mb-6">
                                    <img
                                        src="/images/2.png"
                                        alt="User profile interaction"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h4 className="text-2xl font-black text-black mb-3">
                                    Connect
                                </h4>
                                <p className="text-gray-700">
                                    Filter by songs, artists, or geolocation to
                                    find listeners who share your taste. Connect
                                    with them and build your music community.
                                </p>
                            </div>

                            {/* Discover */}
                            <div className="bg-gray-50 p-8 rounded-lg">
                                <div className="aspect-[9/16] bg-white rounded-lg overflow-hidden shadow-lg mb-6">
                                    <img
                                        src="/images/3.png"
                                        alt="Discover screen with Echo Sessions"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h4 className="text-2xl font-black text-black mb-3">
                                    Discover
                                </h4>
                                <p className="text-gray-700">
                                    Join live Echo Sessions hosted by people
                                    around you. Explore weekly hits and find
                                    people with similar taste.
                                </p>
                            </div>

                            {/* Notifications */}
                            <div className="bg-gray-50 p-8 rounded-lg">
                                <div className="aspect-[9/16] bg-white rounded-lg overflow-hidden shadow-lg mb-6">
                                    <img
                                        src="/images/4.png"
                                        alt="Notifications panel"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h4 className="text-2xl font-black text-black mb-3">
                                    Stay Connected
                                </h4>
                                <p className="text-gray-700">
                                    Get notified when friends send requests or
                                    when Echo Sessions start near you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
