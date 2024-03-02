import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "خانه",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "درباره ما",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "بلاگ",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "پشتیبانی",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "صفحات",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "صفحه درباره ما",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "صفحه ارتباط با ما",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "صفحه شبکه وبلاگ",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "صفحه نوار کناری وبلاگ",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "صفحه جزئیات وبلاگ",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "صفحه ورود",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "صفحه ثبت نام",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "صفحه خطا",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
