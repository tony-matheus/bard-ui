import { LinkBox, LinkBoxProps } from './link-box'

const LINKS: Array<LinkBoxProps> = [
  {
    url: 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    title: 'Docs',
    subtitle: 'Find in-depth information about Next.js features and API.',
  },
  {
    url: 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
    title: 'Learn',
    subtitle: 'Learn about Next.js in an interactive course with quizzes!',
  },
  {
    url: 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    title: 'Templates',
    subtitle: 'Explore the Next.js 13 playground.',
  },
  {
    url: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    title: 'Deploy',
    subtitle:
      'Instantly deploy your Next.js site to a shareable URL with Vercel.',
  },
]

export default function LinkSection() {
  return (
    <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left '>
      {LINKS.map((link) => (
        <LinkBox key={link.title} {...link} />
      ))}
    </div>
  )
}
