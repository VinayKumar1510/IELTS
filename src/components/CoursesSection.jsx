import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaBookOpen, FaChalkboard, FaLaptop, FaGlobe, FaPenFancy } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const courses = [
  { icon: <FaBookOpen size={40} />, title: "General IELTS", desc: "Comprehensive preparation for General IELTS exam." },
  { icon: <FaChalkboard size={40} />, title: "Academic IELTS", desc: "In-depth academic training with practice tests." },
  { icon: <FaLaptop size={40} />, title: "Online Courses", desc: "Flexible online courses with expert guidance." },
  { icon: <FaGlobe size={40} />, title: "Speaking Practice", desc: "Interactive speaking sessions to improve fluency." },
  { icon: <FaPenFancy size={40} />, title: "Writing Skills", desc: "Focused writing practice and evaluation." },
];

const CoursesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12" data-aos="fade-up">
          Our Courses
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
            disableOnInteraction: true,
            pauseOnMouseEnter: true, // stops on hover
          }}
        >
          {courses.map((course, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="relative p-6 bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer transition duration-600"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                {/* Bottom-to-top hover overlay */}
                <div className="absolute inset-0 bg-red-600 scale-y-0 origin-bottom transition-transform duration-600 group-hover:scale-y-100"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="text-red-600 group-hover:text-white mb-4 transition-colors duration-600">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-600">
                    {course.title}
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-colors duration-600 text-center">
                    {course.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CoursesSection;
