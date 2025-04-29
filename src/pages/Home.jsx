import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom';

const slides = [
  {
    image:
      "https://www.creativefabrica.com/wp-content/uploads/2023/08/10/4k-Banner-For-Ecommerce-Products-And-Gadgets-76600027-1.png",
    title: "Latest Tech Gadgets",
    description: "Upgrade your life with cutting-edge technology and stylish innovation.",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/high-end-4k-studio-ecommerce-product-photography-generative-ai_978425-327.jpg",
      title: "Elegant Fragrances",
      description: "Indulge in timeless scents that leave a lasting impression. Discover our curated collection of luxurious perfumes.",
    },
  {
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Smart Wearables",
    description: "Style meets tech with our smartwatches and fitness trackers.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Audio That Moves You",
    description: "Immerse yourself in premium sound with top-rated headphones.",
  },
];
export default function Home() {
  return (
    <div className="w-full">
      {/* Swiper Banner */}
      <div className="w-full h-screen m-0 p-0 overflow-hidden">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-fill"
                />
                {/* Overlay with text */}
                <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl max-w-2xl">{slide.description}</p>
                </div>
              
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Explore Section Below Swiper */}
      <div className="w-full py-16 bg-white text-center">
        <h1 className="text-50xl font-bold mb-6">Discover Our Products</h1>
        <Link to = "/products" className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300">
          Explore Products
        </Link>
      </div>
    </div>
  );
}
