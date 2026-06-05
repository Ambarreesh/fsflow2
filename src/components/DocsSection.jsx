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
          <div className="bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
              <FileSpreadsheet className="w-5 h-5" />
            </div>

            <h3 className="font-display font-bold text-xl text-zinc-900 mb-3">3. Desktop GUI File Controls</h3>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
              Control workspace state natively through the application's graphical controls:
            </p>

            <ul className="space-y-4 text-sm text-zinc-600">
              <li className="flex gap-2">
                <span className="text-zinc-950 font-bold shrink-0">•</span>
                <div>
                  <strong className="text-zinc-900">Files & Directory:</strong> Create, rename, or delete files directly in the GUI. Deletions instantly sync to peer disks.
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-950 font-bold shrink-0">•</span>
                <div>
                  <strong className="text-zinc-900">Import & Export:</strong> Upload folders to seed workspaces. Download raw file states or export the full workspace as a ZIP file.
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-950 font-bold shrink-0">•</span>
                <div>
                  <strong className="text-zinc-900">Git Remote:</strong> Track remote repo connections and trigger pre-push AST validity checks from the dashboard.
                </div>
              </li>
            </ul>
          </div>

          {/* Troubleshooting Section */}
          <div className="bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
              <RefreshCw className="w-5 h-5" />
            </div>

            <h3 className="font-display font-bold text-xl text-zinc-900 mb-3">4. Troubleshooting & Connection Fixes</h3>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
              Resolve common connection or folder syncing errors easily:
            </p>

            <ul className="space-y-4 text-sm text-zinc-600">
              <li className="flex gap-2">
                <span className="text-rose-500 font-bold shrink-0">•</span>
                <div>
                  <strong className="text-zinc-900">Server Connection Issue:</strong> If the sync status shows offline, copy the Render Sync Server URL:
                  <div className="mt-1 flex items-center gap-1.5">
                    <code className="px-1.5 py-0.5 bg-zinc-100 text-zinc-800 rounded font-mono text-xs select-all break-all">
                      https://fs-flow-sync-server.onrender.com
                    </code>
                  </div>
                  <p className="text-xs text-zinc-500 mt-1.5">
                    Paste this into the app under <strong className="text-zinc-700">Profile Icon &rarr; Workspace &rarr; Sync Server Configuration</strong>, then click <strong className="text-zinc-700">Save</strong>.
                  </p>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-500 font-bold shrink-0">•</span>
                <div>
                  <strong className="text-zinc-900">Project Sync Errors:</strong> The continuous sync watcher is designed to watch a local folder.
                  <p className="text-xs text-zinc-500 mt-1.5">
                    You must copy and paste your coding project files/folders directly into the workspace folder created on your system (<code className="bg-zinc-100 px-1 py-0.5 rounded">~/FS-Workspace/&lt;workspaceId&gt;</code>) for the synchronization to work.
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
