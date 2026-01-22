import { Button, Input, Select } from "antd";
import KeepInTouch from "../../commonComponents/KeepInTouch";
import { CustomDivider } from "../../commonComponents/CustomDivider";
import {
  fontlg,
  fontmd,
  fontsm,
  fontxs,
  mylg,
  pylg,
} from "../../utils/constant";
import { warranty } from "../../staticData/warrantyData";
import { useEffect, useState } from "react";

//TOAST MESSAGE
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Warranty = () => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue.length === 0) {
      setData(null);
    }
  }, [inputValue]);

  const onSubmit = () => {
    const data = warranty.find((i) => i.serialNo === inputValue);

    if (data === undefined) {
      toast.error("Item not found,Please enter correct serial Number.", {
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
    } else {
      setData(data);
    }
  };

  return (
    <section>
      {/* Banner */}
      <div className="w-full mt-[100px] sm:mt-0">
        <img
          src="./images/warranty/Warranty.png"
          alt="Banner"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>

      {/* Warranty Section  */}

      <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mylg}`}>
        <CustomDivider title={"WARRANTY"} />

        <div
          className={`bg-white w-[90%] mx-auto ${pylg} rounded-2xl shadow-2xl`}
        >
          <div className="w-[95%] mx-auto flex flex-col 2xs:gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center px-5">
            <p className={`${fontlg} font-medium text-center`}>
              To Check Warranty Status, Enter your serial no.
            </p>
            <div className="border-b border-black w-full sm:w-[400px]">
              <Input
                placeholder="Enter Serial Number"
                className={`h-14 ${fontmd} border-0`}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
            </div>
            <div>
              <Button
                disabled={!inputValue.length}
                type="primary"
                htmlType="submit"
                className={`2xs:h-8 xs:h-10 sm:h-12 lg:h-14 !w-52`}
                onClick={() => {
                  onSubmit();
                }}
              >
                <p className="${fontsm}  font-semibold">Submit</p>
              </Button>
            </div>

            {/* warranty info section  */}
            {data !== null && (
              <div className="flex flex-col sm:flex-row items-stretch justify-center w-full gap-2 sm:gap-1">
                <div className="bg-[#f5f5f5] shadow-down flex-[1] flex-grow flex justify-center  items-center p-2 py-2 xs:py-4 sm:py-6 rounded-xl">
                  <div className="text-center">
                    <p className={`${fontsm} font-medium`}>SERIAL NUMBER</p>
                    <p className={`${fontxs} font-light`}>
                      {data?.serialNo || "-"}
                    </p>
                  </div>
                </div>
                <div className="bg-[#f5f5f5] shadow-down flex-1 flex justify-center items-center py-2 xs:py-4 sm:py-6  p-2 rounded-xl">
                  <div className="text-center">
                    <p className={`${fontsm} font-medium`}>STATUS</p>
                    <p className={`${fontxs} font-light text-center`}>
                      Purchase Date : {data?.purchaseDate || "-"} <br />
                      Warranty Date : {data?.warrantyDate || "-"}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* KeepInTOuch  */}
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

export default Warranty;
