function AboutSection({ about }) {
  return (
    <section
      className="about max-w-4xl mx-auto px-6 sm:px-10 md:px-20 py-16 md:py-24 text-gray-800"
      id="about"
      data-aos="fade-up"
    >
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-center"
        data-aos="fade-down"
      >
        About Me
      </h1>
      <p
        className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed text-center"
        data-aos="fade-right"
      >
        {about.bio}
      </p>
      <p
        className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed text-center"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        I believe in blending creativity with functionality to craft experiences
        that people enjoy using.
      </p>
      <h2
        className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900 text-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Quick Facts
      </h2>
      <div
        className="flex flex-col items-center text-gray-700 gap-3 mt-6"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <ul className="list-disc list-inside space-y-2 text-lg sm:text-xl md:text-lg">
          <li>📍 {about.location}</li>
          <li>🎓 {about.education}</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutSection;
