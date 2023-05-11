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
  name:'Tailwind',
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
  logoUrl: '/mongoose.png'
 }
]

//flex-carl, wrapp.

export default function Stack() {
 return (
  <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
  <div className="mx-auto max-w-2xl lg:mx-0">
  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tech Stack</h2>
  </div>
      <ul
          role="list"
          className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-9"
          >
          {techStack.map((item) =>(
            <Image className="w-full h-auto" alt="Image" src={item.logoUrl} key={item.name} width={2000} height={200}/>
          ))}
        </ul>
  </div>
  </div>
 )
}