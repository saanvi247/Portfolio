import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'Saanvi Singh | Portfolio',
  description: 'Psychology student and Political Psychology researcher.',
  openGraph: {
    title: 'Saanvi Singh | Portfolio',
    description: 'Explore research, projects, and professional insights.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth dark'>
      <body className={`${inter.variable} ${cormorant.variable} bg-background text-primaryText min-h-screen flex flex-col font-sans selection:bg-accent-blue/30 selection:text-white`}>
        <Header />
        <main className='flex-grow w-full relative z-10'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
