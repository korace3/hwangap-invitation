import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '정만호 & 송선영 환갑 잔치에 초대합니다',
  description: '2026년 1월 17일 오후 6시, 베스타뷔페에서 열리는 환갑 잔치에 초대합니다.',
  openGraph: {
    title: '정만호 & 송선영 환갑 잔치 초대장',
    description: '60번째 생일을 함께 축하해주세요',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
