'use client'

import Image from 'next/image'

export default function Gallery() {
  const photos = [
    { src: '/images/photo1.png', alt: '사진 1', rotate: '-3deg' },
    { src: '/images/photo2.jpg', alt: '사진 2', rotate: '2deg' },
    { src: '/images/photo3.jpg', alt: '사진 3', rotate: '-1deg' },
  ]

  return (
    <section className="py-20 px-4 bg-white/30">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            갤러리
          </h2>
          <p className="text-gray-600">소중한 순간들</p>
        </div>

        {/* Polaroid Gallery */}
        <div
          className="flex flex-wrap justify-center gap-6 md:gap-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              className="polaroid bg-white p-3 pb-12 shadow-xl"
              style={{ transform: `rotate(${photo.rotate})` }}
              data-aos="zoom-in"
              data-aos-delay={300 + index * 100}
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 overflow-hidden bg-gray-100">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
