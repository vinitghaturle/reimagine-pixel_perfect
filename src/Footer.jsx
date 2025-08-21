export default function Footer() {
  return (
    <footer className=" advs bg-black text-center">
      <h3 className="text-white font-semibold mb-6 text-4xl">
        🌍 Connect With Us
      </h3>
      
      {/* Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        {/* Column 1 */}
        <div className="bg-neutral-700/40 border border-neutral-700/20 rounded-lg p-4">
          <h4 className="text-lg font-bold text-white mb-3">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="bg-neutral-700/40 border border-neutral-700/20 rounded-lg p-4">
          <h4 className="text-lg font-bold text-white mb-3">Support</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Safety Info</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="bg-neutral-700/40 border border-neutral-700/20 rounded-lg p-4">
          <h4 className="text-lg font-bold text-white mb-3">Follow Us</h4>
          <div className="flex justify-center space-x-4 text-gray-400">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Uber Reimagine. All rights reserved.
      </div>
    </footer>
  );
}