import { SidebarProvider } from "@/context/SidebarContext";
import Footer from "@/components/Footer";
import "@/styles/globals.css";







export default function App({ Component, pageProps }) {
  return (
    
    <SidebarProvider>
      
      <Component {...pageProps} />
    </SidebarProvider>
  );
}



