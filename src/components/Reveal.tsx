import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const variants: Variants = {
  hidden: { opacity: 0, y: 36, filter: 'blur(6px)' },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, delay, ease: [0.21, 0.6, 0.35, 1] },
  }),
}

export function Reveal({
  children,
  delay = 0,
  className,
  once = true,
}: {
  children: ReactNode
  delay?: number
  className?: string
  once?: boolean
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      custom={delay}
    >
      {children}
    </motion.div>
  )
}
