'use client'

export default function Greeting() {
  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="max-w-2xl mx-auto text-center">
        {/* Decorative line */}
        <div className="section-divider mb-12" data-aos="fade-up" />

        {/* Title */}
        <h2
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8"
          data-aos="fade-up"
        >
          소중한 분들을 초대합니다
        </h2>

        {/* Greeting message */}
        <div
          className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>
            세월의 흐름 속에서<br />
            60년이라는 뜻깊은 시간을 맞이하게 되었습니다.
          </p>
          <p>
            그동안 저희에게 베풀어주신<br />
            사랑과 관심에 깊이 감사드리며,
          </p>
          <p>
            이 기쁜 날을 함께 나누고자<br />
            소중한 분들을 초대합니다.
          </p>
          <p className="pt-4">
            바쁘시더라도 부디 오셔서<br />
            자리를 빛내주시면 큰 기쁨이겠습니다.
          </p>
        </div>

        {/* Names */}
        <div
          className="mt-12 flex justify-center items-center gap-8 text-lg md:text-xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="text-center">
            <p className="text-gold-600 font-semibold">정만호</p>
          </div>
          <div className="text-gray-400">·</div>
          <div className="text-center">
            <p className="text-gold-600 font-semibold">송선영</p>
          </div>
        </div>

        {/* Decorative line */}
        <div className="section-divider mt-12" data-aos="fade-up" data-aos-delay="500" />
      </div>
    </section>
  )
}
