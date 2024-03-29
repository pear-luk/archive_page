import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pearluk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 초기 테마를 설정하는 함수

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <div className="min-h-[1038] bg-black">{children}</div>
      </body>
    </html>
  );
}
