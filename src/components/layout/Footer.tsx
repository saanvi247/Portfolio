import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-slate-950/40 backdrop-blur-md border-t border-slate-900 mt-20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          <div>
            <h3 className='font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 mb-4'>Saanvi | Portfolio</h3>
            <p className='text-slate-400 text-sm leading-relaxed max-w-xs'>
              A premium space showcasing research projects, academic publications, and user experience designs.
            </p>
          </div>
          <div>
            <h4 className='font-semibold text-slate-200 mb-4 text-sm'>Quick Links</h4>
            <ul className='space-y-2 text-sm text-slate-400'>
              <li><Link href='/' className='hover:text-sky-400 transition-smooth'>Home</Link></li>
              <li><Link href='/about' className='hover:text-sky-400 transition-smooth'>About</Link></li>
              <li><Link href='/projects' className='hover:text-sky-400 transition-smooth'>Projects</Link></li>
              <li><Link href='/research' className='hover:text-sky-400 transition-smooth'>Research</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold text-slate-200 mb-4 text-sm'>Connect</h4>
            <ul className='space-y-2 text-sm text-slate-400'>
              <li><Link href='/contact' className='hover:text-sky-400 transition-smooth'>Contact</Link></li>
              <li><a href='#' className='hover:text-sky-400 transition-smooth'>LinkedIn</a></li>
              <li><a href='#' className='hover:text-sky-400 transition-smooth'>Email</a></li>
            </ul>
          </div>
        </div>
        <div className='border-t border-slate-900 pt-8 text-center text-xs text-slate-600'>
          <p>&copy; {new Date().getFullYear()} Saanvi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
