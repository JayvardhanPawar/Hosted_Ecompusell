// 👉 SAME IMPORTS — No logic change
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { printerDetails } from "../../staticData/productDetailData";
import { Button, Carousel } from "antd";
import { convertToPrintSpecification } from "../../utils/functions";
import KeepInTouch from "../../commonComponents/KeepInTouch";
import { fontlg, fontmd, fontsm, mtMd, mylg } from "../../utils/constant";
import { CustomDivider } from "../../commonComponents/CustomDivider";
import Reveal from "../../commonComponents/Animation/Reveal";

export const PRODUCT_TYPE = {
  PRINTER: "printer",
  SCANNER: "scanner",
  CARTRIDGE: "cartridge",
};

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [currentImg, setCurrentImg] = useState("");
  const [sidePics, setSidePics] = useState([]);

  useEffect(() => {
    const data = printerDetails[params?.productId];
    setCurrentImg(`/images/productDetail/${data?.imgFolderName}/img1.webp`);

    const staticData = [
      { key: "1", link: `/images/productDetail/${data?.imgFolderName}/img1.webp` },
      { key: "2", link: `/images/productDetail/${data?.imgFolderName}/img2.webp` },
      { key: "3", link: `/images/productDetail/${data?.imgFolderName}/img3.webp` },
    ];
    setSidePics(staticData);
  }, [params.productId]);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">

      {/* Banner */}
      <Reveal width="w-full">
        <div className="mt-[90px] sm:mt-0">
          <img
            src="/images/productPage/Banner.jpg"
            alt="Banner"
            className="w-full h-[220px] sm:h-[320px] object-cover"
          />
        </div>
      </Reveal>

      {/* Main Card */}
      <div className={`w-[92%] max-w-[1200px] mx-auto ${mylg}`}>
        <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8 flex flex-col sm:flex-row gap-8">

          {/* Image Section */}
          <div className="w-full sm:w-1/2 flex gap-4">

            {/* Thumbnails */}
            {printerDetails[params.productId]?.type !== PRODUCT_TYPE.CARTRIDGE && (
              <div className="hidden sm:flex flex-col gap-3">
                {sidePics.map((i) => (
                  <div
                    key={i.key}
                    onClick={() => setCurrentImg(i.link)}
                    className="w-20 h-20 bg-white rounded-xl border shadow-md flex items-center justify-center cursor-pointer hover:scale-105 transition"
                  >
                    <img src={i.link} className="max-h-full" />
                  </div>
                ))}
              </div>
            )}

            {/* Main Image */}
            <div className="flex-1 bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-lg p-5 flex items-center justify-center">
              <img src={currentImg} className="w-full object-contain" />
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full sm:w-1/2 flex flex-col justify-between">

            <div className="space-y-4">
              <p className={`font-bold text-gray-900 ${fontlg}`}>
                {printerDetails[params.productId]?.title}
              </p>

              <div className="space-y-2">
                {printerDetails[params.productId]?.specSummary?.map((i, idx) => (
                  <p key={idx} className={`${fontsm} text-gray-600`}>
                    • {i}
                  </p>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className={`flex gap-3 ${mtMd}`}>
              {printerDetails[params.productId]?.type !== PRODUCT_TYPE.CARTRIDGE && (
                <Button
                  className="flex-1 h-14 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
                  onClick={() => {
                    const product = printerDetails[params.productId];
                    if (product?.driverDownloadLink) {
                      const link = document.createElement("a");
                      link.href = product.driverDownloadLink;
                      link.setAttribute("download", "");
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    } else {
                      navigate("/download");
                    }
                  }}
                >
                  Get Drivers
                </Button>
              )}

              <Button
                className="flex-1 h-14 rounded-xl border border-black font-semibold hover:bg-black hover:text-white transition"
                onClick={() => navigate("/contact")}
              >
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Specification Section */}
      {printerDetails[params.productId]?.type !== PRODUCT_TYPE.CARTRIDGE && (
        <div className="w-[92%] max-w-[1200px] mx-auto mb-16">
          <CustomDivider title={"PRODUCT SPECIFICATION"} />

          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
            {Object.entries(printerDetails[params.productId]?.details || {}).map(
              ([key, value], index) => (
                <div key={index} className="border-b pb-5 last:border-none">

                  <p className={`${fontmd} font-bold text-gray-900 mb-3`}>
                    {convertToPrintSpecification(key)}
                  </p>

                  {value.map((items, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-2 gap-4 text-gray-700 text-sm py-1"
                    >
                      <p className="font-medium">{items.title}</p>
                      <p>{items.desc}</p>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      )}

      <KeepInTouch />
    </section>
  );
};

export default ProductDetails;
