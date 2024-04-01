import { Inter } from "next/font/google";
import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const AuthenticatedLayout = ({
  children,
  pageTitle,
  pageSubTitle,
}: {
  children: any;
  pageTitle?: string;
  pageSubTitle?: string;
}): JSX.Element => {
  return (
    <div className={`w-full flex ${inter.className}`}>
      <Sidebar />
      {/* <div className="w-full md:w-[85%] h-full flex flex-col overflow-y-auto bg-background"> */}
      <Header />
      <div className="relative top-[50px] left-[250px] px-7 py-6" style={{width:"calc(100% - 250px)"}}>{children}</div>
      {/* </div> */}
    </div>
  );
};

export default AuthenticatedLayout;
