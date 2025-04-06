import Image from "next/image";

export default function ProductItem(
    { index, productName, description, image_url }:
        { index: number, productName: string, description: string, image_url: string }) {
    return (
        <div key={index}
            className="relative shadow-lg rounded-md border w-fit bg-green-100 p-2 m-2 hover:translate-2 hover:rotate-15">
            <h2 className="font-bold shadow-2xl">{productName}</h2>
            <p>{description}</p>
            <Image
                className="p-2 rounded-full m-auto border-4 border-blue-700"
                src={image_url}
                width={150}
                height={150}
                alt={productName}
            />
            <button className="border bg-pink-200 px-2 py-1 mt-2 rounded hover:font-bold">Buy Now</button>
            <span className="absolute bottom-2 right-2 border-2  border-blue shadow px-2 rounded-full bg-amber-400 hover:translate-2 hover:rotate-45 hover:bg-green-600">{index + 1}</span>
        </div>)
}