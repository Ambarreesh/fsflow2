import React from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export default function FeunicSpaceAd() {
  return (
    <section className="py-16 px-4 bg-zinc-950 text-white relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-indigo-900/40 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-emerald-900/35 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1 px-3 py-1 text-[10px] font-bold tracking-wider text-emerald-400 bg-emerald-950 border border-emerald-800 rounded-full mb-6 uppercase">
          <Sparkles className="w-3 h-3 text-emerald-400 fill-current" />
          <span>Product Spotlight</span>
        </div>

        {/* Heading */}
        <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-4 text-white">
          Looking for a complete virtual office? <br />
          <span className="text-zinc-400">Meet Feunic Space.</span>
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-sm sm:text-base text-zinc-400 font-normal leading-relaxed mb-8">
          Feunic Space is the ultimate all-in-one platform for modern organizations. Combine real-time chat channels, high-fidelity video meetings, OKR tracking, and your own context-aware AI Action Assistant into one beautifully simple dashboard.
        </p>

        {/* CTA Button */}
        <a
          href="https://feunic-space.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-zinc-100 text-zinc-950 font-bold rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 cursor-pointer"
        >
          <span>Explore Feunic Space</span>
          <ArrowUpRight className="w-4 h-4 text-zinc-950" />
        </a>
      </div>
    </section>
  )
}
