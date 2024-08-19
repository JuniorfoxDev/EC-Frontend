const ProductDetailCarousel = () => {
    return (
        <div className="text-white text-[20px] w-full max-w-[550px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                className="productCarousel"
            >
            {product.images && Array.isArray(product.images) && product.images.length > 0 && 
                product.images.map((img, index) => (
                    img && img.url && (
                        <img key={index} src={img.url} alt={product.name} />
                    )
                ))
            }
            </Carousel>
        </div>
    )
}
export default ProductDetailCarousel