import { features } from "../constants";

const Feature = () => {
  return (
    <section className="relative mt-20 min-h-[800px] bg-transparent backdrop-blur-sm">
      {/* glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/10 via-transparent to-black/60 pointer-events-none"></div>

      <div className="relative text-center z-10">
        {/* Tag */}
        <span className="bg-white/5 backdrop-blur-md border border-orange-500/30 text-orange-400 rounded-full h-6 text-sm font-medium px-3 py-1 uppercase shadow-sm">
          Feature
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide font-bold">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
            your code
          </span>
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mt-6">
          Modern tools, minimal effort — experience beautiful UI with smooth
          transitions and glowing highlights.
        </p>
      </div>

      {/* Feature cards */}
      <div className="relative z-10 flex flex-wrap justify-center mt-16 gap-8 px-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] lg:w-[30%] bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-500/40 backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-orange-500/20"
          >
            <div className="flex items-start">
              {/* Icon */}
              <div className="flex h-12 w-12 bg-orange-500/10 border border-orange-400/30 text-orange-400 justify-center items-center rounded-xl shadow-inner shadow-orange-900/30 mr-4">
                {item.icon}
              </div>

              <div>
                <h5 className="text-xl font-semibold text-white mb-2">
                  {item.text}
                </h5>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
