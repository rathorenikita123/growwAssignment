import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Header from "../components/Common/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
