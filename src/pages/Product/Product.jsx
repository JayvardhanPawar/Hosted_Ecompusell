import { Segmented, Input } from "antd";
import { useEffect, useState } from "react";
import {
  cartridgeCollection,
  printersCollection,
  scannerCollection,
} from "../../staticData/productData";
import { useNavigate } from "react-router-dom";
import KeepInTouch from "../../commonComponents/KeepInTouch";
import { CustomDivider } from "../../commonComponents/CustomDivider";
import { fontsm, fontxs, mtMd, pblg, ptlg, ptMd } from "../../utils/constant";
import Reveal from "../../commonComponents/Animation/Reveal";

const constants = {
  PRINTER: "1",
  CARTRIDGE: "2",
  SCANNER: "3",
};

const Product = () => {
  const [activeTab, setActiveTab] = useState(constants.PRINTER);
  const [productData, setProductData] = useState(printersCollection);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (activeTab === constants.PRINTER) setProductData(printersCollection);
    else if (activeTab === constants.CARTRIDGE) setProductData(cartridgeCollection);
    else setProductData(scannerCollection);
  }, [activeTab]);

  const options = [
    { label: "Printer", value: constants.PRINTER },
    { label: "Cartridge", value: constants.CARTRIDGE },
    { label: "Scanner", value: constants.SCANNER },
  ];

  const navigate = useNavigate();

  // ✅ Improved Search Filter
  const filteredData = productData.map((section) => ({
    ...section,
    data: section.data.filter((prod) => {
      const title = prod.title.toLowerCase();
      const search = searchTerm.toLowerCase().trim();

      if (!search) return true;

      // If search contains numbers → match exact number block
      if (/\d/.test(search)) {
        const numbersInTitle = title.match(/\d+/g) || [];
        return numbersInTitle.includes(search);
      }

      // Normal text search
      return title.includes(search);
    }),
  }));

  return (
    <section className="bg-[#f6f6f6]">

      {/* Banner */}
      <Reveal width="w-full">
        <div className="mt-[90px] sm:mt-0">
          <img
            src="./images/productPage/Banner.jpg"
            className="w-full h-[240px] sm:h-[320px] object-cover"
            loading="lazy"
            alt="banner"
          />
        </div>
      </Reveal>

      {/* Top Controls */}
      <div className={`w-full ${ptlg}`}>
        <div className="w-[92%] max-w-[1200px] mx-auto flex flex-col items-center gap-5">

          {/* Tabs */}
          <Reveal>
            <Segmented
              options={options}
              value={activeTab}
              onChange={(value) => {
                setProductData([]);
                setActiveTab(value);
                setSearchTerm("");
              }}
              className="shadow-sm"
            />
          </Reveal>

          {/* Search */}
          <Reveal width="w-full">
            <div className="w-full sm:w-[420px]">
              <Input
                placeholder="Search products..."
                allowClear
                size="large"
                className="rounded-lg shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </Reveal>

          <Reveal>
            <p className={`font-medium text-gray-600 ${fontxs} ${ptMd} text-center`}>
              Note: We can customize the printers / MFP / scanners as per customer requirements.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Products */}
      <div className={`w-[92%] max-w-[1200px] mx-auto ${pblg}`}>
        {filteredData.map((section, key) => {
          if (section.data.length === 0) return null;

          return (
            <div key={key}>
              <CustomDivider title={section.heading} />

              <Reveal width="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {section.data.map((prod) => (
                    <div
                      key={prod.key}
                      onClick={() => navigate(`/product-details/${prod.navigate}`)}
                      className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col items-center cursor-pointer transition hover:shadow-xl hover:-translate-y-1 duration-200"
                    >
                      <div className="h-[160px] flex items-center justify-center">
                        <img
                          src={prod.link}
                          alt={prod.title}
                          className="max-h-full object-contain"
                          loading="lazy"
                        />
                      </div>

                      <p className={`font-semibold text-center text-gray-800 ${fontsm} ${mtMd}`}>
                        {prod.title}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>

      <KeepInTouch />
    </section>
  );
};

export default Product;
