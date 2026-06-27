import Card from '@/components/ui/Card'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Rashtram AI',
      description: 'An advanced conversational AI system built for scalable infrastructure. Integrated NLP pipelines to understand intent, manage conversational state, and interface with multiple backend services.',
      tags: ['AI Engineering', 'NLP', 'Python', 'Scalability'],
    },
    {
      title: 'Zomato Data Analysis',
      description: 'Comprehensive analysis of extensive Zomato datasets. Built automated ETL pipelines and interactive dashboards to surface actionable business metrics and geospatial insights.',
      tags: ['Data Science', 'ETL', 'SQL', 'Dashboards'],
    },
    {
      title: 'Task Management & Billing System',
      description: 'A robust full-stack solution for tracking employee tasks and automating billing. Implemented secure authentication, real-time database updates, and automated invoice generation.',
      tags: ['Full Stack', 'Next.js', 'PostgreSQL', 'Automation'],
    },
    {
      title: 'AI Adoption Strategy',
      description: 'A strategic research and implementation initiative aimed at embedding cutting-edge generative AI tools into enterprise workflows to enhance operational efficiency.',
      tags: ['Strategy', 'GenAI', 'LLMs', 'Workflow Integration'],
    },
  ]

  return (
    <div className='space-y-8 py-12 max-w-5xl mx-auto'>
      <div className='space-y-3'>
        <h1 className='text-4xl font-extrabold tracking-tight text-white'>
          My{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400'>
            Projects
          </span>
        </h1>
        <p className='text-base text-slate-400 max-w-2xl'>
          Explore my selection of AI systems, data pipelines, and full-stack software applications.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
        {projects.map((project) => (
          <Card key={project.title} variant='hoverable' className='flex flex-col justify-between h-full space-y-6'>
            <div className='space-y-3'>
              <h3 className='font-bold text-lg text-white'>{project.title}</h3>
              <p className='text-slate-300 text-sm leading-relaxed'>{project.description}</p>
            </div>
            <div className='flex gap-2 flex-wrap pt-2'>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className='text-xs font-semibold bg-sky-950/60 text-sky-400 border border-sky-900/50 px-2.5 py-1 rounded-full'
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
