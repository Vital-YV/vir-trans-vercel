"use client";
import "./globals.css";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToAnchor = (id: string) => {
    const offset = 92;
    const element = document.getElementById(id);
    if (!element) return;

    const start = window.scrollY;
    const end = element.getBoundingClientRect().top + window.scrollY - offset;
    const duration = 500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, start + (end - start) * ease);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const handleFooterClick = (href: string, anchorId?: string) => {
    if (anchorId) {
      if (pathname === href) {
        scrollToAnchor(anchorId);
      } else {
        router.push(`${href}#${anchorId}`);
        setTimeout(() => scrollToAnchor(anchorId), 50);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <footer className="bg-gradient-to-t to-[#3b82f6] from-[#219EBC] text-white pt-10 pb-6 xl:px-32">
      <div className="container mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Контакты */}
        <div>
          <h3 className="text-lg xl:text-xl font-semibold mb-3">Контакты</h3>
          <ul className="space-y-1 text-sm xl:text-base font-light">
            <li className="transition hover:text-gray-200">pochita@mail.com</li>
            <li className="transition hover:text-gray-200">+7 (888) 888-88-88</li>
          </ul>
        </div>

        {/* Навигация */}
        <div>
          <h3 className="text-lg xl:text-xl font-semibold mb-3">Навигация</h3>
          <ul className="space-y-1 text-sm xl:text-base font-light">
            <li>
              <button
                className="hover:underline transition"
                onClick={() => handleFooterClick("/", "о-компании")}
              >
                О компании
              </button>
            </li>
            <li>
              <button
                className="hover:underline transition"
                onClick={() => handleFooterClick("/service")}
              >
                Услуги
              </button>
            </li>
            <li>
              <button
                className="hover:underline transition"
                onClick={() => handleFooterClick("/", "отзывы")}
              >
                Отзывы
              </button>
            </li>
            <li>
              <button
                className="hover:underline transition"
                onClick={() => handleFooterClick("/", "контакты")}
              >
                Контакты
              </button>
            </li>
          </ul>
        </div>

        {/* Бренд / описание */}
        <div>
          <h3 className="text-lg xl:text-xl font-semibold mb-3">Вир-Транс</h3>
          <p className="text-sm xl:text-base font-light leading-relaxed">
            Грузоперевозки по России и СНГ. Быстро, надежно, с гарантией. Работаем с 2010 года.
          </p>
        </div>
      </div>

      {/* Разделитель */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} Вир-Транс. Все права защищены.
      </div>
    </footer>
  );
}
