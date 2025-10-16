export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-5xl font-black mb-6">CRESCENDO</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-6">
              A Senior Seminar project at Middlebury College exploring the intersection of
              music, location, and social discovery.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/csci701s25/crescendo/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-3 font-bold rounded hover:bg-orange-500 hover:text-white transition-smooth inline-block hover:scale-105"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold tracking-widest text-orange-500 mb-4">PROJECT</h3>
              <ul className="space-y-2 text-gray-400">
                <li>CS 701 - Spring 2025</li>
                <li>Middlebury College</li>
                <li>Senior Seminar</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-widest text-orange-500 mb-4">TEAM</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Anweshan Adhikari '25</li>
                <li>Ayman Khan '25</li>
                <li>Hedaram Solano '25</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Crescendo. Built with React, Vite, and Tailwind CSS.
            </p>
            <p className="text-gray-500 text-sm">
              Advised by Philip Chaplan
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
