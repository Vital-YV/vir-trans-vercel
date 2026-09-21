import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import TopMenu from './topMenu'
import Footer from './footer'
import { LayoutProvider } from './LayoutContext';
import FunFacts from './FunFacts';
import { DeliveryRequestForm } from './DeliveryRequest';
import ScrollToTopButton from './ScrollToTopButton'

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Вир-Транс',
  description: 'Транспортно-экспедиторская компания',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body className="relative bg-[url('/BG.png')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-[url('/BG.png')] bg-cover bg-center bg-fixed z-[-1]" />
        <div className="absolute inset-0 bg-[#219EBC]/0 dark:bg-black/60 z-0" />
        <LayoutProvider>
          <div className="relative z-20">
            <TopMenu />
          </div>
          <div className="relative z-0">{children}</div>
          {/* Кнопка «Задать вопрос» */}
          <div
            id="delivery-request"
            className="fixed bottom-4 left-[15px] z-20"
          >
            <DeliveryRequestForm />
          </div>
          <div className="relative z-10">
            <Footer />
          </div>
          <ScrollToTopButton />
          {/* Компонент будет загружен только на десктопах */}
          <div className="hidden md:block">
            <FunFacts />
          </div>

        </LayoutProvider>
      </body>
    </html>
  );
}
