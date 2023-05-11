import { BsMedium, BsLinkedin, BsGithub } from 'react-icons/bs'

const navigation = [
  {
    name: 'GitHub',
    href: 'https://github.com/oslabs-beta/middle-aware',
    icon: BsGithub
  },
  {
    name: 'Medium',
    href: 'https://medium.com/',
    icon: BsMedium
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: BsLinkedin
  }
]

const chickenEmoji = '\u{1F414}'
const redHeartEmoji = '\u{2764}\u{FE0F}'

export default function Footer() {
  return (
    <footer className="bg-white">
      
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 w-fit flex flex-row mx-auto md:order-1 md:mt-0">
          <span className="text-lg text-gray-500"> Made with </span>
          <span className='text-xl'> {`-`}{redHeartEmoji}{`-`}</span>
          <span className="text-lg text-gray-500">
            by some</span>   {`-`}<span className='text-xl'>{chickenEmoji}</span>
          <span className="text-lg text-gray-500">s</span>
        </div>
      </div>
        {/* Formatted like this to add more links */}
        <div className="flex justify-center space-x-6 md:order-2 pb-8">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-7 w-9" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div>
          <span> </span>
        </div>
    </footer>
  )
}
