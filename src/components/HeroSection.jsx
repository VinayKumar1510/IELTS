import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import hero1 from "../assets/hero1.jpg";
import hero4  from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.png";
import hero7 from "../assets/hero7.jpeg";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      className="relative w-full h-[80vh] overflow-hidden pt-16" 
      data-aos="fade-down"
    >
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {[hero1, hero4, hero5, hero7].map((img, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full relative">
              <img
                src={img}
                alt={`Hero ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              {/* Text content with separate AOS */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
              >
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  Master IELTS with Us
                </h1>
                <p className="text-base md:text-xl max-w-2xl mb-6">
                  Unlock your potential with expert training, personalized coaching, and guaranteed results.
                </p>
                <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-lg font-semibold transition cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;