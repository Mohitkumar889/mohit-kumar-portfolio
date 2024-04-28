import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohit Kumar Porfolio",
  description: "created by Mohit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon1.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&amp;family=Poppins:wght@100;300;400;500;600;700;800;900&amp;family=Ubuntu:wght@300;400;500;700&amp;display=swap"rel="stylesheet'
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
      </head>
      <body className={inter.className}>
        {/* <div>common nav</div> */}
        {children}
      </body>
    </html>
  );
}
