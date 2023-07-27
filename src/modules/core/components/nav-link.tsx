'use client'
import Link from 'next/link'
import { usePathname, useParams } from 'next/navigation'
import React from 'react'

type Props = {
  asAnchor?: boolean
  children: React.ReactNode
  link: string
}

export const NavLink: React.FC<Props> = ({ asAnchor = false, children, link }) => {
  const path = usePathname()
  const params = useParams()
  let verifyActive

  if (path === '/profile' || path.includes(params.id)) {
    verifyActive = path && link === '/profile'
  } else if (path === '/') {
    verifyActive = path === link
  }

  if (asAnchor) {
    return (
      <a
        href={link}
        className="flex w-full items-center justify-start gap-2 rounded-md px-4 py-2 font-semibold text-black hover:bg-gray-background active:bg-gray-background/90"
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={link}
      className={`flex w-full items-center justify-start gap-2 rounded-md  px-4 py-2 font-semibold hover:bg-gray-background ${
        verifyActive ? 'text-orange-500' : 'text-black'
      } `}
    >
      {children}
    </Link>
  )
}
