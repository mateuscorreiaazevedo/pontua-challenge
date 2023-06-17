import { Roboto_Flex as Roboto } from 'next/font/google'
import '../assets/styles/globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: '@mateuscorreiaazevedo',
  description: 'My boilerplate using Next.js 13. Powered by Mateus Azevedo'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${roboto.variable} min-h-screen w-full`}>{children}</body>
    </html>
  )
}
