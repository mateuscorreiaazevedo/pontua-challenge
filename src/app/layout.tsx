import { Epilogue, Inter } from 'next/font/google'
import '../assets/styles/globals.css'
import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
  fallback: ['sans serif']
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  fallback: ['sans serif']
})

export const metadata = {
  title: 'Pontua - Teste',
  description:
    'Aplicação para teste de processo seletivo, para desenvolvedor front-end pleno pela Pontua.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${epilogue.variable} min-h-screen w-full font-inter`}
      >
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  )
}
