function ProjectsSection({ project }) {
  return (
    <section
      id="projects"
      className="projects max-w-6xl mx-auto px-6 sm:px-10 md:px-20 py-16 md:py-24"
      data-aos="fade-up"
    >
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12 tracking-tight"
        data-aos="fade-down"
      >
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {project?.map((p, index) => (
          <div
            key={p._id}
            className="bg-white flex flex-col rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-3 hover:scale-105 transition-all duration-500"
            data-aos="zoom-in-up"
            data-aos-delay={index * 150}
          >
            {p.img && <img src={p.img} alt={p.title} />}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {p.title}
              </h2>
              <p className="text-gray-700 mb-4 flex-grow">{p.desc}</p>
              <p className="text-gray-600 mb-6">
                <span className="font-semibold">Tools:</span> {p.tools}
              </p>
              <div className="flex flex-wrap mt-auto">
                {p.git && (
                  <a
                    href={p.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-700 text-white font-semibold rounded-lg shadow-md hover:from-gray-600 hover:to-gray-800 transform hover:scale-105 transition-all duration-300"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
