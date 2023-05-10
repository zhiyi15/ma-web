import { BsApple, BsUbuntu, BsWindows } from 'react-icons/bs'
import Image from 'next/image'

export default function Download() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:py-10 lg:flex lg:items-center lg:justify-between lg:px-8">

        <Image
          className="h-72 w-auto rounded-lg"
          src="/shot2.png"
          alt="Screenshot"
          width={2000}
          height={2000}
        />

        <h2 className="text-3xl font-bold tracking-tight pt-5 text-gray-900 sm:text-4xl">
          Always Free, 
          <br />
          Always Open Source,
          <br />
          Download today!
        </h2>


        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a
            href="./middle-aware-1.0.0.dmg"
            download='middle-aware-1.0.0.dmg'
            className="rounded-md bg-[#06d6a0] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#06d69ec9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
         <BsApple size={30}/>
          </a>
          <a
            // href=""
            className=" rounded-md bg-[#06d69e55] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#06d69e55] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <BsWindows size={30} />
          </a>
          <a
            // href=""
            className="rounded-md bg-[#06d69e55] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#06d69e55] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <BsUbuntu size={30} />
          </a>
        </div>
      </div>
           </div>
  )
}
