import { Red_Hat_Display } from "next/font/google";
import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export const redHatDisplay = Red_Hat_Display({
  weight: ["300", "400", "500", "700"],
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
  pageTitle: string;
  pageSubTitle?: string;
}): JSX.Element => {
  return (
    <div className={`w-full h-screen flex ${redHatDisplay.className}`}>
      <Sidebar />
      <div className="w-full md:w-[85%] h-full flex flex-col overflow-y-auto bg-background">
        <Header pageTitle={pageTitle} pageSubTitle={pageSubTitle} />
        {children}
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
