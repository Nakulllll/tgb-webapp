import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
/*import {AuthContextProvider} from "@/context/authContext";*/

export default function App({ Component, pageProps }: AppProps) {
  return (
    //<AuthContextProvider>
    <Component {...pageProps} />
    //</AuthContextProvider>
  );
}
