import React from 'react'
import { Zap, ShieldCheck, GitBranch, RefreshCw, Cloud, Trash2, ShieldAlert } from 'lucide-react'

export default function Features() {
  const featuresList = [
    {
      icon: <Zap className="w-5 h-5 text-zinc-900" />,
      title: 'Yjs CRDT Synchronization',
      description: 'Synchronizes changes at a character level using Conflict-Free Replicated Data Types, ensuring concurrent peer edits merge seamlessly without manual git rebasing.'
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-zinc-900" />,
      title: 'Zero-Config Watcher',
      description: 'Lightweight background process recursively tracks local disk updates, debouncing writes and suppressing echo loops to keep your IDE running smoothly.'
    },
    {
      icon: <Cloud className="w-5 h-5 text-zinc-900" />,
      title: 'Firestore Cloud Cache',
      description: 'Secures active workspaces with Firestore persistence. Auto-restores collaborative files from the .crdt-store on server startup using debounced caching.'
    },
    {
      icon: <GitBranch className="w-5 h-5 text-zinc-900" />,
      title: 'Stable Connection Guard',
      description: 'Stabilizes sync connections using ref-guarded WebSockets, preventing connection flapping and infinite connect/disconnect cycles during high traffic.'
    },
    {
      icon: <Trash2 className="w-5 h-5 text-zinc-900" />,
      title: 'Clean Cache Deletions',
      description: 'Ensures file and folder deletions are permanent across all team member workspaces by instantly purging related .ybin cache states from server storage.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-zinc-900" />,
      title: 'AST Pre-Push Safety',
      description: 'Validates workspace Javascript structure before simulated Git releases, automatically catching syntax defects (such as duplicate exports) before they commit.'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-950 tracking-tight mb-4">
            Core Architecture Features
          </h2>
          <p className="text-zinc-500 text-sm">
            FS Flow blends the speed of live collaborative editors with the control of local workspace tools, updated with our latest stability and storage releases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-zinc-50/50 hover:bg-zinc-50 border border-zinc-200/50 rounded-2xl transition-all duration-200 shadow-xs hover:shadow-sm flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200/50 flex items-center justify-center shadow-xs">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-1.5 text-base">{feature.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
