import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google'
import './globals.css'

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
})

export const metadata = {
  title: 'FollowBiz — Get More Reviews & Repeat Customers',
  description: 'Automated customer follow-up and review tool for salons, clinics, and trades.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  )
}
