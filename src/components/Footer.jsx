import {
  communityLinks,
  platformLinks,
  resourcesLinks,
} from "../constants/index";
const Footer = () => {
  return (
    <footer className="mt-20">
      {/* Divider line */}
      <hr className="border-t border-neutral-400 border-opacity-40" />

      {/* Footer content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10 ">
        {/* Resources */}
        <div className="flex justify-center items-center sm:items-center md:items-start flex-col">
          <h2 className="font-semibold text-lg mb-3 text-white ">Resources</h2>
          <ul className="space-y-2 flex justify-center items-center sm:items-center md:items-start flex-col">
            {resourcesLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform */}
        <div className="flex justify-center items-center sm:items-center md:items-start flex-col">
          <h2 className="font-semibold text-lg mb-3 text-white ">Platform</h2>
          <ul className="space-y-2 flex justify-center items-center sm:items-center md:items-start flex-col">
            {platformLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Community */}
        <div className="flex justify-center items-center sm:items-center md:items-start flex-col">
          <h2 className="font-semibold text-lg mb-3 text-white ">Community</h2>
          <ul className="space-y-2 flex justify-center items-center sm:items-center md:items-start flex-col">
            {communityLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom small footer line (optional) */}
      <div className="border-t border-neutral-800 pt-6 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} VirtualR. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
