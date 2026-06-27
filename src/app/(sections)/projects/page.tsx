import Card from '@/components/ui/Card'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Cognitive Load Study',
      description: 'Investigating the impact of user interface layout complexity on cognitive processing and task execution speed.',
      tags: ['Cognitive Science', 'UI Research', 'User Testing'],
    },
    {
      title: 'Behavioral Habit Tracker',
      description: 'A digital application designed around habit-formation loops, utilizing micro-incentives and positive psychology reinforcement.',
      tags: ['Behavioral Psychology', 'Web Development', 'UX Design'],
    },
    {
      title: 'Empathy Journey Mapper',
      description: 'A collaborative research tool mapping user emotional states across product interaction stages.',
      tags: ['User Research', 'Empathy Mapping', 'Product Design'],
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
          Explore my selection of psychology-related projects, UX research, and digital product designs.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
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
