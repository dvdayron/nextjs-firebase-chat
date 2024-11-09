import localFont from 'next/font/local'
import './globals.css'
import RealTimeChat from '@/components/realtime-chat/realtime-chat'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "NextJs Firebase Chat",
  description: "Realtime chat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

        <RealTimeChat />
      </body>
    </html>
  );
}
