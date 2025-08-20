export default function Footer() {
  return (
    <footer className="w-full bg-amber-50 text-black">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        <div className="flex items-center space-x-3 mb-6">
    
         
          <span className="font-semibold text-xl">Portfolio Generator</span>
        </div>
        <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
          Empowering creators worldwide to build unique, AI-enhanced portfolios effortlessly.  
          Turn your skills and projects into a standout online presence.
        </p>
      </div>
      <div className="border-t border-purple-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
          <a href="/" className="hover:underline">Portfolio Generator</a> ©2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
