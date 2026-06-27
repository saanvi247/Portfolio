import { cn } from '@/lib/utils/cn'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'hoverable'
}

export default function Card({
  children,
  variant = 'default',
  className,
  ...props
}: CardProps) {
  const baseStyles = 'glass-panel'
  
  const variants = {
    default: '',
    hoverable: 'glass-panel-hover',
  }

  return (
    <div
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  )
}
