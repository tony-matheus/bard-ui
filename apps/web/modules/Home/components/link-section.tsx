import { LinkBox, LinkBoxProps } from './link-box'

const LINKS: Array<LinkBoxProps> = [
  {
    url: '/docs',
    title: 'Docs',
    subtitle: 'A List of components ready to be used!',
  },
  {
    url: '/about',
    title: 'About',
    subtitle: 'Learn more about the creator!',
  },
]

export default function LinkSection() {
  return (
    <div className='mb-32 flex justify-center gap-2 text-center lg:mb-0 lg:grid-cols-4 lg:text-left'>
      {LINKS.map((link) => (
        <LinkBox key={link.title} {...link} />
      ))}
    </div>
  )
}
