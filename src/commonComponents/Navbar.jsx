import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Drawer } from "antd";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("1");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);

    if (location.pathname === "/") setActiveTab("1");
    else if (location.pathname === "/products") setActiveTab("2");
    else if (location.pathname === "/e-waste") setActiveTab("3");
    else if (location.pathname === "/about-us") setActiveTab("4");
    else if (location.pathname === "/contact") setActiveTab("5");

    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  const navList = [
    { title: "HOME", key: "1", link: "/" },
    { title: "PRODUCTS", key: "2", link: "/products" },
    { title: "E-WASTE", key: "3", link: "/e-waste" },
    { title: "ABOUT US", key: "4", link: "/about-us" },
    { title: "CONTACT", key: "5", link: "/contact" },
  ];

  return (
    <>
      {/* Space holder so content never hides under navbar */}
      <div className="h-[88px] md:h-[96px]" />

      {/* Fixed Floating Navbar */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div
          className={`max-w-screen-xl mx-auto mt-3 px-6 py-3 rounded-xl transition-all duration-300
          ${scrolled ? "bg-white shadow-lg" : "bg-white/95 shadow-md"}`}
        >
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/">
              <img
                src="/images/home/CWC_LOGO_Header.svg"
                alt="Logo"
                className="h-11 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-800">
              {navList.map((item) => (
                <Link
                  key={item.key}
                  to={item.link}
                  onClick={() => setActiveTab(item.key)}
                  className={`relative pb-1 transition-colors duration-200
                  ${activeTab === item.key ? "text-blue-600" : "hover:text-blue-500"}`}
                >
                  {item.title}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-blue-600 transition-all duration-300
                    ${activeTab === item.key ? "w-full" : "w-0 hover:w-full"}`}
                  />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setDrawerVisible(true)}
              className="md:hidden flex flex-col justify-between w-6 h-5"
            >
              <span className="block h-[2px] bg-gray-800"></span>
              <span className="block h-[2px] bg-gray-800"></span>
              <span className="block h-[2px] bg-gray-800"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        placement="right"
        open={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        closable={false}
        width={320}
        bodyStyle={{ padding: 0 }}
      >
        <div className="h-full bg-white px-6 py-6">
          
          {/* Close Button */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setDrawerVisible(false)}
              className="text-2xl font-light"
            >
              ×
            </button>
          </div>

          {/* Mobile Menu */}
          <ul className="flex flex-col gap-5 text-[16px] font-medium text-gray-900">
            {navList.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.link}
                  onClick={() => {
                    setActiveTab(item.key);
                    setDrawerVisible(false);
                  }}
                  className={`block py-3 border-b border-gray-200
                  ${activeTab === item.key ? "text-blue-600" : "hover:text-blue-500"}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
  