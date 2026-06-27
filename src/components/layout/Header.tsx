import Link from 'next/link'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-900/80'>
      <nav className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
        <Link href='/' className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 hover:opacity-90 transition-smooth'>
          Saanvi
        </Link>
        <ul className='hidden md:flex gap-8 items-center text-sm font-medium'>
          <li><Link href='/' className='text-slate-300 hover:text-sky-400 transition-smooth'>Home</Link></li>
          <li><Link href='/about' className='text-slate-300 hover:text-sky-400 transition-smooth'>About</Link></li>
          <li><Link href='/projects' className='text-slate-300 hover:text-sky-400 transition-smooth'>Projects</Link></li>
          <li><Link href='/research' className='text-slate-300 hover:text-sky-400 transition-smooth'>Research</Link></li>
          <li><Link href='/blog' className='text-slate-300 hover:text-sky-400 transition-smooth'>Blog</Link></li>
          <li><Link href='/contact' className='text-slate-300 hover:text-sky-400 transition-smooth'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
