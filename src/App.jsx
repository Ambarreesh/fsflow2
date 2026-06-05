import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import DashboardMockup from './components/DashboardMockup'
import InstallationGuide from './components/InstallationGuide'
import DocsSection from './components/DocsSection'
import FeunicSpaceAd from './components/FeunicSpaceAd'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 flex flex-col font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900">
      {/* Top Banner (optional, premium touch) */}
      <div className="bg-black text-white text-xs font-semibold py-2 px-4 text-center tracking-wide flex items-center justify-center gap-1.5 border-b border-zinc-800">
        <span>🎉 Continuous integration safety is live with pre-push AST Checks!</span>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Features list (resolves empty Nav link) */}
        <Features />

        {/* Sync Simulator / Dashboard Mockup */}
        <DashboardMockup />

        {/* Installation Step-by-Step */}
        <InstallationGuide />

        {/* In-depth Documentation & GUI Operations */}
        <DocsSection />

        {/* Feunic Space Cross-Promo Banner */}
        <FeunicSpaceAd />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
