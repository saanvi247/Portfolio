import Card from '@/components/ui/Card'

export default function AboutPage() {
  return (
    <div className='space-y-12 py-12 max-w-4xl mx-auto'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-extrabold tracking-tight text-white'>
          About{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400'>
            Me
          </span>
        </h1>
        <div className='prose prose-invert max-w-none'>
          <p className='text-base sm:text-lg text-slate-300 leading-relaxed'>
            I am an AI Engineer, Data Systems Builder, and Computer Science student. I am highly passionate about the intersection of machine learning and large-scale software engineering. 
            My work focuses on leveraging advanced data pipelines, language models, and clean backend architecture to construct intelligent tools that solve complex, real-world challenges.
          </p>
        </div>
      </div>

      <div className='space-y-6'>
        <h2 className='text-2xl font-bold text-white'>Education</h2>
        <div className='space-y-4'>
          <Card className='border-l-4 border-sky-500 bg-slate-900/30'>
            <h3 className='font-bold text-lg text-white'>Computer Science & AI</h3>
            <p className='text-slate-400 text-sm mt-1'>Student</p>
            <p className='text-slate-300 text-sm mt-3 leading-relaxed'>
              Focusing on artificial intelligence, software engineering, database architectures, and data structures. Actively building projects outside the classroom.
            </p>
          </Card>
        </div>
      </div>

      <div className='space-y-6'>
        <h2 className='text-2xl font-bold text-white'>Skills & Interests</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {['Artificial Intelligence', 'Data Architecture', 'Full-Stack Engineering', 'RAG Pipelines'].map((skill) => (
            <Card key={skill} variant='hoverable' className='py-4 px-6 flex items-center justify-between'>
              <span className='text-slate-200 font-medium text-sm'>{skill}</span>
              <span className='w-2 h-2 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50'></span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
