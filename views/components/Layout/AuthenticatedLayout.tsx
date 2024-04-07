import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
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
  const [isSideBar, setIsSideBar] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    } else {
      // Define a fallback value if window is not available (e.g., for server-side rendering)
      setScreenWidth(0); // or any other default value
    }
  }, []);
  return (
    <div className={`w-full flex ${inter.className}`}>
      <Sidebar isSidebar={isSideBar} setIsSidebar={setIsSideBar} />
      {/* <div className="w-full md:w-[85%] h-full flex flex-col overflow-y-auto bg-background"> */}
      <Header isSidebar={isSideBar} setIsSidebar={setIsSideBar} />
      <div
        className="relative top-[50px] lg:left-[250px] px-4 lg:px-7 py-4 lg:py-6"
        style={{ width: `${screenWidth > 1023 ? "calc(100% - 250px)" : "100%"}` }}
      >
        {children}
      </div>
      {/* </div> */}
    </div>
  );
};

export default AuthenticatedLayout;
