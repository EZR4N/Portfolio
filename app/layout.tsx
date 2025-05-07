
import "./globals.css";
import "../globals.scss"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
})


export const metadata = {
  title: "Ezequiel's Portfolio",
  description: "Welcome to my personal portfolio built with Next.js, TypeScript, and Tailwind CSS.",
  openGraph: {
    title: "Ezequiel's Portfolio",
    description: "Explore my web development projects and skills.",
    url: "https://ezequielweb.dev",
    siteName: "Ezequiel Portfolio",
    images: [
      {
        url: "https://ezequielweb.dev/images/ezequielweb.png",
        width: 1200,
        height: 630,
        alt: "Ezequiel Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${poppins.variable} bg-[#0D1117] font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
