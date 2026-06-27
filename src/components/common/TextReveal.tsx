'use client'

import { motion, Variants } from 'framer-motion'

export default function TextReveal({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.05, 
        delayChildren: delay 
      },
    },
  }

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
      },
    },
    hidden: {
      opacity: 0,
      y: 15,
    },
  }

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-50px' }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          className='inline-block mr-[0.25em] origin-bottom'
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
