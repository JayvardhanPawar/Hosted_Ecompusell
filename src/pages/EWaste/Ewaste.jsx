import { Collapse } from "antd";
import KeepInTouch from "../../commonComponents/KeepInTouch";
import { donts, dos } from "../../staticData/ewaste";
import { CheckOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import {
  fontlg,
  fontmd,
  fontsm,
  mblg,
} from "../../utils/constant";
import { CustomDivider } from "../../commonComponents/CustomDivider";
import { ewasteData } from "../../staticData/ewastedata";
import Reveal from "../../commonComponents/Animation/Reveal";

const Ewaste = () => {
  const [isAboveSM, setIsAboveSM] = useState(window.innerWidth >= 640);
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsAboveSM(window.innerWidth >= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const returnCollapse = (item, index) => (
    <Reveal width="w-full" className="break-inside-avoid">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
        <Collapse
  ghost
  activeKey={activeKey}
  onChange={(key) => setActiveKey(key.length ? key[0] : null)}
  accordion
  items={[
    {
      key: index,
      label: (
        <p className="font-semibold text-gray-800">
          {item.state}
        </p>
      ),
      children: (
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex">
            <p className="w-1/3 font-semibold">Location</p>
            <p className="w-2/3">{item.location}</p>
          </div>
          <div className="flex">
            <p className="w-1/3 font-semibold">Address</p>
            <p className="w-2/3">{item.address}</p>
          </div>
          <div className="flex">
            <p className="w-1/3 font-semibold">Contact Person</p>
            <div className="w-2/3">
              <p>{item.contactPerson?.name}</p>
              <p>{item.contactPerson?.centralizedContactPerson}</p>
            </div>
          </div>
          <div className="flex">
            <p className="w-1/3 font-semibold">Contact Numbers</p>
            <div className="w-2/3">
              <p>Toll No: {item.contactNumber?.tollNo}</p>
              <p>Contact No: {item.contactNumber?.contactNo}</p>
              <p>Centralized: {item.contactNumber?.centralizedNo}</p>
            </div>
          </div>
        </div>
      ),
    },
  ]}
/>

      </div>
    </Reveal>
  );

  return (
    <section className="bg-[#f7f7f7]">

      {/* Banner */}
      <Reveal width="w-full">
        <div className="mt-[90px] sm:mt-0">
          <img
            src="./images/ewaste/Banner.png"
            className="w-full h-[240px] object-cover"
            loading="lazy"
            alt="Ewaste Banner"
          />
        </div>
      </Reveal>

      {/* RoHS */}
      <div className="w-[92%] max-w-[1200px] mx-auto">
        <CustomDivider title="RoHS Compliance" />
        <Reveal>
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <p className={`${fontmd} text-gray-700 text-center`}>
              We are committed to environmental responsibility. Our products
              comply with RoHS directives restricting hazardous substances,
              helping reduce environmental pollution.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Do & Don'ts */}
      <div className="w-[92%] max-w-[1200px] mx-auto mt-10">
        <CustomDivider title="Do's and Don'ts" />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border shadow-sm p-6">
            <p className={`${fontlg} font-bold text-green-700 mb-4 text-center`}>
              Do's
            </p>
            <div className="space-y-3">
              {dos.map((i, index) => (
                <div key={index} className="flex gap-3">
                  <CheckOutlined className="text-green-600 text-lg" />
                  <p className={`${fontsm} text-gray-700`}>{i}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border shadow-sm p-6">
            <p className={`${fontlg} font-bold text-red-600 mb-4 text-center`}>
              Don'ts
            </p>
            <div className="space-y-3">
              {donts.map((i, index) => (
                <div key={index} className="flex gap-3">
                  <CheckOutlined className="text-red-500 text-lg" />
                  <p className={`${fontsm} text-gray-700`}>{i}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Collection Centers */}
      <div className={`w-[92%] max-w-[1200px] mx-auto ${mblg}`}>
        <CustomDivider title="E-Waste Collection" />

        <Reveal>
          <div className="bg-white rounded-xl border shadow-sm p-6 mb-6">
            <p className={`${fontsm} text-gray-700`}>
              We have partnered with authorized recyclers for collection,
              transportation, dismantling, and recycling of E-Waste through
              state-wise collection centers.
            </p>
          </div>
        </Reveal>

        {/* Masonry Style Layout */}
        <div className="columns-1 sm:columns-2 gap-4 space-y-4">
          {ewasteData.map((item, index) => returnCollapse(item, index))}
        </div>
      </div>

      <KeepInTouch />
    </section>
  );
};

export default Ewaste;
