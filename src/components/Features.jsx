function Features() {
  const features = [
    {
      title: "Speaking Practice",
      desc: "Interactive sessions to improve your fluency and confidence.",
      icon: "🗣️",
    },
    {
      title: "Mock Tests",
      desc: "Full-length IELTS mock tests to simulate real exam conditions.",
      icon: "📘",
    },
    {
      title: "AI Band Score",
      desc: "Instant AI evaluation to predict your band score accurately.",
      icon: "🤖",
    },
    {
      title: "Expert Guidance",
      desc: "Learn from certified IELTS trainers with years of experience.",
      icon: "🎓",
    },
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12" data-aos="fade-up">
          Why Choose Us?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-2xl transition"
              data-aos="fade-up"
              data-aos-delay={idx * 200}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
