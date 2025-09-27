import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUsers, FaChalkboardTeacher, FaStar, FaBook } from "react-icons/fa";

const statsData = [
  { icon: <FaUsers size={40} />, label: "Students Trained", value: 1600 },
  { icon: <FaChalkboardTeacher size={40} />, label: "Expert Tutors", value: 25 },
  { icon: <FaStar size={40} />, label: "Average Band Score", value: 8.5 },
  { icon: <FaBook size={40} />, label: "Courses Offered", value: 15 },
];

const StatisticsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Animated counters
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) =>
          count < statsData[i].value
            ? count + statsData[i].value / 100
            : statsData[i].value
        )
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="statistics"
      className="py-20 bg-white"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-6 bg-gray-50 rounded-lg shadow-md overflow-hidden group cursor-pointer transition duration-600"
              data-aos="zoom-in"
              data-aos-delay={idx * 600}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-red-600 scale-y-0 origin-bottom transition-transform duration-600 group-hover:scale-y-100"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-red-600 group-hover:text-white mb-4 transition-colors duration-600">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors duration-600">
                  {stat.label === "Average Band Score"
                    ? stat.value
                    : Math.floor(counts[idx])}
                </h3>
                <p className="text-gray-700 group-hover:text-white transition-colors duration-600">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
