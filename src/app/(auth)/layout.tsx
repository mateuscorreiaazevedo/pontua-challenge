import images from '@/assets/images'
import Image from 'next/image'
import React from 'react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-blue-800 font-epilogue">
      <Image
        src={images.pontuaWhite}
        alt="Logo Pontua White"
        className="fixed left-28 top-12"
      />
      {children}
    </div>
  )
}
