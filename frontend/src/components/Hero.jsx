import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../App';
const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const {navigate}=useContext(store)
  return (
    <section
      className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] 
                 w-full bg-no-repeat bg-cover bg-center text-sm pb-44"
    >
      <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-6 w-full">
        <Link to="/" aria-label="Portfolio Generator Home">
          <svg
            width="157"
            height="40"
            viewBox="0 0 157 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Replace this SVG with your own project logo or keep as is */}
            {/* SVG paths... */}
          </svg>
        </Link>

        <div
          className={`flex items-center gap-8 font-medium md:static absolute top-0 left-0 h-full bg-white/50 backdrop-blur max-md:flex-col max-md:justify-center max-md:transition-all max-md:duration-300 max-md:overflow-hidden ${menuOpen ? 'max-md:w-full' : 'max-md:w-0'
            }`}
          style={{ zIndex: 9999 }}
        >

          <Link to="/" className= " font-bold hover:text-gray-600" onClick={() => setMenuOpen(false)}>
            Portfolio Maker
          </Link>

          <Link to="/" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <div className="relative group flex items-center gap-1 cursor-pointer">
           <Link to="/templates" className="hover:translate-x-1 hover:text-slate-500 transition-all" onClick={() => setMenuOpen(false)}>
                Browse Templates
              </Link>

            
           
          </div>

          <Link to="/about" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>
            About
          </Link>


          <button
            className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <Link
          to="/templates"
          className="hidden md:block bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-full font-medium transition"
        >
          Create Portfolio
        </Link>

        <button
          className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12h16" />
            <path d="M4 18h16" />
            <path d="M4 6h16" />
          </svg>
        </button>
      </nav>

      <div className="flex items-center gap-2 border border-slate-300 hover:border-slate-400/70 rounded-full w-max mx-auto px-4 py-2 mt-40 md:mt-32">


      </div>

      <h5 className="text-4xl md:text-7xl font-medium max-w-[850px] text-center mx-auto mt-8">
        Build unique portfolios with AI-driven templates
      </h5>

      <p className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2">
        Create personalized portfolio websites quickly by filling your info and choosing your style. Powered by modern web technologies and ML for uniqueness.
      </p>

      <div className="mx-auto w-full flex items-center justify-center gap-3 mt-4">
        <Link
          to="/templates"
          className="bg-slate-800 hover:bg-black text-white px-6 py-3 rounded-full font-medium transition"
        >
          Get Started
        </Link>
       
      </div>
    </section>
  );
};

export default Hero;
