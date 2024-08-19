import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { IoMdHeartEmpty } from "react-icons/io";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const [selectedSize, setSelectedSize] = useState();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://ec-backend-server.vercel.app/products/${id}`);
            const data = await response.json(); // Await the JSON parsing
            if (data) {
                setProduct(data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;

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
                                    thumbWidth={60}
                                    className="productCarousel"
                                >
                                    {product.images && product.images.map((img, index) => (
                                        <img key={index} src={img.url} alt={product.name} />
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                        <div className="flex-[1] py-3">
                            <div className="mb-2 text-[34px] leading-tight font-semibold">
                                {product.name}
                            </div>
                            <div className="flex items-center mb-4">
                                <p className="mr-2 text-lg font-semibold">MRP : &#8377; {product.price} </p>
                            </div>
                            <div className="font-semibold text-black/[0.5] text-base">
                                incl. all taxes.
                            </div>
                            <div className="text-base font-semibold text-black/[0.5] pb-8">
                                Also Including all duties
                            </div>
                            <div className="mb-10">
                                <div className="flex items-center justify-between my-6">
                                    <div className="text-base font-semibold">Select Size</div>
                                    <div className="text-base font-medium text-black/[0.5] cursor-pointer">
                                        Size Guide
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                {product.sizes && product.sizes.map((size, i) => (
                                     <div
                                            key={i}
                                            className={`border rounded-md text-center py-3 font-medium ${selectedSize === size ? "border-black" : ""} ${true ? "hover:border-black cursor-pointer" : "cursor-not-allowed bg-black/[0.1] opacity-50"}`}
                                            onClick={() => setSelectedSize(size)}
                                     >
                                         {size}
                                     </div>
                                ))}
                                </div>
                            </div>
                            <button className="w-full py-3 rounded-full text-white mt-4 bg-black text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                                Add To Cart
                            </button>
                            <button className="w-full py-3 rounded-full text-white mt-4 text-center bg-black text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                                <div className="flex flex-row items-center justify-center">
                                     <p>Favourite</p>    
                                     <IoMdHeartEmpty size={20} />
                                </div>
                            </button>
                            <div>
                                <div className="text-lg font-bold mb-5">Product Details</div>
                                <div className="text-base mb-5">
                                    {product.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>Product Not Found</div>
                )}
            </div>
        </div>
    );
};

export default Product;
