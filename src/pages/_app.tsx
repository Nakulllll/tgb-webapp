import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect} from "react";
import firebase from "firebase";
/*import {AuthContextProvider} from "@/context/authContext";*/

const firebaseConfig = {
  apiKey: "AIzaSyACgIcnWJbp_uPnIEXCdYvk08yHm5WpHnU",
  authDomain: "guiding-bee.firebaseapp.com",
  projectId: "guiding-bee",
  storageBucket: "guiding-bee.appspot.com",
  messagingSenderId: "1039333371541",
  appId: "1:1039333371541:web:b01bdf36cfd2c6fbacf59c",
  measurementId: "G-XJGZCW2Z96"
};


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize Firebase if it hasn't been initialized
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  return (
      //<AuthContextProvider>
        <Component {...pageProps} />
      //</AuthContextProvider>
  )
}
