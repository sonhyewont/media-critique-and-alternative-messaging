import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '미디어 비평과 대안적 메시지 창작',
  description: '학생과 교사를 위한 교육용 웹서비스',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-gray-50">
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-2xl font-bold text-gray-900">
              📺 미디어 비평 플랫폼
            </h1>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
