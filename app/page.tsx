import Image from 'next/image'
import { Bungee_Tint } from "next/font/google";
import Link from 'next/link';

const bungee = Bungee_Tint({
  subsets: ["latin"],
  weight: "400",
});

export default function MyApp() {
  return (<div>
          <Link 
        className='text-blue-800 block border-2 border-black p-2 m-2 w-fit mb-8'
        href="/products" 
        >
          Go to Product Page
      </Link>

      <Link 
        className='text-red-800 block border-2 border-black p-2 m-2 w-fit mb-8'
        href="/foo" 
        >
          foo button
      </Link>

      <Link 
        className='text-red-800 block border-2 border-black p-2 m-2 w-fit mb-8'
        href="/foo/bar" 
        >
          bar button
      </Link>

    <h1 className={`${bungee.className} "font-bold m-2 p-2"`}>Hello world!!</h1>

    <div className="w-[80%] border rounded p-4 m-auto bg-slate-100 
     grid 
    grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
      <Image
        className='p-2 m-4'
        src="https://computing.psu.ac.th/th/wp-content/uploads/2023/09/PSU-CoC-ENG_01_x49.png"
        width={150}
        height={150}
        alt="PSU Logo"
      />

      <Image
        className="p-2 m-4"
        src="/next.svg"
        width={150}
        height={150}
        alt="Next.js Logo"
      />

      <div className="w-64 p-2 border mb-2 rounded bg-blue-200 hover:bg-blue-700 hover:text-blue-50">
        Lorem idivsum, dolor sit amet consectetur adidivisicing elit. Doloribus, consequuntur.
      </div>
      <div className="w-64 p-2 border mb-2 rounded bg-blue-600 text-white">
        Lorem idivsum, dolor sit amet consectetur adidivisicing elit. Doloribus, consequuntur.
      </div>
      <div className="w-64 p-2 border rounded bg-amber-300">
        Lorem idivsum, dolor sit amet consectetur adipisicing elit. Doloribus, consequuntur.
      </div>
    </div>

  </div>)
}