export const menuItems = [
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