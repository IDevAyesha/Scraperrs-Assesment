import React, { useState } from "react";

const menuItems = [
  { name: "Dashboard", imageSrc: "/assets/product.png", hasSubmenu: false },
  {
    name: "Purchase",
    imageSrc: "/assets/purchases.png",
    hasSubmenu: true,
    submenu: [
      { name: "Submenu 1", icon: "/assets/submenu-icon1.png" },
      { name: "Submenu 2", icon: "/assets/submenu-icon2.png" },
    ],
  },
  { name: "Products", imageSrc: "/assets/product.png", hasSubmenu: false },
  {
    name: "Orders",
    imageSrc: "/assets/purchases.png",
    hasSubmenu: true,
    submenu: [
      { name: "Submenu 1", icon: "/assets/submenu-icon1.png" },
      { name: "Submenu 2", icon: "/assets/submenu-icon2.png" },
    ],
  },
  { name: "Customers", imageSrc: "/assets/product.png", hasSubmenu: false },
  { name: "Shop", imageSrc: "/assets/purchases.png", hasSubmenu: false },
  {
    name: "Settings",
    imageSrc: "/assets/product.png",
    hasSubmenu: true,
    submenu: [
      { name: "Profile", icon: "/assets/submenu-icon1.png" },
      { name: "Account", icon: "/assets/submenu-icon2.png" },
    ],
  },
];

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    Purchase: false,
    Orders: false,
    Settings: false,
  });

  const toggleSubmenu = (menu) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="h-screen w-64 bg-white text-black flex flex-col p-4">
      <div className="flex items-center p-4">
        <div className="w-10 h-10 flex justify-center items-center">
          <img
            src="/assets/logo.png"
            alt="App Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <span className="ml-3 text-lg font-semibold">Halagaty</span>
      </div>

      <nav className="flex-grow mt-4">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <div
                className="px-8 py-3 flex items-center justify-start hover:bg-[#F42221] hover:text-white cursor-pointer text-gray-500 rounded-lg"
                onClick={() => item.hasSubmenu && toggleSubmenu(item.name)}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-start">
                    <img
                      src={item.imageSrc}
                      alt={item.name}
                      className="mr-3 w-5 h-5 object-contain rounded-full"
                    />
                    {item.name}
                  </div>
                </div>
              </div>

              {item.hasSubmenu && openMenus[item.name] && (
                <ul className="pl-6">
                  {item.submenu.map((submenuItem, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-red-100 hover:text-red-600 cursor-pointer flex items-center rounded-full"
                    >
                      <img
                        src={submenuItem.icon}
                        alt={submenuItem.name}
                        className="mr-2 w-4 h-4 object-contain rounded-full"
                      />
                      {submenuItem.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;