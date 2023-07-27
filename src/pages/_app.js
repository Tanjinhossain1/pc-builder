import TopNavbar from '@/components/Navbar';
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"


export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <TopNavbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
