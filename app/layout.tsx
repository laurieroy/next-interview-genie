import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";

import { Toaster } from "sonner";
import "./globals.css";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InterviewGenie",
  description: "An AI-powered platform to prepare for mock interviews.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} pattern antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
