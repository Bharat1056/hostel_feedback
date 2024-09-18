'use client'

import { useState } from 'react'

interface RatingFieldProps {
  onChange?: (rating: number) => void
}

export default function Rating({ onChange }: RatingFieldProps = {}) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleRating = (value: number) => {
    setRating(value)
    if (onChange) {
      onChange(value)
    }                    
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-1  ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
          <button
            key={star}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-800 rounded-full p-1 w-fit transition-transform duration-200 ease-in-out hover:scale-110"
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            aria-label={`Rate ${star} stars out of 5`}
          >
            <svg
              className="w-5 h-5 md:w-8 md:h-8 transition-all duration-300 ease-in-out"
              viewBox="0 0 24 24"
              fill={star <= (hover || rating) ? '#8B5CF6' : 'none'}
              stroke={star <= (hover || rating) ? '#8B5CF6' : '#D1D5DB'}
              strokeWidth="2"
            >cr
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </button>
        ))}
      </div>
      <p 
        className="text-sm font-medium text-purple-700 bg-purple-100 px-3 py-1 rounded-full transition-all duration-300 ease-in-out"
        style={{ opacity: rating ? 1 : 0, transform: `scale(${rating ? 1 : 0.9})` }}
        aria-live="polite"
      >
        {rating ? `You've selected ${rating} star${rating !== 1 ? 's' : ''}` : 'Select a rating'}
      </p>
    </div>
  )
}