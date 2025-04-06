import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";
export default function Products() {

    const products = [
        {
            name: "Computer",
            description: "Product description computer goes here.",
            image_url: "https://img.advice.co.th/images_nas/pic_product4/A0163064/A0163064_1.jpg",
        },
        {
            name: "Laptop core i7",
            description: "Product description laptop goes here.",
            image_url: "https://img.advice.co.th/images_nas/pic_product4/A0163118/A0163118_1.jpg",
        },
        {
            name: "Head phone",
            description: "Product description phone goes here.",
            image_url: "https://img.advice.co.th/images_nas/pic_product4/A0167707/A0167707_1.jpg",
        },
        {
            name: "iPad 4th Gen",
            description: "Product description ipad goes here.",
            image_url: "https://img.advice.co.th/images_nas/pic_product4/A0139721/A0139721_1.jpg",
        },
        {
            name: "iPhone 4th Gen",
            description: "Product description iphone goes here.",
            image_url: "https://img.advice.co.th/images_nas/pic_product4/A0162715/A0162715_1.jpg",
        },
    ];
    return (<div>
        <h1 className="font-bold text-2xl text-center my-4">Product</h1>
        <div className="flex flex-wrap m-auto justify-center w-[80%] border rounded p-4 bg-slate-100 mb-6">
            {
                products.map((product, index) => {
                    return (
                        <ProductItem
                            key={index}
                            index={index}
                            productName={product.name}
                            description={product.description}
                            image_url={product.image_url}
                        />
                    )
                })
            }
        </div>

        <Footer />
    </div>
    )
}