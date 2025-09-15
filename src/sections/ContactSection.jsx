import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Map from "../component/Map";

function ContactSection({ about }) {
  return (
    <section
      id="contact"
      className="contact flex flex-col md:flex-row items-center justify-between gap-10 py-16 bg-gray-100 text-gray-900"
      data-aos="fade-up"
    >
      {/* Left Side */}
      <div className="flex-[2] px-6 md:px-12 text-center md:text-left">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          data-aos="fade-down"
        >
          Contact
        </h1>
        <p
          className="text-xl md:text-2xl mb-2 text-gray-700"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Let's Work Together
        </p>
        <p
          className="mb-12 max-w-xl mx-auto md:mx-0 text-gray-600"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I’m currently open to freelance projects, collaborations, or full-time
          opportunities.
        </p>

        <div className="contact-info flex justify-center md:justify-start gap-6 md:gap-8 text-3xl md:text-4xl">
          <a
            href={`mailto:${about.email}`}
            className="bg-white p-5 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition transform hover:-translate-y-1 hover:scale-110"
            data-aos="zoom-in"
          >
            <CiMail />
          </a>
          <a
            href={about.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-5 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition transform hover:-translate-y-1 hover:scale-110"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={about.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-5 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition transform hover:-translate-y-1 hover:scale-110"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Right Side - Map */}
      <div className="w-full h-[300px] md:w-[400px] md:h-[400px] shadow-lg rounded-lg overflow-hidden md:mr-10">
        <Map />
      </div>
    </section>
  );
}

export default ContactSection;
