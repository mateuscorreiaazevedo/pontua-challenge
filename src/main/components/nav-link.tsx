'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
  asAnchor?: boolean
  children: React.ReactNode
  link: string
}

export const NavLink: React.FC<Props> = ({ asAnchor = false, children, link }) => {
  const path = usePathname()

  if (asAnchor) {
    return (
      <a
        href={link}
        className="flex w-full items-center justify-start gap-2 rounded-md px-4 py-2 font-epilogue font-semibold text-black hover:bg-gray-background/20 active:bg-gray-background"
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={link}
      className={`flex w-full items-center justify-start gap-2 rounded-md  px-4 py-2 font-epilogue font-semibold text-black ${
        path === link ? 'bg-gray-background' : 'hover:bg-gray-background/20'
      }`}
    >
      {children}
    </Link>
  )
}
