'use client'
import React, { useEffect, useState } from 'react'
import { IoMdArrowUp } from "react-icons/io";
function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])
  return (
    <div>
      <div
        className={`${visible ? 'right-6' : '-right-12'
          } fixed bottom-16  z-30 flex h-[44px] w-[44px] cursor-pointer justify-center overflow-hidden rounded-full bg-[#F5F5F5] text-center text-3xl text-white duration-300`}
        onClick={scrollToTop}
      >
        <IoMdArrowUp className='mb-1 animate-bounce self-end text-black' />
      </div>
    </div>
  )
}

export default ScrollToTop
