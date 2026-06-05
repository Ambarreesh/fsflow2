import React, { useState } from 'react'
import { Apple, Monitor, ChevronRight, Download, ShieldAlert, Folder, Terminal } from 'lucide-react'

export default function InstallationGuide() {
  const [activeTab, setActiveTab] = useState('mac') // mac or win

  return (
    <section id="install" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-950 tracking-tight mb-4">
            Installation Guide
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Get up and running with the FS Flow desktop application in less than a minute. Choose your operating system to see instructions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-zinc-100 border border-zinc-200/50 rounded-full">
            <button
              onClick={() => setActiveTab('mac')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'mac'
                  ? 'bg-white text-zinc-950 shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-950'
              }`}
            >
              <Apple className="w-4 h-4 fill-current" />
              macOS
            </button>
            <button
              onClick={() => setActiveTab('win')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'win'
                  ? 'bg-white text-zinc-950 shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-950'
              }`}
            >
              <Monitor className="w-4 h-4" />
              Windows
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-8 shadow-md">
          {activeTab === 'mac' ? (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex items-center gap-3 pb-4 border-b border-zinc-100">
                <div className="p-2.5 bg-zinc-100 rounded-xl">
                  <Apple className="w-6 h-6 text-zinc-900 fill-current" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-zinc-900">macOS Installation</h3>
                  <p className="text-xs text-zinc-500">Supports Apple Silicon and Intel Chips</p>
                </div>
              </div>

              {/* Step checklist */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-950 text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h4 className="font-semibold text-zinc-900 text-sm">Download the DMG</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Click the download button above or locate the file `FS Flow.dmg` from the build packages.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-950 text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h4 className="font-semibold text-zinc-900 text-sm">Drag to Applications</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Double-click the `.dmg` file to mount it, then drag the **FS Flow** app icon into your **Applications** folder.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-950 text-white flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h4 className="font-semibold text-zinc-900 text-sm">Launch the App</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Open your **Applications** folder and double-click **FS Flow** to open the authentication screen.
                  </p>
                </div>
              </div>

              {/* Security Warning Notice */}
              <div className="p-4 bg-amber-50/50 border border-amber-200/60 rounded-2xl flex gap-3 text-amber-800">
                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <strong className="font-semibold text-amber-900">Note for macOS Gatekeeper:</strong>
                  <p className="mt-1">
                    On newer macOS versions, you may see an "unsigned application" developer warning upon first launch. 
                    To resolve: Right-click (or Control-click) the FS Flow icon in **Applications**, select <strong className="font-semibold">Open</strong>, and click <strong className="font-semibold">Open Anyway</strong> from the popup dialog.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex items-center gap-3 pb-4 border-b border-zinc-100">
                <div className="p-2.5 bg-zinc-100 rounded-xl">
                  <Monitor className="w-6 h-6 text-zinc-900" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-zinc-900">Windows Installation</h3>
                  <p className="text-xs text-zinc-500">Supports Windows 10 and 11 (x64/ARM64)</p>
                </div>
              </div>

              {/* Step checklist */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-950 text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h4 className="font-semibold text-zinc-900 text-sm">Download the Setup</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Download `FS Flow Setup.exe` from the primary link or click the Windows icon above.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-950 text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h4 className="font-semibold text-zinc-900 text-sm">Run the Installer</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Double-click `FS Flow Setup.exe` and follow the prompt options to configure files.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-950 text-white flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h4 className="font-semibold text-zinc-900 text-sm">Desktop Shortcut</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    The installation automatically creates a shortcut on your desktop. Double-click the shortcut to run.
                  </p>
                </div>
              </div>

              {/* Windows Defender SmartScreen notice */}
              <div className="p-4 bg-indigo-50/40 border border-indigo-200/50 rounded-2xl flex gap-3 text-indigo-900">
                <ShieldAlert className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <strong className="font-semibold text-indigo-950">Defender SmartScreen:</strong>
                  <p className="mt-1">
                    If Windows Defender SmartScreen warns about an unrecognized app, click <strong className="font-semibold">More Info</strong> and then click <strong className="font-semibold">Run anyway</strong> to permit execution.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
