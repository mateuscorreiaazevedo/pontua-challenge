import {
  CornerUpLeft,
  Github,
  Instagram,
  LayoutDashboard,
  Linkedin,
  User
} from 'lucide-react'
import { Separator, NavLink, SearchBar } from '@/modules/core'
import images from '@/assets/images'
import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen w-full bg-white ">
      <aside className="flex h-screen w-64 flex-col border-r border-divider shadow">
        <div className="flex h-[60px] w-full items-center justify-start border-b border-divider px-6">
          <Link href="/">
            <Image
              src={images.pontuaLogo}
              alt="Logo da Pontua"
              className="aspect-video w-28"
            />
          </Link>
        </div>
        <nav className="flex w-full flex-col items-start gap-4 px-6 py-4">
          <NavLink link="/">
            <LayoutDashboard /> Home
          </NavLink>
          <NavLink link="/profile">
            <User /> Perfil
          </NavLink>
        </nav>
        <Separator className="mb-2 w-full" />
        <NavLink link="/api/logout" asAnchor>
          <CornerUpLeft /> Sair
        </NavLink>
        <Separator className="mt-2 w-full" />
        <ul className="flex h-full w-full flex-1 flex-col items-start justify-end px-6 py-4">
          <NavLink
            asBlank
            link="https://linkedin.com/in/mateuscorreiaazevedo"
            asAnchor
          >
            <Linkedin /> Linkedin
          </NavLink>
          <NavLink asBlank link="https://github.com/mateuscorreiaazevedo" asAnchor>
            <Github /> Github
          </NavLink>
          <NavLink asBlank link="https://instagram.com/mateuscorreiaazevedo" asAnchor>
            <Instagram /> Instagram
          </NavLink>
        </ul>
        <footer className="px-6 py-4 text-center text-sm font-semibold">
          <a href="https://mateusdev.com.br" target="_blank" rel="noreferrer">
            mateusdev &copy; - 2023
          </a>
        </footer>
      </aside>
      <article className="flex-1">
        <header className="sticky top-0 flex h-[60px] w-full items-center justify-center border-b border-divider px-6 shadow-sm">
          <SearchBar />
        </header>
        <section className="mt-4 px-2">{children}</section>
      </article>
    </main>
  )
}
