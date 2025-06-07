'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-white via-gray-100 to-gray-300 px-6">
      <div className="text-center max-w-md p-8 rounded-xl shadow-lg bg-white/80 backdrop-blur-sm border border-gray-300">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Oops! The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back Home
        </Link>
      </div>
    </div>
  )
}
