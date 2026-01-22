import { Segmented } from "antd";
import React, { useState } from "react";
import {
  fontlg,
  fontmd,
  fontxs,
  mblg,
  pMd,
  ptlg,
  pXSm,
} from "../../utils/constant";
import { CustomDivider } from "../../commonComponents/CustomDivider";

const Operational = () => {
  const [activeTab, setActiveTab] = useState("INSTALLATION GUIDE");

  const menus = [
    {
      label: "INSTALLATION GUIDE",
      key: 1,
      value: 1,
    },
    {
      label: "PRINTER UNPACKAGING",
      key: 2,
      value: 2,
    },
    {
      label: "OTHER INSTRUCTION",
      key: 3,
      value: 3,
    },
  ];

  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/1g8wnsLTHBo",
      title: "Amazing React Tutorial",
      description:
        "Learn the basics of React with this comprehensive tutorial covering components, state, and props.",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/VIDEO_ID_2",
      title: "Advanced React Patterns",
      description:
        "Delve into advanced React patterns like context, hooks, and performance optimization.",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/VIDEO_ID_3",
      title: "JavaScript Tips & Tricks",
      description:
        "Boost your JavaScript skills with these essential tips and tricks for writing cleaner code.",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/VIDEO_ID_4",
      title: "Web Development in 2024",
      description:
        "Stay updated with the latest trends and technologies in web development.",
    },
    // Add more video objects as needed
  ];

  return (
    <section>
      {/* Banner */}
      <div className="w-full mt-[100px] sm:mt-0">
        <img
          src="./images/download/downloadBanner.png"
          alt="Banner"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>

      <div className={`w-full ${ptlg} block sm:hidden`}>
        <div className="w-max mx-auto ">
          <Segmented
            className={`${fontmd} px-4`}
            options={menus}
            onChange={(value) => {
              const data = menus.find((i) => i.value === value).label;
              setActiveTab(data);
            }}
          />
        </div>
      </div>

      <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg}`}>
        <CustomDivider title={activeTab} />

        <div className="flex gap-5">
          {/* Menu Section  */}
          <div
            className={`w-[30%] hidden sm:block h-max rounded-2xl ${pMd} bg-white`}
          >
            {menus.map((i) => {
              return (
                <div
                  key={i.key}
                  className={`cursor-pointer ${
                    i.label !== "APP" && "border-b-2"
                  }  border-black ${pXSm} ${fontxs} font-bold ${
                    activeTab === i?.label ? "text-blue-600" : ""
                  }`}
                  onClick={() => {
                    setActiveTab(i.label);
                  }}
                >
                  {i?.label}{" "}
                </div>
              );
            })}
          </div>
          {/* Left Section  */}
          <div className="w-full sm:w-[70%] mx-auto bg-white rounded-2xl p-5 flex items-center justify-center">
            {/* <div className="grid grid-cols-1 xmd:grid-cols-2  gap-8">
              {videos.map((video) => (
                                <div
                                    key={video.id}
                                    className="border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                >
                                    <div className="aspect-video overflow-hidden">
                                        <iframe
                                            className="w-full h-full"
                                            src={video.src}
                                            title={video.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800 truncate">{video?.title}</h3>
                                        <p className="text-gray-600 text-sm mt-2 truncate">{video?.description}</p>
                                    </div>
                                </div>
                            ))}
            </div> */}
            <p className={`${fontlg} font-bold`}>
              Tutorials will be updated soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operational;
