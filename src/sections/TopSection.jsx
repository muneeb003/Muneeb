import FluidCanvas from "../canvas/FluidCanvas";
import MemojiTiltCorrected from "../component/MemojiTiltCorrected";

function TopSection({ about }) {
  {
    /* bg-gradient-to-b from-white to-gray-50 */
  }
  return (
    <section className="topSection relative flex flex-col items-center gap-8 px-6 sm:px-10 md:px-20 lg:px-40 py-16 md:pb-40 md:pt-32 text-center">
      <FluidCanvas />
      <h1
        className="text-xl sm:text-4xl md:text-2xl text-gray-900"
        data-aos="fade-down"
      >
        Hey! I am {about?.name}
      </h1>
      <p
        className="text-lg sm:text-xl md:text-4xl font-bold text-gray-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {about?.title}
      </p>
      <div data-aos="zoom-in" data-aos-delay="400">
        <MemojiTiltCorrected
          size={220}
          maxTilt={30}
          tiltFactorX={0.8}
          tiltFactorY={1.2}
        />
      </div>
      <div
        className="flex flex-col sm:flex-row gap-4 mt-6"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-gray-900 text-white rounded-md shadow-md hover:bg-gray-800 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          Explore Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-md shadow-md hover:bg-gray-900 hover:text-white transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}

export default TopSection;
