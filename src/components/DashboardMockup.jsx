import React, { useState, useEffect } from 'react'
import { Terminal, Users, Play, Code, AlertTriangle, CheckCircle, RefreshCw, FileText } from 'lucide-react'

export default function DashboardMockup() {
  // Simulator State
  const [fileList, setFileList] = useState([
    { name: 'index.js', status: 'synced', size: '1.2 KB', active: true },
    { name: 'utils.js', status: 'synced', size: '2.4 KB', active: false },
    { name: 'ast-engine.js', status: 'synced', size: '4.8 KB', active: false },
    { name: 'package.json', status: 'synced', size: '612 B', active: false },
  ])

  const [activeFileContent, setActiveFileContent] = useState(
`// FS Flow Collaboration Workspace
const express = require('express');
const app = express();

// Server config
const PORT = process.env.PORT || 3001;

export default function startServer() {
  app.listen(PORT, () => {
    console.log(\`Cloud Sync server online on port \${PORT}\`);
  });
}`
  )

  const [consoleLogs, setConsoleLogs] = useState([
    'FS Flow Syncer initialized.',
    'Local workspace mapping: ~/FS-Workspace/FS-SOXJ1T',
    'Connection to Cloud Sync Server: ESTABLISHED 🟢',
    '☁️ [Cloud Cache] Connection to Firebase Firestore: ACTIVE',
    '☁️ [Cloud Cache] Auto-restored active workspace from .crdt-store on boot',
  ])

  const [isTyping, setIsTyping] = useState(false)
  const [typingUser, setTypingUser] = useState(null)
  const [astStatus, setAstStatus] = useState('idle') // idle, running, passed, failed
  const [hasDuplicateExport, setHasDuplicateExport] = useState(false)

  // Simulation: Peer typing
  const simulatePeerTyping = (name) => {
    if (isTyping) return
    setIsTyping(true)
    setTypingUser(name)
    
    // Update file status to syncing
    setFileList(prev => prev.map(f => f.name === 'index.js' ? { ...f, status: 'syncing' } : f))
    setConsoleLogs(prev => [...prev, `[Remote Sync] Peer "${name}" is modifying index.js...`])

    // Simulate character typing over time
    let chars = '\n// Peer edit by ' + name + '\nconsole.log("Co-coding session active!");'
    let index = 0
    
    const interval = setInterval(() => {
      if (index < chars.length) {
        setActiveFileContent(prev => prev + chars[index])
        index++
      } else {
        clearInterval(interval)
        
        // Debounce sync completion simulation (2 seconds as specified in watcher rules)
        setTimeout(() => {
          setIsTyping(false)
          setTypingUser(null)
          setFileList(prev => prev.map(f => f.name === 'index.js' ? { ...f, status: 'synced' } : f))
          setConsoleLogs(prev => [
            ...prev, 
            `[Remote Sync] Saved peer edits from ${name} to local disk.`,
            `🟢 Workspace synced successfully.`
          ])
        }, 1500)
      }
    }, 40)
  }

  // Simulation: AST check
  const runAstCheck = () => {
    setAstStatus('running')
    setConsoleLogs(prev => [
      ...prev,
      '------------------------------------------------',
      '[AST Scan] Initializing abstract syntax tree scan...',
      '[AST Scan] Validating syntax compliance for JS exports...'
    ])

    setTimeout(() => {
      if (hasDuplicateExport) {
        setAstStatus('failed')
        setConsoleLogs(prev => [
          ...prev,
          '🔴 [AST Scan Error] Duplicate default export detected in index.js!',
          '   └─ Rule violation: Javascript syntax allows only one default export per module.',
          '🔴 [Git Push Aborted] Pre-push verification FAILED. Release canceled to protect repo.'
        ])
      } else {
        setAstStatus('passed')
        setConsoleLogs(prev => [
          ...prev,
          '💚 [AST Scan Pass] No syntax structural collisions detected.',
          '🚀 [Git Push Sim] Executing repository update...',
          '   └─ git add .',
          '   └─ git commit -m "Auto-synced collaborative checkpoint"',
          '   └─ git push origin main',
          '🟢 [Git Push Sim] Deploy check succeeded. Code pushed to origin.'
        ])
      }
    }, 1800)
  }

  const toggleDuplicateExport = () => {
    if (hasDuplicateExport) {
      // Remove collision text
      setActiveFileContent(prev => prev.replace(
        '\nexport default function DuplicateDefaultComponent() {\n  return null;\n}', 
        ''
      ))
      setHasDuplicateExport(false)
      setConsoleLogs(prev => [...prev, '[Editor] Removed duplicate export statement. AST clean.'])
    } else {
      // Add collision text
      setActiveFileContent(prev => prev + '\nexport default function DuplicateDefaultComponent() {\n  return null;\n}')
      setHasDuplicateExport(true)
      setConsoleLogs(prev => [...prev, '⚠️ [Editor] Injected duplicate default export. Code now conflicts.'])
    }
  }

  return (
    <section id="product" className="py-20 px-4 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-950 tracking-tight mb-4">
            Interactive Sync Simulator
          </h2>
          <p className="text-zinc-500">
            See how the FS Flow desktop watcher connects local editors. 
            Test live multiplayer synchronization and syntax checks right in the interactive dashboard below.
          </p>
        </div>

        {/* Dashboard mockup grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white rounded-3xl p-4 sm:p-6 border border-zinc-200/60 shadow-xl">
          
          {/* Controls Side Panel (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 bg-zinc-50/70 rounded-2xl p-5 border border-zinc-100">
            <div>
              <h3 className="font-display font-semibold text-zinc-900 text-base mb-1 flex items-center gap-2">
                <Users className="w-4 h-4 text-zinc-600" />
                Collaborator Simulator
              </h3>
              <p className="text-xs text-zinc-500">
                Trigger simulated remote typing from other developers onto your workspace files.
              </p>
              
              <div className="flex flex-col gap-2 mt-4">
                <button
                  onClick={() => simulatePeerTyping('Person 1')}
                  disabled={isTyping || astStatus === 'running'}
                  className="flex items-center justify-between px-4 py-3 bg-white hover:bg-zinc-100 disabled:opacity-50 text-zinc-700 hover:text-black border border-zinc-200 rounded-xl text-sm font-semibold transition-all duration-150 text-left active:scale-98 cursor-pointer"
                >
                  <span>Simulate Person 1 typing</span>
                  <Play className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => simulatePeerTyping('Person 2')}
                  disabled={isTyping || astStatus === 'running'}
                  className="flex items-center justify-between px-4 py-3 bg-white hover:bg-zinc-100 disabled:opacity-50 text-zinc-700 hover:text-black border border-zinc-200 rounded-xl text-sm font-semibold transition-all duration-150 text-left active:scale-98 cursor-pointer"
                >
                  <span>Simulate Person 2 typing</span>
                  <Play className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <hr className="border-zinc-200/60" />

            <div>
              <h3 className="font-display font-semibold text-zinc-900 text-base mb-1 flex items-center gap-2">
                <Code className="w-4 h-4 text-zinc-600" />
                AST Collision Engine
              </h3>
              <p className="text-xs text-zinc-500 mb-4">
                Test the safety layer that runs AST syntax validations before simulated Git deploys.
              </p>

              <div className="flex flex-col gap-2">
                <button
                  onClick={toggleDuplicateExport}
                  disabled={isTyping || astStatus === 'running'}
                  className={`flex items-center justify-between px-4 py-3 border rounded-xl text-sm font-semibold transition-all duration-150 text-left active:scale-98 cursor-pointer ${
                    hasDuplicateExport 
                      ? 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100' 
                      : 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-100 hover:text-black'
                  }`}
                >
                  <span>{hasDuplicateExport ? 'Clean Code (Fix Export)' : 'Force AST Collision (Duplicate Export)'}</span>
                  <AlertTriangle className={`w-4 h-4 ${hasDuplicateExport ? 'text-rose-600' : 'text-zinc-400'}`} />
                </button>

                <button
                  onClick={runAstCheck}
                  disabled={isTyping || astStatus === 'running'}
                  className="w-full mt-2 flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-zinc-400 rounded-xl transition-all shadow-xs cursor-pointer active:scale-98"
                >
                  {astStatus === 'running' ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Checking AST Compliance...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Run AST Update & Push</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Screen Code Mockup (8 cols) */}
          <div className="lg:col-span-8 flex flex-col rounded-2xl border border-zinc-200 shadow-md overflow-hidden bg-[#09090b]">
            {/* Header / Editor Tabs */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#18181b] border-b border-[#27272a] text-zinc-400 text-xs">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                </div>
                <div className="h-4 w-px bg-zinc-700/60" />
                <div className="flex items-center gap-1 text-[#f4f4f5] font-medium">
                  <FileText className="w-3.5 h-3.5 text-indigo-400" />
                  <span>index.js</span>
                </div>
              </div>

              {/* Cloud Sync Status Badge */}
              <div className="hidden sm:flex items-center gap-1.5 text-[9px] text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-900/30 px-2 py-0.5 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>CLOUD SYNC: ACTIVE</span>
              </div>

              {/* Live Presence Avatars */}
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-[9px] font-bold text-white flex items-center justify-center ring-2 ring-[#09090b]">
                    A
                  </div>
                  <div className={`w-5 h-5 rounded-full text-[9px] font-bold text-white flex items-center justify-center ring-2 ring-[#09090b] transition-all ${isTyping && typingUser === 'Person 1' ? 'bg-amber-500 scale-110 ring-amber-300' : 'bg-indigo-500'}`}>
                    P1
                  </div>
                  <div className={`w-5 h-5 rounded-full text-[9px] font-bold text-white flex items-center justify-center ring-2 ring-[#09090b] transition-all ${isTyping && typingUser === 'Person 2' ? 'bg-amber-500 scale-110 ring-amber-300' : 'bg-rose-500'}`}>
                    P2
                  </div>
                </div>
                <span className="text-[10px] text-zinc-500">3 online</span>
              </div>
            </div>

            {/* Split Pane: Sidebar (Left 2.5/12) and Code Editor (9.5/12) */}
            <div className="flex flex-1 min-h-[340px] items-stretch">
              
              {/* Workspace Sidebar */}
              <div className="w-[150px] bg-[#121214] border-r border-[#27272a] p-3 flex flex-col gap-1 select-none">
                <div className="text-[10px] font-bold tracking-wider text-zinc-500 uppercase mb-2 px-1">
                  Workspace
                </div>
                {fileList.map((file) => (
                  <div
                    key={file.name}
                    className={`flex items-center justify-between px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      file.active 
                        ? 'bg-[#27272a]/60 text-white' 
                        : 'text-zinc-400 hover:bg-[#27272a]/20 hover:text-zinc-300'
                    }`}
                  >
                    <span className="truncate">{file.name}</span>
                    {file.status === 'syncing' ? (
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" title="Syncing" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-emerald-500" title="Synced" />
                    )}
                  </div>
                ))}
              </div>

              {/* Editor Workspace */}
              <div className="flex-1 p-4 font-mono text-sm text-[#f4f4f5] overflow-y-auto leading-relaxed relative bg-[#09090b]">
                {/* Typing Overlay / Indicator */}
                {isTyping && (
                  <div className="absolute top-2 right-4 px-2 py-1 bg-amber-500/15 border border-amber-500/30 text-amber-400 rounded-md text-[10px] flex items-center gap-1.5 animate-pulse-soft">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                    <span>{typingUser} is typing...</span>
                  </div>
                )}

                <pre className="whitespace-pre-wrap">
                  {activeFileContent.split('\n').map((line, idx) => (
                    <div key={idx} className="flex hover:bg-[#18181b]/50 px-1 rounded-sm">
                      <span className="w-6 text-zinc-600 select-none text-right pr-2.5 text-xs pt-0.5">{idx + 1}</span>
                      <span className="flex-1">{line}</span>
                    </div>
                  ))}
                  {isTyping && (
                    <span className="inline-block w-1.5 h-4 bg-zinc-300 animate-pulse align-middle ml-0.5" />
                  )}
                </pre>
              </div>
            </div>

            {/* Console Log Panel */}
            <div className="bg-[#0b0c10] border-t border-[#27272a] p-3 flex flex-col h-[150px] font-mono text-[11px] text-zinc-400">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1f2028] text-zinc-500 text-[10px] font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                  FS Flow Status Console
                </span>
                
                {/* Status Indicator Pill */}
                {astStatus === 'passed' && (
                  <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full flex items-center gap-1 text-[9px]">
                    <CheckCircle className="w-2.5 h-2.5" /> AST SCAN PASSED
                  </span>
                )}
                {astStatus === 'failed' && (
                  <span className="px-2 py-0.5 bg-rose-950 text-rose-400 border border-rose-800 rounded-full flex items-center gap-1 text-[9px]">
                    <AlertTriangle className="w-2.5 h-2.5" /> AST SCAN FAILED
                  </span>
                )}
                {astStatus === 'running' && (
                  <span className="px-2 py-0.5 bg-indigo-950 text-indigo-400 border border-indigo-800 rounded-full flex items-center gap-1 text-[9px]">
                    <RefreshCw className="w-2.5 h-2.5 animate-spin" /> SCANNING...
                  </span>
                )}
                {astStatus === 'idle' && (
                  <span className="px-2 py-0.5 bg-[#18181b] text-zinc-500 border border-zinc-800 rounded-full text-[9px]">
                    READY
                  </span>
                )}
              </div>

              <div className="flex-1 overflow-y-auto space-y-1.5 pr-2">
                {consoleLogs.map((log, idx) => (
                  <div key={idx} className="leading-5">
                    {log.startsWith('💚') || log.includes('succeeded') || log.includes('ESTABLISHED') ? (
                      <span className="text-emerald-400">{log}</span>
                    ) : log.startsWith('🔴') || log.startsWith('⚠️') || log.includes('FAILED') ? (
                      <span className="text-rose-400">{log}</span>
                    ) : log.startsWith('[Git Push Sim]') || log.startsWith('🚀') ? (
                      <span className="text-indigo-300 font-semibold">{log}</span>
                    ) : (
                      <span>{log}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
