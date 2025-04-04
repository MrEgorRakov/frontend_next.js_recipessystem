export default function Products() {
    return (
        <div>
            <h1 className="font-bold text-2xl text-center my-4">Product</h1>
            <div className="flex flex-wrap m-auto justify-center w-[80%] border rounded m-4 p-4 bg-slate-100 mb-6">
                <div className="shadow-lg rounded-md border w-fit bg-red-200 p-2 m-2">
                    <h2>1. Computer:</h2>
                    <p>Product description goes here.</p>
                    <button className="border bg-blue-200 px-2 py-1 mt-2 rounded hover:font-bold">Buy Now</button>
                </div>
                <div className="shadow-lg rounded-md border w-fit bg-red-200 p-2 m-2">
                    <h2>2. Laptop core i7:</h2>
                    <p>Product description goes here.</p>
                    <button className="border bg-blue-200 px-2 py-1 mt-2 rounded hover:font-bold">Buy Now</button>
                </div>
                <div className="shadow-lg rounded-md border w-fit bg-red-200 p-2 m-2">
                    <h2>3. Head phone:</h2>
                    <p>Product description goes here.</p>
                    <button className="border bg-blue-200 px-2 py-1 mt-2 rounded hover:font-bold">Buy Now</button>
                </div>
                <div className="shadow-lg rounded-md border w-fit bg-red-200 p-2 m-2">
                    <h2>4. iPad 4th Gen:</h2>
                    <p>Product description goes here.</p>
                    <button className="border bg-blue-200 px-2 py-1 mt-2 rounded hover:font-bold">Buy Now</button>
                </div>
            </div>
            <footer className="bg-blue-200 p-2 text-center font-bold text-xl"> ..:: Product footer ::.. </footer>
        </div>
    )
}