import React from 'react'
import { Cpu, Bug, History, Network, Mic, Sparkles } from 'lucide-react'

export default function PowerTools() {
  const toolsList = [
    {
      icon: <Cpu className="w-5 h-5 text-indigo-600" />,
      title: 'WASM Sandbox',
      description: 'Run full-stack Node.js runtimes securely in-browser via @webcontainer/api. Execute npm installs and test runs in a sandboxed WebAssembly container.'
    },
    {
      icon: <Bug className="w-5 h-5 text-indigo-600" />,
      title: 'Debugger Breakpoints',
      description: 'Set line-by-line breakpoints and inspect call stacks natively within the integrated Monaco Editor layout for quick diagnostics.'
    },
    {
      icon: <History className="w-5 h-5 text-indigo-600" />,
      title: 'Time Travel View',
      description: 'Scrub backwards and forwards through historical CRDT keystroke edits using a visual playback scrubber, recovering deleted functions instantly.'
    },
    {
      icon: <Network className="w-5 h-5 text-indigo-600" />,
      title: 'Visual Canvas Layout',
      description: 'Switch from code editor to a nodes canvas flow map. Visualize your workspace folder structures, exports, and directory links visually.'
    },
    {
      icon: <Mic className="w-5 h-5 text-indigo-600" />,
      title: 'Voice Huddle (Coming Soon)',
      description: 'Connect immediately to high-fidelity multiplayer voice huddles powered by WebRTC directly inside your workspace lobby—no external apps required.'
    }
  ]

  return (
    <section className="py-20 px-4 bg-zinc-50 border-t border-zinc-200/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 fill-current animate-pulse" />
              <span>NEXT-GEN POWER TOOLS</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-950 tracking-tight">
              Developer Workspace Toolkit
            </h2>
            <p className="text-zinc-500 text-xs mt-3 leading-relaxed">
              Explore advanced editor integrations packed inside the desktop client. Run code, debug, scrub histories, and chat without leaving the browser container.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsList.map((tool, idx) => (
            <div 
              key={idx} 
              className={`p-6 bg-white border border-zinc-200/50 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 flex flex-col gap-4 ${
                tool.title.includes('Coming Soon') ? 'opacity-85 border-dashed' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shadow-xs shrink-0">
                {tool.icon}
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-1.5 text-base flex items-center gap-2">
                  {tool.title}
                  {tool.title.includes('Coming Soon') && (
                    <span className="text-[9px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                      Soon
                    </span>
                  )}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
