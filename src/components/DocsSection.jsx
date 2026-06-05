import React from 'react'
import { Key, FolderGit, Eye, FileSpreadsheet, HardDrive, RefreshCw } from 'lucide-react'

export default function DocsSection() {
  return (
    <section id="docs" className="py-20 px-4 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-950 tracking-tight mb-4">
            Operations & Documentation
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Discover the operational details of FS Flow. Zero configuration, absolute simplicity.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Workspace Operations */}
          <div className="bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
              <Key className="w-5 h-5" />
            </div>
            
            <h3 className="font-display font-bold text-xl text-zinc-900 mb-3">1. Workspace & Credentials</h3>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
              FS Flow supports secure team collaboration using workspace isolation:
            </p>
            
            <ul className="space-y-4 text-sm text-zinc-600">
              <li className="flex gap-2">
                <span className="text-zinc-950 font-bold shrink-0">•</span>
                <div>
                  <strong className="text-zinc-900">Authentication:</strong> Login with Google or credentials upon first launching the desktop application.
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-950 font-bold shrink-0">•</span>
                <div>
                  <strong className="text-zinc-900">Creation (Lead):</strong> Click "Create Workspace". Enter a name and set a password. The system generates a unique, alphanumeric ID (e.g. <code className="px-1.5 py-0.5 bg-zinc-100 text-zinc-800 rounded font-mono text-xs">FS-SOXJ1T</code>).
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-950 font-bold shrink-0">•</span>
                <div>
                  <strong className="text-zinc-900">Joining (Teammates):</strong> Input the shared Workspace ID and Workspace Password under the "Enter Workspace" tab to synchronize immediately.
                </div>
              </li>
            </ul>
          </div>

          {/* Sync Folders */}
          <div className="bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
              <HardDrive className="w-5 h-5" />
            </div>

            <h3 className="font-display font-bold text-xl text-zinc-900 mb-3">2. Mapping Sync Folders</h3>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
              Once inside a workspace, the background syncer maps files locally. No Node.js installs required:
            </p>

            <div className="space-y-4">
              <div>
                <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">macOS Directory</span>
                <pre className="mt-1 p-3 bg-zinc-950 text-[#f4f4f5] rounded-xl font-mono text-xs overflow-x-auto border border-zinc-800">
                  ~/FS-Workspace/&lt;workspaceId&gt;
                </pre>
              </div>

              <div>
                <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Windows Directory</span>
                <pre className="mt-1 p-3 bg-zinc-950 text-[#f4f4f5] rounded-xl font-mono text-xs overflow-x-auto border border-zinc-800">
                  C:\Users\&lt;username&gt;\FS-Workspace\&lt;workspaceId&gt;
                </pre>
              </div>

              <p className="text-xs text-zinc-500">
                <strong className="text-zinc-800">Usage:</strong> Open this folder in your IDE of choice (VS Code, Cursor, IntelliJ, Vim). The app automatically pushes changes and applies peer edits silently.
              </p>
            </div>
          </div>

          {/* GUI File Actions */}
          <div className="bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow md:col-span-2">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
              <FileSpreadsheet className="w-5 h-5" />
            </div>

            <h3 className="font-display font-bold text-xl text-zinc-900 mb-3">3. Desktop GUI File Controls</h3>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
              Control workspace state natively through the application's graphical controls:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-zinc-600">
              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                <h4 className="font-semibold text-zinc-900 mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Files & Directory Ops
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                  Create, rename, or delete files directly in the GUI. Deletions instantly synchronize to peer disks.
                </p>
              </div>

              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                <h4 className="font-semibold text-zinc-900 mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Import & Download
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                  Upload complete folders to seed workspaces. Download raw file states directly inside the active toolbar.
                </p>
              </div>

              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                <h4 className="font-semibold text-zinc-900 mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Git Remote Scanner
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                  Add remote repo connections to trigger pre-push AST checks and run simulated git workflows directly from the GUI.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
