import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">
              InterviewAI
            </h1>
          </div>
          <nav className="flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/signin" className="text-gray-700 hover:text-blue-600">Sign In</a>
            <a href="/signup" className="text-gray-700 hover:text-blue-600">Sign Up</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
