import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Tulip - Tours and Travels",
  description: "Make your travel memory with us.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
