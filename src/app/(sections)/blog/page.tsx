import Card from '@/components/ui/Card'

export default function BlogPage() {
  const posts = [
    {
      title: 'The Psychology of Dark Patterns in UX',
      date: 'June 20, 2026',
      readTime: '6 min read',
      excerpt: 'Analyzing how digital interface structures can unintentionally manipulate user decision loops and choices, and the ethics of persuasive design.',
      link: '#',
    },
    {
      title: 'Cognitive Load: The Invisible UX Killer',
      date: 'May 14, 2026',
      readTime: '4 min read',
      excerpt: 'How minor visual distractions accumulate to increase user stress and drop-off rates, and actionable ways to simplify cognitive paths.',
      link: '#',
    },
    {
      title: 'Designing for Neurodiversity',
      date: 'April 02, 2026',
      readTime: '8 min read',
      excerpt: 'Best practices for accessibility, centering on cognitive variance, ADHD, dyslexia, and autism spectrum needs in visual architecture.',
      link: '#',
    },
  ]

  return (
    <div className='space-y-8 py-12 max-w-4xl mx-auto'>
      <div className='space-y-3'>
        <h1 className='text-4xl font-extrabold tracking-tight text-white'>
          The{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400'>
            Blog
          </span>
        </h1>
        <p className='text-base text-slate-400 max-w-2xl'>
          Articles, musings, and research breakdowns covering design psychology, cognition, and UX.
        </p>
      </div>

      <div className='space-y-6'>
        {posts.map((post) => (
          <Card key={post.title} variant='hoverable' className='flex flex-col space-y-4'>
            <div className='space-y-2'>
              <h3 className='font-bold text-xl text-white'>{post.title}</h3>
              <p className='text-slate-500 text-xs font-semibold uppercase tracking-wider'>
                {post.date} • {post.readTime}
              </p>
            </div>
            <p className='text-slate-300 text-sm leading-relaxed'>{post.excerpt}</p>
            <div>
              <a
                href={post.link}
                className='text-sm font-semibold text-sky-400 hover:text-sky-300 transition-smooth inline-flex items-center gap-1'
              >
                Read Article <span className='text-xs'>→</span>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
