import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Product = () => {
    const [selectedSize,setSelectedSize] = useState();
    const {id} = useParams();
    const [loading,setLoading] = useState(true);
    const [product,setProduct] = useState(null);
    useEffect(() => {
        fetchProduct()
    },[])
    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://ec-backend-server.vercel.app/products/${id}`);
            const data = response.json();
            if(data){
                setProduct(data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    if(loading) return <div>Loading...</div>;
    return (
        <div className="w-full md:py-20">
            <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
            {product ? ( 
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <div className="text-white text-[20px] w-full max-w-[550px] mx-auto sticky top-[50px]">
                            <Carousel
                                infiniteLoop={true}
                                showIndicators={false}
                                showStatus={false}
                                className="productCarousel"
                            >
                                {
                                    product.map((img) => (
                                        <img src={img.images.url} alt="" />
                                    ))
                                }
                            </Carousel>
                        </div>
                    </div>
                    <div className="flex-[1] py-3">
                        <div className="mb-2 text-[34px] leading-tight font-semibold">
                            {product.name}
                        </div>
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">MRP : &#8377; {product.price} </p>
                        </div>
                        <div className="font-semibold text-black/[0.5] text-base">
                                incl. all taxes.
                        </div>
                        <div className="text-base font-semibold text-black/[0.5]">Also Including all duties</div>
                        <div className="mb-10">
                            <div className="flex items-center justify-between mb-2">
                                <div className="text-base font-semibold">Select Size</div>
                                <div className="text-base font-medium text-black/[0.5] cursor-pointer">Select Guide</div>
                            </div>
                        </div>
                        <div className="gird grid-cols-3 gap-3">
                            {product.sizes.map((item,i) => {
                                <div key={i} className={`border rounded-md text-center py-3 font-medium ${item.enabled ? "hover:border-black cursor-pointer" : "cursor-not-allowed bg-black/[0.1] opacity-50"} ${selectedSize == item.size ? "border-black" : " "}`} onClick={() => {setSelectedSize(item.size)}}>
                                    {item.sizes}
                                </div>
                            }) 
                            }
                        </div>
                        <button className="w-full py-3 rounded-full text-white mt-4 bg-black text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                            Add To Card
                        </button>
                        <button className="w-full py-3 rounded-full text-white mt-4 bg-black text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                            Favourite <IoMdHeartEmpty size={20}/>
                        </button>
                        <div>
                            <div className="text-lg font-bold mb-5">Product Details</div>
                            <div className="text-base mb-5">
                                {product.description}
                            </div>
                        </div>
                    </div>
                </div>
                ) : ( <div> Product Not Found </div>)}
            </div>
        </div>
    )
}
export default Product