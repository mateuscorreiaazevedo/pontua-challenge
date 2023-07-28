import { CornerUpLeft, LayoutDashboard, User } from 'lucide-react'
import { Separator } from '@/modules/core/components/ui/separator'
import { NavLink, SearchBar } from '@/modules/core'
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
          <Separator className="w-full" />
          <NavLink link="/api/logout" asAnchor>
            <CornerUpLeft /> Sair
          </NavLink>
        </nav>
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
