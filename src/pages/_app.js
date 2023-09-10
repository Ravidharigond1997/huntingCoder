import "@/styles/globals.css";
import Navabar from "../../componets/Navabar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navabar />
      <Component {...pageProps} />
    </>
  );
}
