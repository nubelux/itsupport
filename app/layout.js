import Preloader from "@/layout/Preloader";
import "./globals.css";

import "@css/aos.css";
import "@css/bootstrap.min.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/magnific-popup.min.css";
import "@css/nice-select.min.css";
import "@css/slick.min.css";
import "@css/style.css";

export const metadata = {
  title: "Tekprof - IT Services & Technology React NextJS Template",
  description:
    "Generated by tekprof - IT Services & Technology React NextJS Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
