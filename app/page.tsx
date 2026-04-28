'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [classId, setClassId] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!classId.trim()) {
      setError('수업 ID를 입력해주세요')
      return
    }
    setError('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            📺 미디어 비평과 대안적 메시지 창작
          </h1>
          <p className="text-xl text-gray-600">
            학생과 교사가 함께하는 교육용 웹서비스
          </p>
        </div>

        {/* 수업 ID 입력 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit}>
            <label className="block text-lg font-semibold text-gray-700 mb-4">
              🏫 수업 ID 또는 수업명
            </label>
            <input
              type="text"
              value={classId}
              onChange={(e) => setClassId(e.target.value)}
              placeholder="예) 2026-1학기-국어-1반"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
            />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              수업 입장
            </button>
          </form>
        </div>

        {/* 세 가지 활동 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* 1. 미디어 비평 연습 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-4">✏️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              미디어 비평 연습
            </h2>
            <p className="text-gray-600 mb-6">
              영상 또는 사진 자료를 첨부하고 비평문을 작성하세요.
            </p>
            <div className="space-y-3">
              <Link
                href="/critique-practice/write"
                className="block text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                비평 작성하기
              </Link>
              <Link
                href="/critique-practice/my-critiques"
                className="block text-center bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                내 비평 보기
              </Link>
              <Link
                href="/critique-practice/shuffle"
                className="block text-center bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                다른 학생 비평 보기
              </Link>
            </div>
          </div>

          {/* 2. 모둠 비평 실전 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-4">🌳</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              모둠 비평 실전
            </h2>
            <p className="text-gray-600 mb-6">
              대주제와 가지 구조로 모둠 비평을 시각화하세요.
            </p>
            <div className="space-y-3">
              <Link
                href="/group-critique/write"
                className="block text-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
              >
                모둠 주제 작성
              </Link>
              <Link
                href="/group-critique/view-all"
                className="block text-center bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                전체 구조 보기
              </Link>
            </div>
          </div>

          {/* 3. 팟캐스트 진행 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-4">🎙️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              팟캐스트 진행
            </h2>
            <p className="text-gray-600 mb-6">
              팟캐스트 대본을 공유하고 청중과 상호작용하세요.
            </p>
            <div className="space-y-3">
              <Link
                href="/podcast/create"
                className="block text-center bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
              >
                게시물 작성
              </Link>
              <Link
                href="/podcast/list"
                className="block text-center bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                게시물 목록
              </Link>
            </div>
          </div>
        </div>

        {/* 안내 문구 */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <p className="text-gray-700">
            <strong>💡 팁:</strong> 각 활동을 시작하기 전에 위에서 수업 ID를 입력하세요.
            같은 수업 내에서만 데이터가 공유됩니다.
          </p>
        </div>
      </div>
    </div>
  )
}
