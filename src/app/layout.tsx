import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Publicidade e Propaganda",
  description: "O universo criativo te aguarda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-pink-500 to-yellow-500`}
      >
        {children}
      </body>
    </html>
  );
}
