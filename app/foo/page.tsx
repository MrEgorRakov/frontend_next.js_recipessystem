import Link from "next/link";

export default function Products() {
    return (
        <div className="flex flex-col text-black items-center justify-center h-screen bg-gray-100">
            <h1>FOO FIGHTERS</h1>
            <Link 
                className='text-blue-800 block border-2 border-black p-2 m-2 w-fit mb-8'
                href="/" 
                >
                Go to Home Page
            </Link>
        </div>
    )
}