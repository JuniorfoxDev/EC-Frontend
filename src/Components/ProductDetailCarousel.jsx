import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ProductDetailCarousel = (images) => {
    return (
        <div className="text-white text-[20px] w-full max-w-[550px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                className="productCarousel"
            >
                {images.map((img, index) => (
                    <img key={index} src={img.url} alt={product.name} />
                ))}
            </Carousel>
        </div>
    )
}
export default ProductDetailCarousel