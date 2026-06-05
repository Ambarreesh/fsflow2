import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 pb-2 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 bg-white border border-zinc-100 rounded-full shadow-xs">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-black text-white font-display font-extrabold text-lg tracking-tighter">
            F
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-zinc-900">
            FS Flow
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <a href="#product" className="hover:text-black transition-colors">Product</a>
          <a href="#features" className="hover:text-black transition-colors">Features</a>
          <a href="#install" className="hover:text-black transition-colors">Install Guide</a>
          <a href="#docs" className="hover:text-black transition-colors">Documentation</a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#install"
            className="text-sm font-semibold text-zinc-950 hover:text-zinc-600 transition-colors"
          >
            Read Manual
          </a>
          <a
            href="#install"
            className="hidden sm:inline-block px-5 py-2.5 text-sm font-semibold text-white bg-black hover:bg-zinc-800 rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
          >
            Get FS Flow
          </a>
        </div>
      </div>
    </header>
  )
}
