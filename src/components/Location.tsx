'use client'

export default function Location() {
  const venueInfo = {
    name: '베스타뷔페',
    address: '대전 서구 만년로 70',
    tel: '0507-1386-3366',
  }

  // 네이버 지도 링크
  const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(venueInfo.address)}`
  // 카카오맵 링크
  const kakaoMapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(venueInfo.name + ' ' + venueInfo.address)}`
  // 티맵 링크
  const tmapUrl = `https://apis.openapi.sk.com/tmap/app/routes?appKey=&name=${encodeURIComponent(venueInfo.name)}&lon=&lat=`

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            오시는 길
          </h2>
        </div>

        {/* Venue Info Card */}
        <div
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Map Embed */}
          <div className="relative w-full h-64 bg-gray-100">
            <iframe
              src={`https://map.naver.com/v5/search/${encodeURIComponent(venueInfo.address)}?c=15,0,0,0,dh`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="베스타뷔페 위치"
            />
          </div>

          {/* Venue Details */}
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {venueInfo.name}
            </h3>

            <div className="space-y-3 text-gray-600">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{venueInfo.address}</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-sky-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${venueInfo.tel}`}
                  className="hover:text-sky-600 transition-colors"
                >
                  {venueInfo.tel}
                </a>
              </div>

              {/* Date & Time */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-sky-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>2026년 1월 17일 (토) 오후 6시</span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <a
                href={naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                </svg>
                네이버지도
              </a>
              <a
                href={kakaoMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-yellow-400 text-gray-900 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.47 1.607 4.647 4.03 5.938-.134.493-.867 3.172-.9 3.402 0 0-.018.168.089.233.107.066.233.015.233.015.307-.043 3.559-2.313 4.12-2.716.469.07.953.128 1.428.128 5.523 0 10-3.477 10-7.5S17.523 3 12 3z" />
                </svg>
                카카오맵
              </a>
            </div>

            {/* Copy Address Button */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(venueInfo.address)
                alert('주소가 복사되었습니다.')
              }}
              className="w-full mt-3 py-3 px-4 border-2 border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              주소 복사하기
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div
          className="mt-8 bg-sky-50 rounded-xl p-6 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-gray-700">
            <span className="font-medium">주차 안내</span>
          </p>
          <p className="text-gray-600 text-sm mt-2">
            베스타뷔페 전용 주차장 이용 가능
          </p>
        </div>
      </div>
    </section>
  )
}
