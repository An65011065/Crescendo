export default function Team() {
    return (
        <section className="bg-orange-500 py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <div className="mb-20">
                    <h2 className="text-6xl md:text-8xl font-black text-white leading-none mb-4">
                        THE TEAM
                    </h2>
                    <div className="w-32 h-2 bg-black"></div>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-3 gap-12 mb-20">
                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl hover-lift animate-fade-in-up">
                        <div className="aspect-square bg-gray-200 overflow-hidden">
                            <img
                                src="/images/an.jpeg"
                                alt="Anweshan Adhikari"
                                className="w-full h-full object-cover transition-smooth hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-black text-black mb-2">
                                Anweshan Adhikari
                            </h3>
                            <p className="text-orange-500 font-bold mb-3">
                                Frontend Developer
                            </p>
                            <p className="text-gray-700">
                                Led frontend architecture and Spotify API
                                integration. Built the map view and user
                                tracking system.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl hover-lift animate-fade-in-up delay-200">
                        <div className="aspect-square bg-gray-200 overflow-hidden">
                            <img
                                src="/images/ayman.jpeg"
                                alt="Ayman Khan"
                                className="w-full h-full object-cover transition-smooth hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-black text-black mb-2">
                                Ayman Khan
                            </h3>
                            <p className="text-orange-500 font-bold mb-3">
                                Product Designer
                            </p>
                            <p className="text-gray-700">
                                Designed user experience and product vision.
                                Created UI mockups and defined feature
                                specifications.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl hover-lift animate-fade-in-up delay-400">
                        <div className="aspect-square bg-gray-200 overflow-hidden">
                            <img
                                src="/images/hedavam.png"
                                alt="Hedavam Solano"
                                className="w-full h-full object-cover transition-smooth hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-black text-black mb-2">
                                Hedavam Solano
                            </h3>
                            <p className="text-orange-500 font-bold mb-3">
                                Backend Engineer
                            </p>
                            <p className="text-gray-700">
                                Designed database architecture and built backend
                                services with Supabase and PostgreSQL.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Photos */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                        <img
                            src="/images/3.jpg"
                            alt="Team presenting at Middlebury College"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                        <img
                            src="/images/5.jpg"
                            alt="Team photo at waterfront"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Advisor */}
                <div className="mt-20 bg-black text-white p-12 rounded-lg">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold text-orange-500 tracking-widest mb-4">
                            ADVISED BY
                        </p>
                        <h3 className="text-4xl font-black mb-4">
                            Philip Caplan
                        </h3>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Philip helped us every step of the way—from learning
                            Agile development and version control to writing our
                            ethical statements and designing the presentation
                            poster. His guidance on user privacy and the scope
                            of features was essential to our project.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
