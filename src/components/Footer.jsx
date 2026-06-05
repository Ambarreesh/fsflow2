import React from 'react'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 rounded bg-zinc-950 text-white font-display font-black text-sm tracking-tighter">
            F
          </div>
          <span className="font-display font-semibold text-zinc-900">
            FS Flow Product Launch
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-zinc-500 font-medium">
          <a href="#product" className="hover:text-black transition-colors">Simulator</a>
          <a href="#install" className="hover:text-black transition-colors">Install</a>
          <a href="#docs" className="hover:text-black transition-colors">Documentation</a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} Feunic Technologies Pvt. Ltd. All rights reserved.
        </p>

      </div>
    </footer>
  )
}
