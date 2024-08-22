import Navbar from "@/ui/layout/Navbar/Navbar";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ReduxProvider } from "@/redux/provider";
import Footer from "@/ui/layout/Footer/Footer";

export const metadata = {
  title: "EE Portfolio",
  description: "Portfolio of Elcan Eyvazli",
};

const GOOGLE_ID = "G-LYDZKBLYFW";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GOOGLE_ID}');
          `,
          }}
        />
      </head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest"></link>
      <ReduxProvider>
        <body className="z-20">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            storageKey="theme"
          >
            <Navbar />
            <div className="min-h-screen bg-white dark:bg-primary z-20">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </body>
      </ReduxProvider>
    </html>
  );
}
