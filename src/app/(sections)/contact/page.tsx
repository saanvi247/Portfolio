'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err: any) {
      console.error(err)
      setStatus('error')
      setErrorMessage(err.message || 'An unexpected error occurred.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

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
          Get in touch with me about engineering roles, collaboration opportunities, or data systems architecture.
        </p>
      </div>

      <Card className='p-8 relative overflow-hidden'>
        {status === 'success' ? (
          <div className='text-center py-12 space-y-4'>
            <div className='w-16 h-16 bg-sky-500/20 text-sky-400 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-white'>Message Sent!</h3>
            <p className='text-slate-400'>Thank you for reaching out. I'll get back to you shortly.</p>
            <Button variant='ghost' onClick={() => setStatus('idle')} className='mt-4'>
              Send another message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='space-y-6 relative z-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <div>
                <label htmlFor='name' className='block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2'>
                  Name
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Your name'
                  className='w-full px-4 py-3 bg-slate-950/40 border border-slate-800/80 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500/80 transition-smooth text-sm'
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2'>
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='your.email@example.com'
                  className='w-full px-4 py-3 bg-slate-950/40 border border-slate-800/80 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500/80 transition-smooth text-sm'
                />
              </div>
            </div>
            <div>
              <label htmlFor='message' className='block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                required
                value={formData.message}
                onChange={handleChange}
                placeholder='Your message here...'
                rows={5}
                className='w-full px-4 py-3 bg-slate-950/40 border border-slate-800/80 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500/80 transition-smooth text-sm'
              />
            </div>
            
            {status === 'error' && (
              <p className='text-red-400 text-sm'>{errorMessage}</p>
            )}

            <Button
              type='submit'
              variant='primary'
              size='lg'
              className='w-full py-3.5'
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        )}
      </Card>
    </div>
  )
}
