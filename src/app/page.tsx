'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Hero from '@/components/Hero'
import Greeting from '@/components/Greeting'
import Calendar from '@/components/Calendar'
import Gallery from '@/components/Gallery'
import Location from '@/components/Location'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Greeting Section */}
      <Greeting />

      {/* Calendar Section */}
      <Calendar />

      {/* Gallery Section */}
      <Gallery />

      {/* Location Section */}
      <Location />

      {/* Footer */}
      <footer className="py-10 text-center bg-white/50">
        <div className="section-divider mb-8" />
        <p className="text-gray-500 text-sm">
          정만호 · 송선영
        </p>
        <p className="text-gray-400 text-xs mt-2">
          60번째 생일 잔치에 초대합니다
        </p>
        <p className="text-gray-300 text-xs mt-4">
          2026. 01. 17
        </p>
      </footer>
    </main>
  )
}
