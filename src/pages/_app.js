import { PcBuilderContextProvider } from "@/components/ContextApi/PcBuilderContext";
import Footer from "@/components/Footer";
import TopNavbar from "@/components/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <PcBuilderContextProvider>
      <SessionProvider session={pageProps.session}>
        <TopNavbar />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </PcBuilderContextProvider>
  );
}
