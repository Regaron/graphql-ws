import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    (async function () {
      import("../gqlClient");
    })();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
