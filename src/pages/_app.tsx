// import AuthProvider from "@/context/AuthContext";
// import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import "../../views/styles/globals.css";
import { ClickedIndexContext } from "../../views/helpers/context";
import { useState } from "react";
import { sidebar } from "../../views/helpers/data/Sidebar";

export const metadata: Metadata = {
  title: "BOIIBOnline",
  description: "Generated by create next app",
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const [clickedIndex, setClickedIndex] = useState(1000000);
  return (
    // <AuthProvider>
    // <ScopedCssBaseline>
    <>
      <QueryClientProvider client={queryClient}>
        <ClickedIndexContext.Provider value={{ clickedIndex, setClickedIndex }}>
          <Component {...pageProps} />
        </ClickedIndexContext.Provider>
      </QueryClientProvider>
      <ToastContainer limit={2} />
    </>
    // </ScopedCssBaseline>
    // </AuthProvider>
  );
}
