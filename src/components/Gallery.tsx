'use client'

import Image from 'next/image'

export default function Gallery() {
  // 사진 목록 - 사용자가 public/images/ 폴더에 추가
  const photos = [
    { src: '/images/photo1.jpg', alt: '사진 1', rotate: '-3deg' },
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
                  onError={(e) => {
                    // 이미지가 없을 경우 placeholder 표시
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                {/* Placeholder if no image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 mx-auto mb-2 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p>사진 {index + 1}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note for user */}
        <p
          className="text-center text-gray-500 text-sm mt-10"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          ※ public/images/ 폴더에 photo1.jpg, photo2.jpg, photo3.jpg 파일을 추가해주세요
        </p>
      </div>
    </section>
  )
}
