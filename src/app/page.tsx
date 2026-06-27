import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import TextReveal from '@/components/common/TextReveal'

import NeuralNetwork from '@/components/canvas/NeuralNetwork'
import BrainParticle from '@/components/canvas/BrainParticle'
import InteractiveGlobe from '@/components/canvas/InteractiveGlobe'

export default function Home() {
  return (
    <section className='space-y-24 py-12 relative'>
      {/* Dynamic Background */}
      <NeuralNetwork />

      {/* Hero Section */}
      <section id='home' className='pt-12 pb-6 relative z-10'>
        <div className='max-w-4xl mx-auto text-center space-y-6'>
          <p className='text-xs font-semibold uppercase tracking-[0.35em] text-sky-400'>
            Shubhaang Kataruka
          </p>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight'>
            <TextReveal text='AI Engineer & ' />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400'>
              <TextReveal text='Data Systems Builder.' delay={0.5} />
            </span>
          </h1>
          <p className='text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed'>
            I am a CS & AI student passionate about architecting intelligent systems, robust data pipelines, and full-stack applications that solve complex problems.
          </p>
          <div className='pt-6 flex flex-col sm:flex-row justify-center gap-4'>
            <Link href='/projects'>
              <Button variant='primary' size='lg' className='w-full sm:w-auto'>
                View Projects
              </Button>
            </Link>
            <Link href='/contact'>
              <Button variant='secondary' size='lg' className='w-full sm:w-auto'>
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 pt-8'>
        <div className='space-y-6 flex flex-col justify-center'>
          <h2 className='text-3xl font-bold text-white'>About Me</h2>
          <p className='text-slate-300 leading-relaxed'>
            I blend computer science fundamentals with advanced artificial intelligence techniques. My expertise lies in building end-to-end data systems, developing scalable backend architectures, and training machine learning models for real-world impact.
          </p>
          <p className='text-slate-300 leading-relaxed'>
            Whether it's designing a RAG system for intelligent document retrieval or building full-stack dashboards to visualize millions of data points, I thrive at the intersection of data and software engineering.
          </p>
          <div>
            <Link href='/about'>
              <Button variant='ghost' size='sm' className='text-sky-400 hover:text-sky-300 pl-0'>
                Read full bio →
              </Button>
            </Link>
          </div>
        </div>
        <div className='rounded-2xl overflow-hidden relative z-10'>
          <BrainParticle />
        </div>
      </section>

      {/* Experience & Projects Section */}
      <section id='experience' className='max-w-6xl mx-auto space-y-8 pt-8 relative z-10'>
        <div className='flex flex-col gap-2 md:flex-row md:items-end md:justify-between'>
          <div>
            <h2 className='text-3xl font-bold text-white'>Featured Work</h2>
            <p className='text-slate-400 text-sm max-w-xl'>A selection of impactful projects and engineering milestones.</p>
          </div>
        </div>
        
        <div className='rounded-2xl overflow-hidden mb-8'>
           <InteractiveGlobe />
        </div>

        <div className='grid gap-6 lg:grid-cols-2'>
          {[
            {
              title: 'Rashtram AI',
              company: 'AI Engineering',
              description: 'Developed scalable AI infrastructure and advanced NLP solutions to drive intelligent conversational interfaces.',
            },
            {
              title: 'Zomato Data Analysis',
              company: 'Data Science',
              description: 'Engineered robust data pipelines and interactive dashboards to analyze extensive datasets and uncover actionable business insights.',
            },
            {
              title: 'Task Management & Billing System',
              company: 'Full Stack Development',
              description: 'Architected a comprehensive end-to-end system for employee task tracking and automated billing processes.',
            },
            {
              title: 'AI Adoption Project',
              company: 'Research & Strategy',
              description: 'Researched and implemented strategic pathways for integrating cutting-edge AI technologies into existing business workflows.',
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
      <section id='skills' className='max-w-6xl mx-auto space-y-8 pt-8 relative z-10'>
        <div>
          <h2 className='text-3xl font-bold text-white'>Technical Expertise</h2>
          <p className='text-slate-400 text-sm max-w-xl'>Technologies, languages, and frameworks I use to build robust systems.</p>
        </div>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {[
            { label: 'AI & Machine Learning', value: 'RAG, NLP, Model Training, Python, TensorFlow/PyTorch' },
            { label: 'Data Systems', value: 'SQL, Database Architecture, Data Analytics, ETL Pipelines' },
            { label: 'Full Stack Development', value: 'TypeScript, Next.js, Node.js, Interactive Dashboards' },
          ].map((item) => (
            <Card key={item.label} variant='hoverable'>
              <p className='text-xs uppercase tracking-[0.25em] text-sky-400 font-semibold'>{item.label}</p>
              <p className='mt-3 text-sm text-slate-200 leading-relaxed'>{item.value}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id='contact' className='max-w-6xl mx-auto pt-8 relative z-10'>
        <Card className='bg-slate-900/40 border-slate-800/80 p-8 sm:p-12 relative overflow-hidden'>
          <div className='absolute -right-16 -top-16 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl'></div>
          <div className='absolute -left-16 -bottom-16 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl'></div>
          
          <div className='relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
            <div className='space-y-2'>
              <p className='text-xs uppercase tracking-[0.25em] text-sky-400 font-semibold'>Contact</p>
              <h2 className='text-2xl sm:text-3xl font-bold text-white'>Let’s build something incredible together.</h2>
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
