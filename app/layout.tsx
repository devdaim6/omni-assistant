import Footer from "@/components/Home/Footer";
import { Nav } from "@/components/Nav";
import { AuthProvider, NextProvider } from "./Providers";
import "./globals.css";
import { Toaster } from "sonner";

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
            <section className="p-4 pt-16 ">{children}</section> <Footer />
          </NextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
