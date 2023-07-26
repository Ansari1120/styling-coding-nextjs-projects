import Navbar from "@/components/sections/Navbar";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import Providers from "@/components/sections/provider";
import { ClerkProvider } from "@clerk/nextjs";
import { MenuBar } from "@/components/sections/authentication";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Providers>
            <MenuBar />
            <Navbar />
            <main className="px-8">{children}</main>
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
