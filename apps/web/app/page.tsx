import Image from 'next/image'
import Link from 'next/link'
import LinkSection from '@/modules/Home/components/link-section'
import CreatorAvatar from '@/public/creator.png'

console.log(CreatorAvatar)

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-end font-mono text-sm lg:flex'>
        <div className='dark:via-dark fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-green50 dark:from-green50 lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <Link
            className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='https://github.com/tony-matheus'
            target='_blank'
            rel='noopener noreferrer'
          >
            By Tony Lima
            <span className='h-7 w-7 rounded-full'>
              <Image
                src={CreatorAvatar}
                alt='Creator profile photo'
                className='aspect-square h-full w-full rounded-full object-cover'
                width={100}
                height={24}
                priority
              />
            </span>
          </Link>
        </div>
      </div>

      <div className="relative mb-4 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-green200 after:via-green500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green500 before:dark:opacity-10 after:dark:from-green900 after:dark:via-green500 after:dark:opacity-40 before:lg:h-[360px]">
        <h1 className='font-mono text-7xl'>🪗 Bard UI</h1>
      </div>

      <LinkSection />
    </main>
  )
}
