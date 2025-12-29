'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center">
      {/* Decorative element */}
      <div className="flex gap-2 mb-8" data-aos="fade-down" data-aos-delay="200">
        <span className="text-gold-500 text-3xl">✦</span>
      </div>

      {/* Main Title */}
      <div data-aos="fade-up">
        <p className="text-gold-600 text-lg md:text-xl tracking-widest mb-4">
          INVITATION
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          인생의 아름다운
        </h1>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-gray-800 mt-2">
          <span className="text-gold-gradient">60년</span>을 함께
        </h1>
      </div>

      {/* Subtitle */}
      <div className="mt-8 mb-6" data-aos="fade-up" data-aos-delay="200">
        <p className="text-xl md:text-2xl text-gray-600 font-light">
          환갑을 맞이하여
        </p>
        <p className="text-xl md:text-2xl text-gray-600 font-light mt-1">
          소중한 분들을 초대합니다
        </p>
      </div>

      {/* Decorative line */}
      <div className="w-16 h-px bg-gold-400 my-6" data-aos="scale-x" data-aos-delay="300" />

      {/* Names */}
      <div className="mb-8" data-aos="fade-up" data-aos-delay="400">
        <p className="text-2xl md:text-3xl text-gray-800 font-semibold">
          정만호 · 송선영
        </p>
      </div>

      {/* Date and Time */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg" data-aos="fade-up" data-aos-delay="500">
        <p className="text-2xl md:text-3xl text-gray-800 font-medium">
          2026. 01. 17
        </p>
        <p className="text-lg md:text-xl text-gray-600 mt-2">
          토요일 오후 6시
        </p>
        <p className="text-base text-gray-500 mt-3">
          대전 베스타 뷔페
        </p>
      </div>

      {/* Stars decoration */}
      <div className="flex gap-3 mt-10" data-aos="zoom-in" data-aos-delay="600">
        <span className="text-yellow-400 text-lg">✦</span>
        <span className="text-gold-500 text-xl">✦</span>
        <span className="text-yellow-400 text-lg">✦</span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce" data-aos="fade-up" data-aos-delay="1000">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
