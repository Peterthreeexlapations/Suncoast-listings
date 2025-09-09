import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata = {
  title: "Suncoast Home Lists — Curated South Florida Homes",
  description: "Daily lists of South Florida homes, price drops, and new construction incentives.",
};

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}