import { Roboto_Flex as Roboto } from 'next/font/google'
import '../assets/styles/globals.css'
import { ReactNode } from 'react'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  fallback: ['sans serif']
})

export const metadata = {
  title: '@mateuscorreiaazevedo',
  description: 'My boilerplate using Next.js 13. Powered by Mateus Azevedo'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} min-h-screen w-full font-roboto`}>
        {children}
      </body>
    </html>
  )
}
