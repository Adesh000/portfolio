import { motion } from "framer-motion";
import boy from "../assets/boy.jpg";

const About = () => {
  const stats = [
    { label: "Experience", value: "3 Years" },
    { label: "Projects", value: "25+" },
    { label: "Clients", value: "15+" },
  ];
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[480px] h-[480px] opacity-20 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px] delay-500",
  ];
  return (
    <section
      id="about"
      className="min-h-screen w-full flex justify-center items-center relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <motion.div
          className="flex flex-col md:flex-row items-center  md:items-stretch gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div className="relative w-40 h-40 md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-linear-to-r from-[#1cd8d2]/20 to-[#302b63]/30 border  border-[#1cd8d2]/25">
            <img src={boy} alt="" />
          </motion.div>
          <motion.div>
            <div className="flex flex-1 flex-col justify-center text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
                Adesh Nayak
              </h2>
              <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
                React Native Developer
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
                I am a React Native developer with experience delivering 4+
                applications published on Google Play and Apple App Store,
                ensuring early, error-free submissions and minimal bugs. I
                improved app performance for the NSDC Skill India Digital Hub
                project and built mobile apps using React Native from 2022 to
                2025. Skilled in JavaScript, TypeScript, React.js, Redux, and UI
                development, I have consistently met deadlines while managing
                cross-platform hybrid mobile applications. Currently an SDE-1 at
                Stanverse Technologies, I leverage strong front-end skills with
                expertise in animation, GraphQL, and state management to create
                seamless user interfaces and optimized digital experiences.
              </p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
                {stats.map((item, i) => (
                  <motion.div
                    key={i}
                    className="rounded-xl bg-white/5 border border-white/10 py-3 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="text-sm text-gray-400">{item?.label}</div>
                    <div className="text-base font-semibold">{item?.value}</div>
                  </motion.div>
                ))}
              </div>

              <div>
                <a> </a>
                <a></a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
