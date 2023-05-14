import Image from "next/image"

const techStack = [
  {
    name: 'ElectronJs',
    logoUrl: '/electron.png'
  },
  {
    name: 'React',
    logoUrl: '/reactjs.png'
  },
  {
    name: 'Babel',
    logoUrl: '/babel.png'
  },
  {
    name: 'NextJs',
    logoUrl: '/nextjs2.png'
  },
  {
    name: 'NodeJs',
    logoUrl: '/nodejs.png'
  },

  {
    name: 'Tailwind',
    logoUrl: '/tailwind.png'
  },
  {
    name: 'Typescript',
    logoUrl: '/typescript.png'
  },
  {
    name: 'MongoDB',
    logoUrl: '/mongodb.png'
  },
  {
    name: 'mongoose',
    logoUrl: '/mgsedb.png'
  }
]

//flex-carl, wrapp.

export default function Stack() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto w-[90%] max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tech Stack</h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-9 lg:mx-auto"
        >
          {techStack.map((item) => (
            <Image className="w-1/2 h-auto mx-auto sm:w-1/2 lg:w-full" alt="Technologies" src={item.logoUrl} key={item.name} width={2000} height={200} />
          ))}
        </ul>
      </div>
    </div>
  )
}

// md selector centered.