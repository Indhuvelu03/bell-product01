import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header"; // Import the Navbar (Header)
import Footer from "../components/Footer"; // Import the Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bell Brand Appalam",
  description: "Authentic South Indian Appalam and more",
  icons: {
    icon: '/brandlogo.png',
    // shortcut: '/bell-logo.png',
    // apple: '/bell-logo.png',
  },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header /> {/* Navbar */}
        <main>{children}</main> {/* Main content */}
        <Footer /> {/* Footer */}
      </body>
    </html>
  );
}
