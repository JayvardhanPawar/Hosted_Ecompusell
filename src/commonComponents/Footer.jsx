import { useNavigate } from "react-router-dom";
import FlipLink from "./Animation/FlipLink";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#1c1c1c] text-white pt-16 pb-8">
      <div className="max-w-screen-xl mx-auto px-6">

        {/* Glass Card Container */}
        <div className="bg-[#2a2a2a]/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">

          {/* Top Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">

            {/* Logo */}
            <div className="flex flex-col items-start gap-4">
              <img
                src="/images/home/CWC_LOGO_Footer.svg"
                alt="CWC Logo"
                className="w-36"
                loading="lazy"
              />
              <p className="text-sm text-white/60 leading-relaxed">
                Reliable printing solutions designed for performance and durability.
              </p>
            </div>

            {/* Shop Online */}
            <div>
              <h3 className="text-xl font-semibold mb-5 relative">
                SHOP ONLINE
                {/* <span className="absolute left-0 -bottom-2 w-12 h-[3px] bg-gradient-to-r from-blue-500 to-orange-400 rounded-full"></span> */}
              </h3>
              <ul className="space-y-4 text-white/70 text-sm">
                <li>
                  <FlipLink>AMAZON</FlipLink>
                </li>
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="text-xl font-semibold mb-5 relative">
                IMPORTANT LINKS
                {/* <span className="absolute left-0 -bottom-2 w-12 h-[3px] bg-gradient-to-r from-red-500 to-orange-400 rounded-full"></span> */}
              </h3>
              <ul className="space-y-4 text-white/70 text-sm">
                <li onClick={() => navigate("/about-us")} className="cursor-pointer">
                  <FlipLink>Company Profile</FlipLink>
                </li>
                <li onClick={() => navigate("/warranty")} className="cursor-pointer">
                  <FlipLink>Warranty Check</FlipLink>
                </li>
                <li onClick={() => navigate("/videos")} className="cursor-pointer">
                  <FlipLink>Operational Videos</FlipLink>
                </li>
              </ul>
            </div>

            {/* Contact + Social */}
            <div>
              <h3 className="text-xl font-semibold mb-5 relative">
                STAY CONNECTED
                {/* <span className="absolute left-0 -bottom-2 w-12 h-[3px] bg-gradient-to-r from-red-500 to-orange-400 rounded-full"></span> */}
              </h3>

              {/* Social Icons */}
              <div className="flex gap-4 mb-6">
                {[
                  { img: "Instagram", link: "https://www.instagram.com/ecompusell/" },
                  { img: "Facebook", link: "#" },
                  { img: "LinkedIn", link: "https://www.linkedin.com/company/ecompusell-pvt-ltd/" },
                  { img: "TwitterX", link: "https://x.com/Ecompusell1" },
                  { img: "YouTube", link: "https://www.youtube.com/@cwcprinters" },
                ].map((item, i) => (
                  <a key={i} href={item.link} target="_blank" rel="noreferrer">
                    <img
                      src={`/images/footerIcons/${item.img}.svg`}
                      className="w-9 h-9 hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_8px_rgba(255,80,80,0.8)]"
                      alt={item.img}
                    />
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-center gap-3">
                  <img src="/images/footerIcons/Phone.svg" className="w-5" />
                  <a href="tel:18002127110">1800 212 7110</a>
                </li>

                <li className="flex items-center gap-3">
                  <img src="/images/footerIcons/Mail.svg" className="w-5" />
                  <a href="mailto:info@ecompusell.com">info@ecompusell.com</a>
                </li>

                <li className="flex items-start gap-3">
                  <img src="/images/footerIcons/Location.svg" className="w-5 mt-1" />
                  <a
                    href="https://maps.app.goo.gl/1AeQrtuzjWHGS1qPA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Office No.13, Aditya Centeegra, Fergusson College Rd, Shivajinagar, Pune – 411004
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 text-center text-white/50 text-sm">
          <p>
            © {new Date().getFullYear()} E-Compusell Limited. All Rights Reserved.
          </p>
          <p className="mt-1">
            Design & Development by 8Bit Creation.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
