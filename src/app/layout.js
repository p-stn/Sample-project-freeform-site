import { Inter } from "next/font/google";
import localFont from '@next/font/local'

const kalameh = localFont({
  src: [
    {
      path: '../../public/font/KalamehWeb-Black.woff',
      weight: '900'
    },
    {
      path: '../../public/font/KalamehWeb-Bold.woff',
      weight: 'bold'
    },
    {
      path: '../../public/font/KalamehWeb-ExtraBold.woff',
      weight: '800'
    },
    {
      path: '../../public/font/KalamehWeb-ExtraLight.woff',
      weight: '200'
    },
    {
      path: '../../public/font/KalamehWeb-Light.woff',
      weight: '300'
    },
    {
      path: '../../public/font/KalamehWeb-Medium.woff',
      weight: '500'
    },
    {
      path: '../../public/font/KalamehWeb-Regular.woff',
      weight: 'normal'
    },
    {
      path: '../../public/font/KalamehWeb-SemiBold.woff',
      weight: '600'
    },
    {
      path: '../../public/font/KalamehWeb-Thin.woff',
      weight: '100'
    },
  ],
  variable: '--font-kalameh'
})

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "freeform",
  description: "با یک کلمه و بصورت رایگان فرم خود را بسازید",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <link rel="shortcut icon" href="/freeformLogo.png" type="image/x-icon" />

      <body className={`${kalameh.variable} font-sans`} >{children}</body>

    </html>
  );
}
