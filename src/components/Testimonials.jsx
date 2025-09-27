import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      review: "The mock tests and speaking practice sessions boosted my confidence. I scored Band 8!",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Verma",
      review: "AI Band Score predictor was super helpful! It gave me an idea of where I stood.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rahul Mehta",
      review: "The trainers are amazing and very supportive. Highly recommended for IELTS prep!",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Neha Singh",
      review: "Loved the speaking practice sessions, it really improved my fluency.",
      img: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      name: "Karan Patel",
      review: "Mock tests are very realistic and helped me prepare for the real exam.",
      img: "https://randomuser.me/api/portraits/men/60.jpg",
    },
    {
      name: "Simran Kaur",
      review: "The AI Band Score predictor is amazing! It really helped me track my progress.",
      img: "https://randomuser.me/api/portraits/women/66.jpg",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12" data-aos="fade-up">
          What Our Students Say
        </h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true, // stops on hover or swipe
            pauseOnMouseEnter: true,    // stops on hover
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-700 mb-4 italic">"{t.review}"</p>
                <h4 className="text-lg font-semibold">{t.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
