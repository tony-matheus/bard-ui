import Link from 'next/link'

export interface LinkBoxProps {
  url: string
  title: string
  subtitle?: string
}

export function LinkBox({ url, title, subtitle }: LinkBoxProps) {
  return (
    <Link
      href={url}
      className='group flex-1 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green500 hover:bg-green500/30'
      rel='noopener noreferrer'
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {title}{' '}
        <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
          -&gt;
        </span>
      </h2>
      {!!subtitle && (
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{subtitle}</p>
      )}
    </Link>
  )
}
