function SkillsSection({ skill }) {
  return (
    <section
      id="skills"
      className="skills max-w-6xl mx-auto px-6 sm:px-10 md:px-20 py-16 md:py-24"
      data-aos="fade-up"
    >
      <h1
        className="text-4xl font-extrabold text-gray-900 text-center mb-12"
        data-aos="fade-down"
      >
        Skills
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skill?.map((s, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105"
            data-aos="flip-left"
            data-aos-delay={idx * 100}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {s.category}
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {s.Items.map((i, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-200 transition transform hover:scale-105"
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
