import images from '@/assets/images'
import { NavLink } from '@/main/components'
import { Separator } from '@/main/ui/separator'
import { CornerUpLeft, LayoutDashboard, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen w-full bg-white ">
      <aside className="flex h-screen w-64 flex-col border-r border-divider shadow">
        <div className="flex h-[60px] w-full items-center justify-start border-b border-divider px-6">
          <Link href="/">
            <Image
              src={images.pontuaLogo}
              alt="Pontua Logo"
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
      <article className="flex-1">{children}</article>
    </main>
  )
}
