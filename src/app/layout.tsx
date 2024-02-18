import { Poppins } from "next/font/google";
import "./globals.css";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Suspense } from "react";
import { ClipLoader } from "react-spinners";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        ></link>
        <title>Invitation Generator</title>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body
        className={
          poppins.className + " flex flex-col justify-between relative"
        }
        style={{ fontFamily: "poppins" }}
      >
        <MantineProvider>
          <Suspense
            fallback={
              <div className="w-screen h-screen flex items-center justify-center">
                <ClipLoader color="#000" size={25} />
              </div>
            }
          >
            <Banner />
            <Navbar />
            {children}
            <Footer />
          </Suspense>
        </MantineProvider>
      </body>
    </html>
  );
}
