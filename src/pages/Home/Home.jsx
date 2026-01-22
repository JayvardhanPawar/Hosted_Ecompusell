import { Carousel } from "antd";
import KeepInTouch from "../../commonComponents/KeepInTouch";
import OurCertifications from "../../commonComponents/OurCertifications";
import {
  authorizedChannels,
  certificatesData,
  homeCarousalData,
  productCarousalData,
  serviceSupport,
} from "../../staticData/Data";
import HeadingFont from "../../commonComponents/Texts/HeadingFont";
import { fontmd, fontsm, fontxs, pblg, pylg, pyMd } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import Reveal from "../../commonComponents/Animation/Reveal";
import DynamicTiltCard from "../../commonComponents/Animation/DynamicTilt";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState("");
  return (
    <section className=" !h-full bg-[#f6f6f6]">
      {/* Banner Section */}
      <div className="w-full overflow-x-auto mt-[100px] sm:mt-0">
        <Reveal width="w-full">
          <Carousel
            Carousel
            arrows
            infinite={true}
            autoplay
            className="w-full h-auto"
          >
            {homeCarousalData.map((i) => {
              return (
                <div key={i.key}>
                  <img
                    className="w-full h-auto object-contains"
                    src={i.link}
                    alt={i.alt}
                    loading="lazy"
                  />
                </div>
              );
            })}
          </Carousel>
        </Reveal>
      </div>
      {/* CERTIFICATE SECTION */}
      <div
        className={`flex gap-4 w-[90%]  sm:w-[80%] sm:max-w-[1200px] mx-auto justify-between items-center ${pyMd}`}
      >
        {certificatesData.map((item) => {
          return (
            <Reveal
              width="w-full"
              className={
                " transition-all duration-500 ease-in-out hover:shadow-xl rounded-2xl"
              }
            >
              <div
                key={item.key}
                className="indGradient flex justify-center items-center 2xl:w-[280px] 2xl:h-[280px] xl:w-[240px] xl:h-[240px] lg:w-[190px] lg:h-[190px] md:w-[140px] md:h-[140px] sm:w-[115px] sm:h-[115px] 2xs:h-[55px] 2xs:w-[55px] bg-white rounded-2xl xs:gap-5 transition-all duration-1000 ease-in-out "
              >
                <img
                  src={item.link}
                  alt={`${item.title} logo`}
                  className="p-4 aspect-square"
                  loading="lazy"
                />
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* ABOUT US SECTION  */}
      <Reveal width="w-full">
        <div
          className="h-auto"
          style={{
            backgroundImage: "url(images/home/about-us-section-bg.svg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // Ensures the image scales properly
          }}
        >
          <Reveal width="w-full">
            <div className=" w-[90%] sm:w-[80%] sm:max-w-[1200px]  mx-auto">
              <div className={`w-max mx-auto ${pylg}`}>
                <HeadingFont
                  text={"About Us"}
                  className={"border-b border-black font-bold"}
                />
              </div>
              <div
                className={`flex flex-col sm:flex-row justify-between gap-5 items-center ${pblg}`}
              >
                <div className="w-1/3 lg:w-1/2 flex justify-center items-center mb-5 sm:mb-0">
                  <img
                    src="./images/home/printer.svg"
                    alt="Printer"
                    className="2xl:w-[500px] 2xl:h-[500px] xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[300px] md:w-[300px] md:h-[300px] sm:w-[250px] sm:h-250px"
                    loading="lazy"
                  />
                </div>
                <div className="w-2/3 lg:w-1/2 2xs:hidden sm:flex">
                  <p className={`${fontmd} sm:leading-[25px] text-justify`}>
                    The &quot;<b>CWC</b>&quot; brand is a product brand that
                    serves as a testament to the reliability of E-Compusell
                    Ltd. It is a dynamic and innovative Start-up specializing in
                    designing, developing, and manufacturing high-quality{" "}
                    <b>Make-In-India</b> Laser Printers & Laser Multifunction
                    Printers (MFPs) for a wide range of customers. CWC team
                    comprises of experts in the printing industry who have years
                    of experience and knowledge to draw upon. We leverage our
                    knowledge of the industry and invest in research and
                    development to create products that will meet the evolving
                    needs of customers.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>

      <Reveal width="w-full">
        <div className="sm:hidden w-[90%] sm:w-[80%] sm:max-w-[1200px] mx-auto">
          <p className="text-[14px] leading-[20px] text-justify 2xs:py-4 xs:py-6">
            The &quot;<b>CWC</b>&quot; brand is a product brand that serves as a
            testament to the reliability of E-Compusell Ltd. It is a
            dynamic and innovative Start-up specializing in designing,
            developing, and manufacturing high-quality <b>Make-In-India</b>{" "}
            Laser Printers & Laser Multifunction Printers (MFPs) for a wide
            range of customers. CWC team comprises of experts in the printing
            industry who have years of experience and knowledge to draw upon. We
            leverage our knowledge of the industry and invest in research and
            development to create products that will meet the evolving needs of
            customers.
          </p>
        </div>
      </Reveal>

      {/* PRODUCT SECTION */}
      <div className="!w-[90%] !max-w-[1200px] mx-auto h-auto">
        <div className={`w-max mx-auto ${pylg}`}>
          <Reveal width="w-full">
            <HeadingFont
              text={"Product"}
              className={"border-b border-black font-bold"}
            />
          </Reveal>
        </div>

        <Reveal width="w-full">
          <Carousel
            Carousel
            arrows
            infinite={true}
            // autoplay
            className="customArrows flex justify-between "
          >
            {productCarousalData.map((i, index) => {
              return (
                <div
                  className="!w-[90%] sm:!w-[80%] !max-w-[1200px] mx-auto !block bg-white rounded-3xl py-4 sm:py-5 md:py-7 lg:py-14 shadow-lg  2xl:mb-[85px] xl:mb-[60px] lg:mb-[30px] sm:mb-[25px] 2xs:mb-[20px]"
                  key={index}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="sm:w-1/2 flex justify-center items-center">
                      <img
                        src={i?.imgLink}
                        alt="Printer"
                        className="2xl:w-[500px] 2xl:h-[500px] xl:w-[400px] xl:[400px] lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px] 2xs:h-[100px] 2xs:w-[100px] px-4"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-[80%] sm:w-1/2 ">
                      <div className="2xs:mb-4 sm:mb-6 md:mb-8 lg:mb-12">
                        <HeadingFont
                          text={i?.printerName}
                          className={"text-center sm:text-left font-bold"}
                        />
                        <p
                          className={`text-center sm:text-left ${fontmd} font-bold`}
                        >
                          {i?.type}
                        </p>
                      </div>

                      <div className="2xs:mb-4 sm:mb-6 md:mb-8 lg:mb-12">
                        {i?.specification.map((spec) => {
                          return (
                            <div
                              key={spec.key}
                              className="flex justify-between items-center gap-2 w-full"
                            >
                              <p className={`${fontsm} font-medium w-1/2`}>
                                {spec?.title}
                              </p>
                              <p
                                className={`${fontsm} font-medium w-1/2 text-left`}
                              >
                                {spec?.desc}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex justify-center sm:justify-normal items-center gap-5 sm:gap-4 md:gap-5 lg:gap-7">
                        <p className={` ${fontmd} font-bold`}>Available on</p>
                        {i?.availableOn.map((img) => {
                          return (
                            <img
                              src={img?.link}
                              alt={img?.title}
                              key={img?.key}
                              className="w-[150px] h-auto lg:w-[100px] md:w-[90px] sm:w-[60px] 2xs:w-[60px]"
                              loading="lazy"
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </Reveal>
      </div>

      {/* SERVICE & SUPPORT SECTION */}
      <div
        style={{
          backgroundImage: "url(images/home/Service-bg.svg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // backgroundSize: 'cover', // Ensures the image scales properly
        }}
      >
        <div className={`w-max mx-auto ${pylg}`}>
          <Reveal width="w-full">
            <HeadingFont
              text={"Service & Support"}
              className={"border-b border-black font-bold"}
            />
          </Reveal>
        </div>

        <div
          className={`flex flex-col xs:flex-row w-[90%] sm:w-[80%] sm:max-w-[1200px] mx-auto gap-4 sm:gap-0 justify-center sm:justify-between items-center ${pblg}`}
        >
          {serviceSupport.map((item, index) => {
            return (
              <DynamicTiltCard key={index}>
                <div
                  className="flex flex-row xs:flex-col p-5 xs:p-0 justify-between xs:justify-center items-center 2xl:w-[350px] 2xl:h-[350px] xl:w-[300px] xl:h-[300px] lg:w-[250px] lg:h-[250px] md:w-[200px] md:h-[200px] sm:h-[150px] sm:w-[150px] xs:h-[120px] xs:w-[120px] w-full h-auto bg-white rounded-2xl gap-5 cursor-pointer shadow-2xl"
                  onClick={() => {
                    navigate(item?.navigate);
                  }}
                  onMouseEnter={() => setIsHovered(item.name)}
                  onMouseLeave={() => setIsHovered("")}
                >
                  <Reveal width="w-full">
                    <div className="w-1/2 xs:w-full text-center">
                      <img
                        src={
                          isHovered === item?.name
                            ? `${item.link}-hover.svg`
                            : `${item.link}.svg`
                        }
                        alt={`${item.title} logo`}
                        className="xl:w-[180px] xl:h-[180px] lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:h-[80px] sm:w-[80px] 2xs:w-[60px] 2xs:h-[60px] mx-auto"
                        loading="lazy"
                      />
                    </div>
                  </Reveal>
                  <Reveal width="w-full">
                    <div className="w-1/2 xs:w-full text-center">
                      <p className={`${fontxs} font-bold`}>{item.title}</p>
                    </div>
                  </Reveal>
                </div>
              </DynamicTiltCard>
            );
          })}
        </div>
      </div>

      {/* Authorized Channel partners */}

      {/* <div>
        <div className={`w-max mx-auto ${pylg}`}>
          <Reveal width="w-full">
            <HeadingFont
              text={"Authorised Sales and Service Partner"}
              className={"border-b border-black font-bold"}
            />
          </Reveal>
        </div>

        <div
          className={`flex gap-4 w-[90%]  sm:w-[80%] sm:max-w-[1200px] mx-auto justify-evenly items-center ${pyMd}`}
        >
          {authorizedChannels.map((item) => {
            return (
              <Reveal
                width="w-full"
                className={
                  " transition-all duration-500 ease-in-out hover:shadow-xl rounded-2xl"
                }
              >
                <div
                  key={item.key}
                  className=" flex justify-center items-center  2xl:w-[350px] 2xl:h-[350px] xl:w-[300px] xl:h-[300px] lg:w-[250px] lg:h-[250px] md:w-[200px] md:h-[200px] sm:h-[150px] sm:w-[150px] xs:h-[120px] xs:w-[120px] w-full h-auto bg-white rounded-2xl xs:gap-5 transition-all duration-1000 ease-in-out "
                >
                  <img
                    src={item.link}
                    alt={`${item.title} logo`}
                    className="aspect-square xl:w-[200px] xl:h-[200px] lg:w-[160px] lg:h-[160px] md:w-[140px] md:h-[140px] sm:h-[120px] sm:w-[120px] 2xs:w-[100px] 2xs:h-[100px]"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div> */}

      {/* OUR CERTIFICATION SECTION  */}
      <OurCertifications />

      {/* KEEP IN TOUCH SECTION  */}
      <KeepInTouch />
    </section>
  );
};

export default Home;
