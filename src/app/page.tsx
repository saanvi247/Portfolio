import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function Home() {
  return (
    <section className='space-y-24 py-12'>
      {/* Hero Section */}
      <section id='home' className='pt-12 pb-6'>
        <div className='max-w-4xl mx-auto text-center space-y-6'>
          <p className='text-xs font-semibold uppercase tracking-[0.35em] text-sky-400'>
            Professional Portfolio
          </p>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight'>
            Designing polished digital experiences with{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400'>
              clarity and purpose.
            </span>
          </h1>
          <p className='text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed'>
            I build strategic portfolio experiences that feel confident, readable, and refined. My work combines research, storytelling, and clean execution to support strong professional impressions.
          </p>
          <div className='pt-6 flex flex-col sm:flex-row justify-center gap-4'>
            <Link href='/projects'>
              <Button variant='primary' size='lg' className='w-full sm:w-auto'>
                View work
              </Button>
            </Link>
            <Link href='/contact'>
              <Button variant='secondary' size='lg' className='w-full sm:w-auto'>
                Contact me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1.3fr_0.7fr] pt-8'>
        <div className='space-y-6 flex flex-col justify-center'>
          <h2 className='text-3xl font-bold text-white'>About Me</h2>
          <p className='text-slate-300 leading-relaxed'>
            I am a psychology researcher and designer with a focus on creating clean, professional portfolio experiences. My work is grounded in human-centred thinking and clear visual communication.
          </p>
          <p className='text-slate-300 leading-relaxed'>
            I enjoy translating complex ideas into approachable presentations that reinforce trust and credibility.
          </p>
          <div>
            <Link href='/about'>
              <Button variant='ghost' size='sm' className='text-sky-400 hover:text-sky-300 pl-0'>
                Read full bio →
              </Button>
            </Link>
          </div>
        </div>
        <Card className='space-y-6'>
          <h3 className='text-xl font-bold text-white mb-2'>Overview</h3>
          <div className='space-y-4'>
            <div>
              <p className='text-xs uppercase tracking-[0.25em] text-sky-400 font-semibold'>Location</p>
              <p className='mt-1 text-sm text-slate-200'>Eindhoven, Netherlands</p>
            </div>
            <div>
              <p className='text-xs uppercase tracking-[0.25em] text-sky-400 font-semibold'>Role</p>
              <p className='mt-1 text-sm text-slate-200'>Design Researcher & Portfolio Specialist</p>
            </div>
            <div>
              <p className='text-xs uppercase tracking-[0.25em] text-sky-400 font-semibold'>Focus</p>
              <p className='mt-1 text-sm text-slate-200'>Research, UX design, digital storytelling</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Experience Section */}
      <section id='experience' className='max-w-6xl mx-auto space-y-8 pt-8'>
        <div className='flex flex-col gap-2 md:flex-row md:items-end md:justify-between'>
          <div>
            <h2 className='text-3xl font-bold text-white'>Experience</h2>
            <p className='text-slate-400 text-sm max-w-xl'>A selection of recent roles and professional milestones.</p>
          </div>
        </div>
        <div className='grid gap-6 lg:grid-cols-2'>
          {[
            {
              title: 'Design Engineer',
              company: '35®',
              description: 'Led design systems and product thinking for user-focused interfaces.',
            },
            {
              title: 'Master of Industrial Design',
              company: 'Eindhoven University of Technology',
              description: 'Developed research-led design solutions for digital and physical experiences.',
            },
          ].map((item) => (
            <Card key={item.title} variant='hoverable' className='flex flex-col justify-between'>
              <div>
                <p className='text-xs uppercase tracking-[0.25em] text-sky-400 font-semibold'>{item.company}</p>
                <h3 className='mt-3 text-xl font-bold text-white'>{item.title}</h3>
                <p className='mt-2.5 text-sm text-slate-300 leading-relaxed'>{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='max-w-6xl mx-auto space-y-8 pt-8'>
        <div>
          <h2 className='text-3xl font-bold text-white'>Skills</h2>
          <p className='text-slate-400 text-sm max-w-xl'>Tools and disciplines I use to create thoughtful work.</p>
        </div>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {[
            { label: 'Frontend', value: 'Vue, Astro, JavaScript, HTML, CSS' },
            { label: 'Backend', value: 'Python, Django, PostgreSQL, TypeScript' },
            { label: 'Research', value: 'User testing, qualitative insights, prototyping' },
          ].map((item) => (
            <Card key={item.label} variant='hoverable'>
              <p className='text-xs uppercase tracking-[0.25em] text-sky-400 font-semibold'>{item.label}</p>
              <p className='mt-3 text-sm text-slate-200 leading-relaxed'>{item.value}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id='contact' className='max-w-6xl mx-auto pt-8'>
        <Card className='bg-slate-900/40 border-slate-800/80 p-8 sm:p-12 relative overflow-hidden'>
          <div className='absolute -right-16 -top-16 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl'></div>
          <div className='absolute -left-16 -bottom-16 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl'></div>
          
          <div className='relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
            <div className='space-y-2'>
              <p className='text-xs uppercase tracking-[0.25em] text-sky-400 font-semibold'>Contact</p>
              <h2 className='text-2xl sm:text-3xl font-bold text-white'>Let’s build something professional together.</h2>
            </div>
            <Link href='/contact' className='shrink-0'>
              <Button variant='primary' size='lg'>
                Get in touch
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </section>
  )
}
