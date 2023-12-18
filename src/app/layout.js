import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/authContext";
import UserDataProvider from "@/context/UserDataContext";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StreakForge",
  description: "Transform your habits with StreakForge – the ultimate habit-building companion. Craft and break habits effortlessly as you embark on your journey to personal growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <UserDataProvider>
            <nav>
              <Navbar />
            </nav>
            <main className="h-screen w-screen sm:w-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-400 via-teal-100 to-cyan-900">{children}</main>
          </UserDataProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
