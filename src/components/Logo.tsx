import whiteIcon from '@/assets/images/logo-white-icon.png'
import blackIcon from '@/assets/images/logo-black-icon.png'

type LogoProps = {
  variant?: 'light' | 'dark'
  showIcon?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ variant = 'light', showIcon = true, className = '' }: LogoProps) {
  const icon = variant === 'light' ? whiteIcon : blackIcon

  return (
    <a href="#top" className={`group inline-flex items-center gap-2 ${className}`}>
      {showIcon && (
        <span className={`relative flex h-7 w-7 rounded-lg md:h-9 md:w-9 md:rounded-xl items-center justify-center overflow-hidden`}>
          <img
            src={icon}
            alt=""
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </span>
      )}
      <span className={`font-montserrat  md:text-xl tracking-tight text-white`}>
        <span style={{ fontWeight: 800 }}>SILVER</span>{' '}
        <span style={{ fontWeight: 300 }}>HORIZON</span>
      </span>
    </a>
  )
}
