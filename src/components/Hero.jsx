import React, { useEffect, useState } from 'react'
import { Monitor, Apple } from 'lucide-react'

export default function Hero() {
  const [detectedOS, setDetectedOS] = useState('macOS') // Default to macOS for fallback

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    if (userAgent.includes('win')) {
      setDetectedOS('Windows')
    } else if (userAgent.includes('mac')) {
      setDetectedOS('macOS')
    } else if (userAgent.includes('linux')) {
      setDetectedOS('Linux')
    }
  }, [])

  const handleDownload = (platform) => {
    const url = platform === 'macOS'
      ? 'https://drive.google.com/file/d/1cTSKKEslSMSQbkBRT1NH_wh4JSPcJcQX/view?usp=sharing'
      : 'https://drive.google.com/file/d/1SFCYlMITYDN-_C8poauq3ox5wqZS6Nmc/view?usp=sharing'
    window.open(url, '_blank')
  }

  return (
    <section className="relative overflow-hidden pt-12 pb-20 px-4">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Version Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-zinc-600 bg-zinc-100 rounded-full mb-8 border border-zinc-200/50">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>VERSION 1.1.0 IS LIVE</span>
        </div>

        {/* Heading */}
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-zinc-950 tracking-tight leading-[1.05] mb-6">
          The sync engine <br />
          <span className="text-zinc-400">for modern developers.</span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-lg sm:text-xl text-zinc-500 font-normal leading-relaxed mb-10">
          FS Flow is a continuous code-sync and multiplayer collaboration layer for local development. 
          Bridge local IDEs by instantly syncing changes using Yjs CRDTs—bypassing traditional Git branching for rapid real-time peer coding.
        </p>

        {/* Download Buttons / OS Recommendation */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6 w-full max-w-md">
          {detectedOS === 'macOS' ? (
            <>
              {/* Highlight Mac Download */}
              <button
                onClick={() => handleDownload('macOS')}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white bg-black hover:bg-zinc-800 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl active:scale-98"
              >
                <Apple className="w-5 h-5 fill-current" />
                <span>Download for Mac</span>
                <span className="text-xs text-zinc-400 font-normal">(.dmg)</span>
              </button>
              
              <button
                onClick={() => handleDownload('Windows')}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 rounded-full transition-all duration-200 shadow-xs active:scale-98"
              >
                <Monitor className="w-5 h-5" />
                <span>Get for Windows</span>
                <span className="text-xs text-zinc-500 font-normal">(.exe)</span>
              </button>
            </>
          ) : (
            <>
              {/* Highlight Windows Download */}
              <button
                onClick={() => handleDownload('Windows')}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white bg-black hover:bg-zinc-800 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl active:scale-98"
              >
                <Monitor className="w-5 h-5" />
                <span>Download for Windows</span>
                <span className="text-xs text-zinc-400 font-normal">(.exe)</span>
              </button>

              <button
                onClick={() => handleDownload('macOS')}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 rounded-full transition-all duration-200 shadow-xs active:scale-98"
              >
                <Apple className="w-5 h-5 fill-current" />
                <span>Get for macOS</span>
                <span className="text-xs text-zinc-500 font-normal">(.dmg)</span>
              </button>
            </>
          )}
        </div>

        {/* Small Caption */}
        <p className="text-xs text-zinc-400">
          Detected operating system: <strong className="text-zinc-600">{detectedOS}</strong>. Both builds include automatic sync background processes.
        </p>
      </div>
    </section>
  )
}
