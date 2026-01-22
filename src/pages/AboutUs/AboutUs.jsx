import KeepInTouch from "../../commonComponents/KeepInTouch";
import OurCertifications from "../../commonComponents/OurCertifications";
import { aboutUs, OurCertificationsAbout } from "../../staticData/aboutUs";
import { CustomDivider } from "../../commonComponents/CustomDivider";
import { fontlg, fontmd, mblg, mbMd } from "../../utils/constant";
import Reveal from "../../commonComponents/Animation/Reveal";

const AboutUs = () => {
  return (
    <section>
      {/* Banner Section  */}
      <Reveal width="w-full">
        <div className="w-full mt-[100px] sm:mt-0">
          <img
            src="./images/aboutUs/AboutBanner.webp"
            alt="Banner"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </Reveal>

      {/* Company Profile  */}
      <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg}`}>
        <CustomDivider title={"Company Profile"} />

        <Reveal width="w-full" className={"!w-full"}>
          <div className="w-full flex lg:flex-row flex-col-reverse gap-6">
            
            {/* Text Card */}
            <div className="lg:w-[45%] w-full">
              <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 h-full">
                <p
                  className={`${fontlg} font-bold mb-3`}
                  dangerouslySetInnerHTML={{
                    __html: aboutUs.companyProfile.heading,
                  }}
                ></p>
                <p className={`${fontmd} font-medium`}>
                  {aboutUs.companyProfile.desc}
                </p>
              </div>
            </div>

            {/* Video Card */}
            <div className="lg:w-[55%] flex items-center">
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="aspect-video overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/7OmRHGHMGsk?si=yM3VrCjptfV5CtJU&amp;start=1"
                    title="CWC Logo Reveal"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    CWC Logo Reveal: Unleashing Our Energy and Passion
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 truncate">
                    The CWC Laser Printer is a remarkable achievement for the
                    Indian technology industry...
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </div>

      {/* Image Section 1st */}
      <Reveal width="w-full">
        <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg}`}>
          <img
            src="images/aboutUs/about_1.png"
            className="w-full h-auto rounded-xl shadow-md"
            alt="banner"
            loading="lazy"
          />
        </div>
      </Reveal>

      {/* Mid Info Section */}
      <Reveal width="w-full">
        <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg}`}>
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
            <p className={`${fontmd} font-semibold text-justify`}>
              {aboutUs?.info}
            </p>
          </div>
        </div>
      </Reveal>

      {/* Image Section 2nd */}
      <Reveal width="w-full">
        <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg}`}>
          <img
            src="images/aboutUs/about_2.png"
            className="w-full h-auto rounded-xl shadow-md"
            alt="banner"
            loading="lazy"
          />
        </div>
      </Reveal>

      {/* Mid Info Section 2nd */}
      <Reveal width="w-full">
        <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg}`}>
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
            <p className={`${fontmd} font-semibold text-justify`}>
              {aboutUs?.info2}
            </p>
          </div>
        </div>
      </Reveal>

      {/* Image Section 3rd */}
      <div className={`w-[90%] sm:max-w-[1200px] mx-auto`}>
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-6">
          <Reveal>
            <img
              src="images/aboutUs/mission.png"
              alt="our mission"
              className="w-full h-auto rounded-xl shadow-md"
              loading="lazy"
            />
          </Reveal>
          <Reveal width="w-full">
            <img
              src="images/aboutUs/vision.png"
              alt="our vision"
              className="w-full h-auto rounded-xl shadow-md"
              loading="lazy"
            />
          </Reveal>
        </div>

        <Reveal width="w-full">
          <img
            src="images/aboutUs/aim.png"
            alt="aim"
            className="w-full h-auto rounded-xl shadow-md"
            loading="lazy"
          />
        </Reveal>
      </div>

      {/* Certifications */}
      <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg}`}>
        <CustomDivider title={"Our Certification"} />

        {OurCertificationsAbout.map((i) => {
          return (
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-5 mb-4">
              <p className={`${fontmd} font-bold text-justify text-[#1D9BD7]`}>
                {i?.heading}
              </p>
              <p className={`${mbMd} ${fontmd} font-medium text-justify`}>
                {i?.desc}
              </p>
            </div>
          );
        })}

        <p className={`${fontmd} font-bold`}>
          *Note: If you need the soft copy please mail us
        </p>
      </div>

      {/* Keep In Touch */}
      <KeepInTouch />
    </section>
  );
};

export default AboutUs;
