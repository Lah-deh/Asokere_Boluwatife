import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});


export const metadata = {
  title: "Asokere Success Boluwatife — Frontend Developer",
  description:
    "Frontend developer specialising in React and Next.js. Available for remote roles",
  keywords: ["frontend developer", "React", "Next.js", "Nigeria", "remote"],
  authors: [{ name: "Asokere Success Boluwatife" }],
  openGraph: {
    title: "Asokere Success Boluwatife — Frontend Developer",
    description: "Frontend developer specialising in React and Next.js.",
    url: "https://yourportfolio.com",
    siteName: "Success Boluwatife",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asokere Success Boluwatife - Frontend Developer",
    description: "Frontend developer specialising in React and Next.js.",
    creator: "@Tifecodes",
    images: ["/og-image.png"],
  },
}


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
