import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Saanvi | Portfolio',
  description: 'A professional and clean psychology & design research portfolio.',
  openGraph: {
    title: 'Saanvi | Portfolio',
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
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.variable} font-sans flex flex-col min-h-screen`}>
        <Header />
        <main className='flex-grow max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
