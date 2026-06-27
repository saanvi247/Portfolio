import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function ContactPage() {
  return (
    <div className='space-y-8 py-12 max-w-2xl mx-auto'>
      <div className='space-y-3'>
        <h1 className='text-4xl font-extrabold tracking-tight text-white'>
          Contact{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400'>
            Me
          </span>
        </h1>
        <p className='text-base text-slate-400'>
          Get in touch with me about collaboration opportunities, research inquiries, or just to chat about psychology and design.
        </p>
      </div>

      <Card className='p-8 relative overflow-hidden'>
        <form className='space-y-6 relative z-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div>
              <label className='block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2'>
                Name
              </label>
              <input
                type='text'
                placeholder='Your name'
                className='w-full px-4 py-3 bg-slate-950/40 border border-slate-800/80 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500/80 transition-smooth text-sm'
              />
            </div>
            <div>
              <label className='block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2'>
                Email
              </label>
              <input
                type='email'
                placeholder='your.email@example.com'
                className='w-full px-4 py-3 bg-slate-950/40 border border-slate-800/80 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500/80 transition-smooth text-sm'
              />
            </div>
          </div>
          <div>
            <label className='block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2'>
              Message
            </label>
            <textarea
              placeholder='Your message here...'
              rows={5}
              className='w-full px-4 py-3 bg-slate-950/40 border border-slate-800/80 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500/80 transition-smooth text-sm'
            />
          </div>
          <Button
            type='submit'
            variant='primary'
            size='lg'
            className='w-full py-3.5'
          >
            Send Message
          </Button>
        </form>
      </Card>
    </div>
  )
}
