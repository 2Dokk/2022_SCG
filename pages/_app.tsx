import "../styles/app.scss";
import type { AppProps } from "next/app";
import { SSRProvider } from "@react-aria/ssr";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
