import { Button, Input, Segmented } from "antd";
import { useEffect, useState } from "react";
import KeepInTouch from "../../commonComponents/KeepInTouch";
import {
  fontlg,
  fontmd,
  fontsm,
  fontxs,
  mblg,
  mylg,
  pMd,
  pSm,
  ptlg,
  pySm,
} from "../../utils/constant";
import { CustomDivider } from "../../commonComponents/CustomDivider";
//TOAST MESSAGE
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const driverList = [
  "320",
  "P310",
  "3336",
  "4843", 
  "4055",
  "P310",
  "P4843",
  "3336",
  "CWCP",
  "CWCM",
  "X2305",
  "X3105",
  "XC315",
  "S3820",
  "RC311",
  "RB320",
  "R311",
  "R320",
  "R6430",
  "C121",
  "7180",
  "10205",
  "CWC2010",
  "CWCM315",
  "CWC510",
  "CWC462",
  "CWC710",
];

const manualList = [
  "305P5040",
  "320FDMLP9100",
  "3020P5020",
  "5040DNW",
  "2252010",
  "C311P211",
  "M2010DNW",
  "M5030DNW",
  "M5040DNW",
  "MB5020NW",
  "P5010DNW",
  "P5030DNW",
  "PB5020",
  "PB5020NW",
  "XOFF",
  "CWCMB5020",
  "CWC010",
  "CWC020",
  "CWC030",
  "CWC040",
  "CWC20",
  "CWCM315",
];

const Downloads = () => {
  const [activeTab, setActiveTab] = useState("DRIVER");

  const [hrefLink, setHrefLink] = useState("");
  console.log("href :", hrefLink);

  const [inputValue, setInputValue] = useState("");
  // const [showDownload, setShowDownload] = useState(true)

  useEffect(() => {
    setHrefLink("");
    setInputValue("");
  }, [activeTab]);

  const onSubmit = () => {
    if (activeTab === "DRIVER") {
      const driverIncluded = driverList.includes(inputValue.toUpperCase());
      if (driverIncluded) {
        // setShowDownload(true)
        setHrefLink(`/drivers/${inputValue.toUpperCase()}.zip`);
      } else {
        toast.error("Driver not found.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });
      }
    } else if (activeTab === "USER MANUAL") {
      const manualIncluded = manualList.includes(inputValue);

      if (manualIncluded) {
        // setShowDownload(true)
        setHrefLink(`/manual/${inputValue}.pdf`);
      } else {
        toast.error("Manual not found.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });
      }
    }
  };

  const menus = [
    {
      label: "DRIVER",
      key: 1,
      value: 1,
    },
    {
      label: "USER MANUAL",
      key: 2,
      value: 2,
    },
    {
      label: "APP",
      key: 3,
      value: 3,
    },
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
                  }  border-black ${pSm} ${fontsm} font-bold ${
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
          <div
            className={`w-full sm:w-[70%] bg-white rounded-2xl ${pMd} flex flex-col gap-5 sm:gap-10`}
          >
            {activeTab === "APP" ? (
              <div className="h-full flex items-center justify-center">
                <p className={`${fontlg} font-bold`}>
                  Our App is Launching Soon!
                </p>
              </div>
            ) : (
              <>
                <p className={`${fontlg}  font-bold`}>Search by Product Name</p>

                <div className="border-b border-black">
                  <Input
                    placeholder={
                      activeTab === "DRIVER"
                        ? "ENTER MODEL NUMBER"
                        : "ENTER MODEL NUMBER"
                    }
                    className={`h-14 ${fontmd}  border-0`}
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      setHrefLink("");
                    }}
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={!inputValue.length}
                    className="!h-14 !w-1/2"
                    onClick={() => {
                      onSubmit();
                    }}
                  >
                    <p className={`${fontxs} font-semibold`}>Submit</p>
                  </Button>

                  <a href={hrefLink} download className="w-1/2">
                    <Button
                      type="primary"
                      disabled={hrefLink === ""}
                      className="!h-14 !w-full"
                    >
                      <p className={`${fontxs} font-medium`}>Download</p>
                    </Button>
                  </a>
                </div>

                {/* {showDownload && <div className="flex items-stretch justify-center w-full gap-1"> */}
                {/* <div className={`bg-[#f5f5f5] shadow-down flex-1 flex justify-center items-center ${pySm} rounded-l-xl`}>
                    <div className="text-center">
                      <p className={`${fontmd} font-medium`}>Model</p>
                      <p className={`${fontxs} font-light`}>CWC P5040DN/W</p>
                    </div>
                  </div> */}

                {/* <a href={hrefLink} download >
                    <div className={`bg-[#f5f5f5] shadow-down flex-1 flex justify-center items-center ${pySm} rounded-r-xl`}>
                      <p className={`${fontmd} font-medium`}>Download</p>
                    </div>
                  </a> */}

                {/* </div>} */}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Keep In Touch  */}
      <>
        <KeepInTouch />
      </>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </section>
  );
};

export default Downloads;