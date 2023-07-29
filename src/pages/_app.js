import { PcBuilderContextProvider } from "@/components/ContextApi/PcBuilderContext";
import TopNavbar from "@/components/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <PcBuilderContextProvider>
        <TopNavbar />
        <Component {...pageProps} />
      </PcBuilderContextProvider>
    </SessionProvider>
  );
}
