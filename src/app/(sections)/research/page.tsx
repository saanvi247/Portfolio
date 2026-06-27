import Card from '@/components/ui/Card'

export default function ResearchPage() {
  const publications = [
    {
      title: 'The Influence of Interface Visual Density on Working Memory',
      authors: 'Saanvi, et al.',
      journal: 'Journal of Cognitive Ergonomics',
      year: '2024',
      abstract: 'This study investigates how varying visual density levels in digital interfaces impact visual search efficiency and short-term working memory load in young adults.',
      link: '#',
    },
    {
      title: 'Predicting Digital Fatigue via Mobile Behavioral Markers',
      authors: 'Saanvi, et al.',
      journal: 'International Journal of Human-Computer Studies',
      year: '2023',
      abstract: 'Analyzing touch pressure, scroll velocity, and session durations as non-invasive behavioral markers to detect user cognitive fatigue in real-time.',
      link: '#',
    },
  ]

  return (
    <div className='space-y-8 py-12 max-w-4xl mx-auto'>
      <div className='space-y-3'>
        <h1 className='text-4xl font-extrabold tracking-tight text-white'>
          Academic{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400'>
            Research
          </span>
        </h1>
        <p className='text-base text-slate-400 max-w-2xl'>
          Peer-reviewed scientific publications, conference papers, and academic studies.
        </p>
      </div>

      <div className='space-y-6'>
        {publications.map((pub) => (
          <Card key={pub.title} className='border-l-4 border-sky-500 bg-slate-900/30 flex flex-col space-y-4 hover:border-indigo-400 transition-smooth'>
            <div>
              <h3 className='font-bold text-lg text-white'>{pub.title}</h3>
              <p className='text-slate-400 text-xs mt-1.5 font-medium'>
                {pub.authors} | <span className='italic'>{pub.journal}</span> ({pub.year})
              </p>
            </div>
            <p className='text-slate-300 text-sm leading-relaxed'>{pub.abstract}</p>
            <div>
              <a
                href={pub.link}
                className='text-sm font-semibold text-sky-400 hover:text-sky-300 transition-smooth inline-flex items-center gap-1'
              >
                Read Full Paper <span className='text-xs'>→</span>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
