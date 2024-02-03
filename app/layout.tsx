import Footer from "@/components/Home/Footer";
import { Nav } from "@/components/Nav";
import { AuthProvider, NextProvider } from "./Providers";
import "./globals.css";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
export type Metadata = {
  title: string;
  description: string;
  url: string;
};

export const metadata: Metadata = {
  title: "OmniAssistant",
  description:
    "Your All-in-One AI Assistant for Communication, Recipes, and Fun Image Recognition.",
  url: `https://omni-assistant.vercel.app`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <AuthProvider>
          <NextProvider>
            <Toaster position="bottom-center" closeButton duration={2000} />
            <Nav />
            <section className="p-4 pt-16 ">
              <NextTopLoader
                color="#2299DD"
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={true}
                easing="ease"
                speed={200}
                shadow="0 0 10px #2299DD,0 0 5px #2299DD"
                template='<div class="bar" role="bar"><div class="peg"></div></div> 
                <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                zIndex={1600}
                showAtBottom={false}
              />
              {children}
            </section>{" "}
            <Footer />
          </NextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
