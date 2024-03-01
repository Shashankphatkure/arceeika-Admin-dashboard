import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import LayersIcon from "@mui/icons-material/Layers";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddchartIcon from "@mui/icons-material/Addchart";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <GridViewIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "eCommerce",
        path: "/ecommerce/",
      },
      {
        title: "Analytics",
        path: "/analytics/",
      },
      
    ],
  },
  
  
  
  {
    title: "Analytics",
    path: "/analytics/customers/",
    icon: <AddchartIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Customers",
        path: "/analytics/customers/",
      },
      {
        title: "Reports",
        path: "/analytics/reports/",
      },
    ],
  },
  {
    title: "eCommerce",
    path: "/ecommerce/products/",
    icon: <ShoppingCartCheckoutIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Products",
        path: "/ecommerce/products/",
      },
      {
        title: "Product Details",
        path: "/ecommerce/product-details/",
      },
      {
        title: "Create Product",
        path: "/ecommerce/create-product/",
      },
      {
        title: "Orders List",
        path: "/ecommerce/orders-list/",
      },
      {
        title: "Order Details",
        path: "/ecommerce/order-details/",
      },
      {
        title: "Customers",
        path: "/ecommerce/customers/",
      },
      {
        title: "Cart",
        path: "/ecommerce/cart/",
      },
      {
        title: "Checkout",
        path: "/ecommerce/checkout/",
      },
      {
        title: "Sellers",
        path: "/ecommerce/sellers/",
      },
    ],
  },
  
  
  {
    title: "Pages",
    path: "/pages/invoice/",
    icon: <ContentCopyIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Invoice",
        path: "/pages/invoice/",
      },
      {
        title: "Invoice Details",
        path: "/pages/invoice-details/",
      },
      {
        title: "Profile",
        path: "/pages/profile/",
      },
      {
        title: "Testimonials",
        path: "/pages/testimonials/",
      },
      {
        title: "FAQ",
        path: "/pages/faq/",
      },
      {
        title: "Gallery",
        path: "/pages/gallery/",
      },
      {
        title: "Support",
        path: "/pages/support/",
      },
      {
        title: "Search",
        path: "/pages/search/",
      },
      {
        title: "Material Icons",
        path: "/pages/material-icons/",
      },
      {
        title: "Terms & Conditions",
        path: "/pages/terms-conditions/",
      },
    ],
  },
  {
    title: "Authentication",
    path: "/authentication/sign-in/",
    icon: <LockIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Sign Up",
        path: "/authentication/sign-up/",
      },
      {
        title: "Forgot Password",
        path: "/authentication/forgot-password/",
      },
      {
        title: "Lock Screen",
        path: "/authentication/lock-screen/",
      },
      {
        title: "Confirm Mail",
        path: "/authentication/confirm-mail/",
      },
      {
        title: "Logout",
        path: "/authentication/logout/",
      },
    ],
  },
  {
    title: "Notification",
    path: "/notification/",
    icon: <NotificationsNoneIcon />,
  },
  {
    title: "Settings",
    path: "/settings/account/",
    icon: <SettingsIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Account",
        path: "/settings/account/",
      },
      {
        title: "Security",
        path: "/settings/security/",
      },
      {
        title: "Privacy Policy",
        path: "/settings/privacy-policy/",
      },
      {
        title: "Terms & Conditions",
        path: "/pages/terms-conditions/",
      },
      {
        title: "Logout",
        path: "/authentication/logout/",
      },
    ],
  },
];
