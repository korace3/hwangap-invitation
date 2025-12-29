'use client'

export default function Calendar() {
  // 2026년 1월 달력 데이터
  // 2026년 1월 1일은 목요일
  const days = ['일', '월', '화', '수', '목', '금', '토']

  // 1월 달력: 1일이 목요일(인덱스 4)부터 시작, 31일까지
  const calendarDays = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],  // 17일이 행사일
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ]

  const eventDay = 17

  return (
    <section className="py-20 px-4">
      <div className="max-w-md mx-auto">
        {/* Title */}
        <div className="text-center mb-8" data-aos="fade-up">
          <p className="text-gold-600 font-display italic text-xl mb-2">January</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            2026년 1월
          </h2>
        </div>

        {/* Calendar */}
        <div
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Days header */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {days.map((day, index) => (
              <div
                key={day}
                className={`text-center text-sm font-medium py-2 ${
                  index === 0 ? 'text-red-400' :
                  index === 6 ? 'text-blue-400' :
                  'text-gray-500'
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="space-y-2">
            {calendarDays.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7 gap-2">
                {week.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`
                      aspect-square flex items-center justify-center text-sm md:text-base
                      rounded-full transition-all duration-300
                      ${day === null ? '' : 'cursor-default'}
                      ${day === eventDay
                        ? 'bg-sky-400 text-white font-bold shadow-lg scale-110 ring-4 ring-sky-200'
                        : dayIndex === 0
                          ? 'text-red-400'
                          : dayIndex === 6
                            ? 'text-blue-400'
                            : 'text-gray-700'
                      }
                    `}
                  >
                    {day}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Event info */}
          <div className="mt-8 text-center border-t pt-6">
            <div className="inline-flex items-center gap-3 bg-sky-50 px-6 py-3 rounded-full">
              <span className="w-3 h-3 bg-sky-400 rounded-full animate-pulse"></span>
              <span className="text-gray-700 font-medium">
                1월 17일 (토) 오후 6시
              </span>
            </div>
          </div>
        </div>

        {/* D-day counter placeholder */}
        <div
          className="mt-8 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-gray-500 text-sm">
            소중한 그날까지
          </p>
        </div>
      </div>
    </section>
  )
}
