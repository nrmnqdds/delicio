import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const rem = localFont({ src: "../public/fonts/REM-Regular.ttf" });

export const metadata = {
  title: "Delicio!",
  description: "Generate recipes based on the ingredients you have at home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rem.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
