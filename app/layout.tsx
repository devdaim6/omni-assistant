import "./globals.css";
import { NextProvider } from "./Providers";
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
      <body>
        <NextProvider>{children}</NextProvider>{" "}
      </body>
    </html>
  );
}
